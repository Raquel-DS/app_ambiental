import { Link, } from "expo-router";
import {Pressable, StyleSheet, Text, View, ScrollView,} from 'react-native';
import { Card } from 'react-native-paper';
import { StatusBar } from "expo-status-bar";

export default function () 
{
    return (
     <View>
      <View style = {styles.container}>
           <View style = {styles.card}>
             <Link style ={styles.cardtexto}href="/sobre"> Pressione para ir para a tela Sobre</Link><br/>
       </View>

     
           <View style = {styles.card1}>
             <Link style ={styles.cardtexto}href="/parceria"> Pressione para ir para a tela Parceria</Link><br/>
       </View>

       
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

       
       <View style = {styles.card}>
             <Link style ={styles.cardtexto}href="/formulario"> Pressione para ir para a tela Formulário</Link><br/>
       </View>
       
       
           <View style = {styles.card1}>
             <Link style ={styles.cardtexto}href="/cases"> Pressione para ir para a tela Casos de Sucesso</Link><br/>
       </View>
       </View> 
       </View>       
       
       
            );
            
  }

const styles = StyleSheet.create
({
    container: {
        backgroundColor: '#c398ceff',
        alignItems: 'center',
        flexDirection: 'column',
        flexWrap:'wrap',
        justifyContent: 'center',
        padding:20,
        flex:2,
        height: 800,
        width:"100%",
        
      
    },
         
card: {
      
    backgroundColor: '#66436eff',
    height: 180,
    width: "50%",
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    
    
  },
  card1: {
    backgroundColor: '#28152cff',
    height: 180,
    width: "50%",
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    
    
  },
  cardtexto: {
    fontSize: 25,
    color: 'white',
    fontFamily: 'montserrat',
  },
});

