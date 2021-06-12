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
  Alert,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';

const App = () => {
  const [refreshFlag, setRefreshFlag] = useState(); // 上下の読み込みフラグ
  const [height, setHeight] = useState(0); // 新規取得した要素の高さ
  const ref = useRef(null);
  let num = []; // 新規取得したリストの高さを格納

  useEffect(() => {
    // スクロールでデータを取得したらフラグをfalseに戻す
    if (refreshFlag) {
      setRefreshFlag(false);
    }
  }, [refreshFlag]);

  // 表示の最初の日付(TODO: 今日の日付にする)
  const [firstDate, setFirstDate] = useState('2021-06-01');
  // 表示の最後の日付(TODO: 今日の日付+20日後)
  const [lastDate, setLastDate] = useState('2021-06-20');

  // ------- 初期データ ----------
  const defaultData = [
    {
      dateTime: '2021-06-01',
      datas: [
        {id: 1, name: 'name', email: 'aaaa'},
        {id: 2, name: 'name', email: 'aaaa'},
      ],
    },
    {
      dateTime: '2021-06-02',
      datas: [
        {id: 1, name: 'name', email: 'aaaa'},
        {id: 2, name: 'name', email: 'aaaa'},
      ],
    },
    {
      dateTime: '2021-06-03',
      datas: [
        {id: 1, name: 'name', email: 'aaaa'},
        {id: 2, name: 'name', email: 'aaaa'},
      ],
    },
    {
      dateTime: '2021-06-04',
      datas: [
        {id: 1, name: 'name', email: 'aaaa'},
        {id: 2, name: 'name', email: 'aaaa'},
      ],
    },
    {
      dateTime: '2021-06-05',
      datas: [
        {id: 1, name: 'name', email: 'aaaa'},
        {id: 2, name: 'name', email: 'aaaa'},
      ],
    },
    {
      dateTime: '2021-06-06',
      datas: [
        {id: 1, name: 'name', email: 'aaaa'},
        {id: 2, name: 'name', email: 'aaaa'},
      ],
    },
    {
      dateTime: '2021-06-07',
      datas: [
        {id: 1, name: 'name', email: 'aaaa'},
        {id: 2, name: 'name', email: 'aaaa'},
      ],
    },
    {
      dateTime: '2021-06-08',
      datas: [
        {id: 1, name: 'name', email: 'aaaa'},
        {id: 2, name: 'name', email: 'aaaa'},
      ],
    },
    {
      dateTime: '2021-06-09',
      datas: [
        {id: 1, name: 'name', email: 'aaaa'},
        {id: 2, name: 'name', email: 'aaaa'},
      ],
    },
    {
      dateTime: '2021-06-10',
      datas: [
        {id: 1, name: 'name', email: 'aaaa'},
        {id: 2, name: 'name', email: 'aaaa'},
      ],
    },
    {
      dateTime: '2021-06-11',
      datas: [
        {id: 1, name: 'name', email: 'aaaa'},
        {id: 2, name: 'name', email: 'aaaa'},
      ],
    },
    {
      dateTime: '2021-06-12',
      datas: [
        {id: 1, name: 'name', email: 'aaaa'},
        {id: 2, name: 'name', email: 'aaaa'},
      ],
    },
    {
      dateTime: '2021-06-13',
      datas: [
        {id: 1, name: 'name', email: 'aaaa'},
        {id: 2, name: 'name', email: 'aaaa'},
      ],
    },
    {
      dateTime: '2021-06-14',
      datas: [
        {id: 1, name: 'name', email: 'aaaa'},
        {id: 2, name: 'name', email: 'aaaa'},
      ],
    },
    {
      dateTime: '2021-06-15',
      datas: [
        {id: 1, name: 'name', email: 'aaaa'},
        {id: 2, name: 'name', email: 'aaaa'},
      ],
    },
    {
      dateTime: '2021-06-16',
      datas: [
        {id: 1, name: 'name', email: 'aaaa'},
        {id: 2, name: 'name', email: 'aaaa'},
      ],
    },
    {
      dateTime: '2021-06-17',
      datas: [
        {id: 1, name: 'name', email: 'aaaa'},
        {id: 2, name: 'name', email: 'aaaa'},
      ],
    },
    {
      dateTime: '2021-06-18',
      datas: [
        {id: 1, name: 'name', email: 'aaaa'},
        {id: 2, name: 'name', email: 'aaaa'},
      ],
    },
    {
      dateTime: '2021-06-19',
      datas: [
        {id: 1, name: 'name', email: 'aaaa'},
        {id: 2, name: 'name', email: 'aaaa'},
      ],
    },
    {
      dateTime: '2021-06-20',
      datas: [
        {id: 1, name: 'name', email: 'aaaa'},
        {id: 2, name: 'name', email: 'aaaa'},
      ],
    },
  ];
  // データ設定
  const [data, setData] = useState(defaultData);

  // ------- 上スクロール ---------
  const upFetch = () => {
    // 現在表示されている最初の日付
    const mo = moment(new Date(firstDate)).format('YYYY-MM-DD');
    // 20日前取得
    let addFirstDate = [];
    addFirstDate = [...Array(20)].map((_, i) => {
      // 前20日追加
      let add = moment(mo)
        .subtract(20 - i, 'days')
        .format('YYYY-MM-DD');
      // データ返却
      return {
        dateTime: add,
        datas: [
          {id: 1, name: 'name', email: 'aaaa'},
          {id: 2, name: 'name', email: 'aaaa'},
        ],
      };
    });
    // 表示の一番上の日付をセット
    setFirstDate(addFirstDate[0].dateTime);
    // 表示する数を追加
    setData([...addFirstDate, ...data]);
    // 表示するリスト位置を設定
    ref.current?.scrollToOffset({
      offset: height,
      animated: false,
    });
  };

  // ------- 下スクロール ---------
  const downFetch = () => {
    const mo = moment(new Date(lastDate)).format('YYYY-MM-DD');
    // 20日後取得
    let addLastDate = [];
    addLastDate = [...Array(20)].map((_, i) => {
      // 後20日追加
      let add = moment(mo)
        .add(i + 1, 'days')
        .format('YYYY-MM-DD');
      // データ返却
      return {
        dateTime: add,
        datas: [
          {id: 1, name: 'name', email: 'aaaa'},
          {id: 2, name: 'name', email: 'aaaa'},
        ],
      };
    });
    // 表示の一番最後の日付をセット
    setLastDate(addLastDate[19].dateTime);
    // 表示する数を追加
    setData([...data, ...addLastDate]);
  };

  // ----------- リスト表示 ------------
  return (
    <View style={{flex: 1, paddingVertical: 40}}>
      <FlatList
        ref={ref}
        data={data}
        keyExtractor={item => item.dateTime}
        onEndReached={() => {
          console.log('下にひっぱる');
          setRefreshFlag(true);
          setTimeout(() => {
            downFetch();
            // ここでfalse
            setRefreshFlag(false);
          }, 3000);
        }}
        onEndReachedThreshold={0}
        ListFooterComponent={() => (
          // refreshFlagがtrueの場合にフッターにインジケーター
          <ActivityIndicator size="large" animating={refreshFlag} />
        )}
        renderItem={({item, index}) => {
          // TODO: コンポーネント化
          return (
            <View
              // 20件毎取得することを想定
              // 上に増えた分の高さを取得
              onLayout={
                index < 20
                  ? e => {
                      /* コンポーネントの高さを取得し、stateに保存 */
                      num = [...num, Math.floor(e.nativeEvent.layout.height)];
                      // 配列が20になったら配列の数値をたす
                      if (num.length === 20) {
                        let total = num.reduce((sum, element) => {
                          return sum + element;
                        }, 0);
                        // 合計をセット
                        setHeight(total);
                      }
                    }
                  : null
              }
              key={item.dateTime}
              style={{flex: 1, backgroundColor: 'yellow'}}>
              <Text>{item.dateTime}</Text>
              {item.datas.map(data => (
                <View
                  key={data.id}
                  style={{
                    flexDirection: 'row',
                    // marginVertical: 10,
                    // paddingHorizontal: 10,
                    backgroundColor: 'red',
                    borderWidth: 1,
                  }}>
                  {/* 横表示 */}
                  <View style={{backgroundColor: 'gray', paddingHorizontal: 5}}>
                    <Text>日付を表示</Text>
                  </View>
                  {/* 縦表示 */}
                  <View style={{flex: 1}}>
                    <Text style={{fontSize: 24}} onPress={() => alert(data.id)}>
                      {data.id} {data.name} {data.email}
                    </Text>
                    <Text style={{fontSize: 24}} onPress={() => alert(data.id)}>
                      {data.id} {data.name} {data.email}
                    </Text>
                  </View>
                  {/* 横表示 */}
                  <View style={{backgroundColor: 'gray'}}>
                    <TouchableOpacity
                      style={{flex: 1}}
                      onPress={() => console.log(1234)}>
                      <Text>アイコン</Text>
                      <Text>タップ</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
          );
        }}
        refreshControl={
          <RefreshControl
            refreshing={refreshFlag}
            onRefresh={() => {
              console.log('上にひっぱる');
              setRefreshFlag(true);
              upFetch();
            }}
          />
        }
      />
    </View>
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
