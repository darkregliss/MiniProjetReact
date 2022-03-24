import React from 'react'
import { View, Text, Image, FlatList, ScrollView } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Card from '../components/card'
import Avatar from '../components/avatar'
import { CommonText } from '../components/texts'

const Home = ({ navigation }) => {
  return (
    <ScrollView>
      <TextStyled>Home</TextStyled>
      <Button onPress={() => navigation.navigate('Login')}>
        <TextStyled>To Login</TextStyled>
      </Button>
      <Button onPress={() => navigation.navigate('Settings')}>
        <TextStyled>To Settings</TextStyled>
      </Button>
      <Button onPress={() => navigation.navigate('Characters')}>
        <TextStyled>To Characters</TextStyled>
      </Button>
      {/* <Card
        name='oui oui'
        urlImage='https://yt3.ggpht.com/ytc/AKedOLRTPquWyp0Jkwx60BERTmjMrOZVVpBwxrAJw584GQ=s900-c-k-c0x00ffffff-no-rj'
      /> 
      <Card
        name='non non'
        urlImage='data:image/jpeg;base64,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'
      />
      <Avatar urlImage='https://yt3.ggpht.com/ytc/AKedOLRTPquWyp0Jkwx60BERTmjMrOZVVpBwxrAJw584GQ=s900-c-k-c0x00ffffff-no-rj' />
      <CommonText> Wesh</CommonText> */}
    </ScrollView>
  )
}

const TextStyled = styled.Text``
const Button = styled.TouchableOpacity``

Home.propTypes = {}

export default Home