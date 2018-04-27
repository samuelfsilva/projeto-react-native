import React, { Component } from 'react';
import { Container, 
  Header, 
  Content, 
  Form, 
  Item, 
  Input, 
  Button, 
  Text, 
  Title, Icon, Body, Left } from 'native-base';
export default class FormExample extends Component {
  constructor(props){
    super(props);
    this.state={
      muser:'',
      mpass:'',
    }
  }

  onPressButton = () => {
    mm='';
    this.setState({
      muser:this.state.muser+'Samuel'
    })
  }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Conectar</Title>
          </Body>
        </Header>
        <Content>
          <Form>
            <Item>
              <Input placeholder="Username">
                <Text>{this.state.muser}</Text>
              </Input>
            </Item>
            <Item last>
              <Input placeholder="Password" secureTextEntry={true} />
            </Item>
            <Button full onPress={this.onPressButton}>
              <Text>Logar</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
