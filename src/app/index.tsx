import { Link } from "expo-router";
import {Pressable, StyleSheet, Text, View, ScrollView} from 'react-native';
import { StatusBar } from "expo-status-bar";
export default function () 
{
    return (
     <ScrollView>
          <View style = {styles.container}>
             <Link style ={styles.links}href="/sobre"> Pressione para ir para a tela Sobre</Link><br/>
             <Link style ={styles.links}href="/parceria"> Pressione para ir para a tela Parceria</Link><br/>
             <Link style ={styles.links}href="/relatorio"> Pressione para ir para a tela Relatório</Link><br/>
             <Link style ={styles.links}href="/sugestoes"> Pressione para ir para a tela Sugestões</Link><br/>
             <Link style ={styles.links}href="/perfil"> Pressione para ir para a tela Perfil</Link><br/>
             <Link style ={styles.links}href="/usuarioAnonimo"> Pressione para ir para a tela Anônimo</Link><br/>
             <Link style ={styles.links}href="/formulario"> Pressione para ir para a tela Formulário</Link><br/>
             <Link style ={styles.links}href="/cases"> Pressione para ir para a tela Casos de Sucesso</Link><br/>
             </View>
     </ScrollView>
    )
}

const styles = StyleSheet.create
({
    container: {
        flex:1,
        backgroundColor: '#3525d9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    links:{
        marginTop:20,
        fontSize:18,
        color:'#d96b25',
        backgroundColor: '#082c03ff',
        paddingTop:15,
        paddingEnd:15,
        paddingBottom:15,
        borderRadius:25,
    }
});