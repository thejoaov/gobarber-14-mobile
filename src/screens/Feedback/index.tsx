import React, { useCallback } from 'react'
import { Container, Text, Icon, Button } from 'components'
import { useTheme } from 'styled-components/native'

import { Props } from './types'

const Feedback: React.FC<Props> = ({ route, navigation }) => {
  const { title, message, status, button } = route.params
  const theme = useTheme()

  const getIcon = (type: typeof status): JSX.Element => {
    const selector = {
      success: <Icon name="check" size={100} semantic="success" />,
      error: <Icon name="x" size={100} semantic="error" />,
    }

    return selector[type]
  }

  const handleGoBack = useCallback((): void => {
    navigation.goBack()
  }, [navigation])

  return (
    <Container center margin={80} testID="feedback-container">
      {getIcon(status)}

      <Text mt={40} textAlign="center" fontSize={30}>
        {title}
      </Text>

      <Text
        mt={16}
        textAlign="center"
        color={theme.colors.gray.gray}
        fontSize={14}>
        {message}
      </Text>

      <Button
        testID="ok-button"
        mt={40}
        title={button?.title || 'OK'}
        onPress={button?.onPress || handleGoBack}
      />
    </Container>
  )
}

export default Feedback
