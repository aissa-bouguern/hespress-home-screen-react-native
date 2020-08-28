import React, {Component} from 'react';

import {FlatList, View, ActivityIndicator} from 'react-native';

import ArticlePreviewCard from './components/ArticlePreviewCard';

// axios service
import axiosService from './utils/lib/axiosService';

export default class AllBeersScreen extends Component {
  state = {
    data: [],
    page: 1,
    loading: true,
    loadingMore: false,
    error: null,
    refreshing: false,
  };

  componentDidMount() {
    this._fetchAllArticles();
  }

  _fetchAllArticles = () => {
    const {page} = this.state;
    const URL = `/articles?limit=10&page=${page}`;

    axiosService
      .request({
        url: URL,
        method: 'GET',
      })
      .then((response) => {
        const fetchedData = response.data;
        console.log(fetchedData);

        this.setState((prevState, nextProps) => ({
          data:
            page === 1
              ? Array.from(fetchedData)
              : [...this.state.data, ...fetchedData],
          loading: false,
          loadingMore: false,
          refreshing: false,
        }));
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          error,
          loading: false,
          loadingMore: false,
          refreshing: false,
        });
      });
  };

  _handleLoadMore = () => {
    this.setState(
      (prevState, nextProps) => ({
        page: prevState.page + 1,
        loadingMore: true,
      }),
      () => {
        this._fetchAllArticles();
      },
    );
  };

  _renderFooter = () => {
    if (!this.state.loadingMore) return null;

    return (
      <View
        style={{
          position: 'relative',
          width: '100%',
          height: 50,
          justifyContent: 'center',
        }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  };

  _handleRefresh = () => {
    this.setState(
      {
        page: 1,
        refreshing: true,
      },
      () => {
        this._fetchAllArticles();
      },
    );
  };

  render() {
    return (
      <FlatList
        data={this.state.data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => {
          return (
            <ArticlePreviewCard
              title={item.title}
              imageUrl={item.imageUrl}
              category={item.category}
            />
          );
        }}
        onEndReached={this._handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={this._renderFooter}
        onRefresh={this._handleRefresh}
        refreshing={this.state.refreshing}
      />
    );
  }
}
