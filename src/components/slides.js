import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

class Slides extends Component {
  renderLastSlideBtn(index) {
    if (index === this.props.data.length - 1) {
      return (
        <Button
          title="Onwards!"
          raised
          buttonStyle={styles.buttonStyle}
          onPress={this.props.onComplete}
        />
      );
    }
  }

  renderSlides() {
    return this.props.data.map((slide, index) => (
      <View
        key={index}
        style={[styles.slideStyle, { backgroundColor: slide.color }]}
      >
        <Text style={styles.textStyle}>
          {slide.text}
        </Text>
        { this.renderLastSlideBtn(index) }
      </View>
    ));
  }

  render() {
    return (
      <ScrollView
        horizontal
        style={{ flex: 1 }}
        pagingEnabled
        showsHorizontalScrollIndicator
      >
        { this.renderSlides() }
      </ScrollView>
    );
  }
}

const styles = {
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    padding: 25,

  },
  textStyle: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    marginBottom: 15,
  },
  buttonStyle: {
    backgroundColor: '#0288D1',
  },
};

export default Slides;
