import { Link, } from "expo-router";
import {Pressable, StyleSheet, Text, View, ScrollView,} from 'react-native';
import { Card } from 'react-native-paper';
import { StatusBar } from "expo-status-bar";

export default function () 
{
    return (
     <ScrollView>
           <View style = {styles.container}>
             
           <View style = {styles.card}>
             <Link style ={styles.cardtexto}href="/sobre"> Pressione para ir para a tela Sobre</Link><br/>
       </View>
        <View style = {styles.container1}></View>
           <View style = {styles.card1}>
             <Link style ={styles.cardtexto}href="/parceria"> Pressione para ir para a tela Parceria</Link><br/>
       </View>
        <View style = {styles.container}></View>
            <View style = {styles.card}>
             <Link style ={styles.cardtexto}href="/relatorio"> Pressione para ir para a tela Relatório</Link><br/>
       </View>
            <View style = {styles.card1}>
             <Link style ={styles.cardtexto}href="/sugestoes"> Pressione para ir para a tela Sugestões</Link><br/>
       </View>
       
       <View style = {styles.card}>
             <Link style ={styles.cardtexto}href="/perfil"> Pressione para ir para a tela Perfil</Link><br/>
       </View>
       <View style = {styles.card1}>
             <Link style ={styles.cardtexto}href="/usuarioAnonimo"> Pressione para ir para a tela Anônimo</Link><br/>
       </View>
       <View style = {styles.container1}></View>
       <View style = {styles.card}>
             <Link style ={styles.cardtexto}href="/formulario"> Pressione para ir para a tela Formulário</Link><br/>
       </View>
           <View style = {styles.card1}>
             <Link style ={styles.cardtexto}href="/cases"> Pressione para ir para a tela Casos de Sucesso</Link><br/>
       </View>
       </View>
       </ScrollView>
            );
            
  }

const styles = StyleSheet.create
({
    container: {
        flex:1,
        backgroundColor: '#c398ceff',
        alignItems: 'left',
        justifyContent: 'center', 
        flexDirection: 'row',  
        height: 500,
        wight:"50%",
      
    },
    container1: {
        flex:1,
        backgroundColor: '#c398ceff',
        alignItems: 'left',
        justifyContent: 'center', 
        flexDirection: 'column',  
        height: 100,
        wight:"50%",
      
    },
     
card: {
    backgroundColor: '#66436eff',
    height: 100,
    width: "50%",
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    flexDirection: 'row', 
    gap:10
  },
  card1: {
    backgroundColor: '#28152cff',
    height: 100,
    width: "50%",
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    flexDirection: 'row', 
  },
  cardtexto: {
    fontSize: 25,
    color: 'white',
    fontFamily: 'montserrat',
  },
});

