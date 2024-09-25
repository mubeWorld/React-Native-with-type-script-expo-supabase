import { StyleSheet,Image } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { Menu } from '@/assets/Data/Menu';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      {Menu?.map((menuItem)=>{
        return <>
         <Text style={styles.title}>{menuItem.name}</Text>
          <Image 
            style={styles.foodImage}
            source={{uri:menuItem.imageUrl}}
          />
         <Text style={styles.price}>{menuItem.price}</Text>
      </>
      })}
     
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  foodImage:{
    width:'100%',
    aspectRatio:2/1
  }
});
