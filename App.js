/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  RefreshControl,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import moment from 'moment';

export const App = () => {
  const data = [
    {
      label: 'ヘッダ要素A',
      list: ['データA1', 'データA2', 'データA3', 'データA4', 'データA5'],
    },
    {
      label: 'ヘッダ要素B',
      list: ['データB1', 'データB2'],
    },
    {
      label: 'ヘッダ要素C',
      list: ['データC1', 'データC2', 'データC3'],
    },
    {
      label: 'ヘッダ要素D',
      list: ['データD1', 'データD2', 'データD3', 'データD4'],
    },
    {
      label: 'ヘッダ要素E',
      list: ['データE1', 'データE2', 'データE3', 'データE4', 'データE5'],
    },
  ];

  // 表示データからstickyHeaderIndicesを取得
  const stickyHeaderIndices = data.reduce(
    (acc, cur, index, _list) => {
      // 最後の要素は使用しない
      if (_list.length - 1 !== index) {
        // 直前のSticky要素の位置を取得
        const lastStickyIndex = acc[acc.length - 1];
        // ヘッダとしての1要素 + 内包しているlist要素数を足して新しいStickyのindexとして設定
        acc.push(lastStickyIndex + cur.list.length + 1);
      }
      console.log(acc);
      return acc;
    },
    [0],
  );

  const renderItem = ({item}) => (
    <View style={{flex: 1}}>
      <ScrollView>
        <ScrollView horizontal={true}>
          {data.map((d, index) => {
            console.log(index);
            return (
              <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'column'}}>
                  <Text>xxx</Text>
                  <Text>xxx</Text>
                  <Text>xxx</Text>
                </View>
                <View style={{flex: 1, backgroundColor: 'white'}}>
                  <Text>xxxxx</Text>
                  <Text>xxxxx</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}></View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    backgroundColor: 'red',
                  }}>
                  <Text>ssss</Text>
                  {data.map((d, index) => {
                    return [
                      <View key={`header_${d.label}`} style={{flex: 1}}>
                        <Text>{d.label}</Text>
                        <Text>xxxxxxxxxxxxx</Text>
                      </View>,
                      ...d.list.map(record => {
                        return (
                          <View
                            key={`${d.list}_${record}`}
                            style={{padding: 10}}>
                            <Text>{record}</Text>
                          </View>
                        );
                      }),
                    ];
                  })}
                </View>
              </View>
            );
          })}
        </ScrollView>
      </ScrollView>
    </View>
  );

  const renderItem2 = ({item}) => (
    <View style={{flex: 1, flexDirection: 'row'}}>
      {data.map((d, index) => {
        console.log(index);
        return (
          <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'red'}}>
            <Text>ssss</Text>
          </View>
        );
      })}
    </View>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        stickyHeaderIndices={[1]}
        horizontal={false}
        // stickyHeaderIndices={[1]}
        style={{flex: 1}}>
        {/* <View style={{flex: 1}}> */}
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View horizontal={true}>
            {[...Array(1)].map((_, i) => (
              <View key={i} style={{}}>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  ヘッダー{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  6の塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  6の塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  6の塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  6の塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  6の塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  6の塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  6の塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  6の塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  6の塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  6の塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  6の塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  6の塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  6の塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  6の塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  6の塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  6の塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  6の塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  6の塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  6の塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  6の塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  6の塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  6の塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  6の塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  6の塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  6の塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  6の塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  6の塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  6の塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  6の塊{i}
                </Text>
              </View>
            ))}
          </View>
          <ScrollView horizontal={true}>
            {[...Array(11)].map((_, i) => (
              <View key={i} style={{}}>
                <Text
                  style={{
                    borderWidth: 1,
                    paddingHorizontal: 10,
                    // position: 'absolute',
                  }}>
                  ヘッダー{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  bbの塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  ccの塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  ffの塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  ggの塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  aaの塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  bbの塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  ccの塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  ffの塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  ggの塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  aaの塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  bbの塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  ccの塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  ffの塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  ggの塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  aaの塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  bbの塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  ccの塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  ffの塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  ggの塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  aaの塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  bbの塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  ccの塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  ffの塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  ggの塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  aaの塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  bbの塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  ccの塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  ffの塊{i}
                </Text>
                <Text style={{borderWidth: 1, paddingHorizontal: 10}}>
                  ggの塊{i}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
        {/* </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
