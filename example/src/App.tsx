import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { multiply, sum } from 'multiply-rn';

export default function App() {
  const [multiplyResult, setMultiplyResult] = React.useState<
    number | undefined
  >();
  const [sumResult, setSumResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    multiply(3, 7).then(setMultiplyResult);
    sum(3, 7).then(setSumResult);
  }, []);

  return (
    <View style={styles.container}>
      <Text>multiplyResult: {multiplyResult}</Text>
      <Text>sumResult: {sumResult}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
