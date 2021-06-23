import React, { useRef, useEffect, useState } from "react"
import { StatusBar } from "react-native"
import {
  NavigationContainer,
  NavigationContainerRef,
  useLinking,
} from "@react-navigation/native"
import * as Linking from "expo-linking"
import { MainNavigator } from "./src/routes"

export default function App() {
  const ref = useRef<NavigationContainerRef>(null)

  const { getInitialState } = useLinking(ref, {
    prefixes: [Linking.createURL("/")],
    config: {
      screens: {
        About: "about/:code",
      },
    },
  })

  const [isReady, setIsReady] = useState<Boolean>(false)
  const [initialState, setInitialState] = useState()

  useEffect(() => {
    getInitialState().then((state: any) => {
      if (state !== undefined) {
        setInitialState(state)
      }

      setIsReady(true)
    })
  }, [getInitialState])

  if (!isReady) {
    return null
  }

  return (
    <NavigationContainer initialState={initialState} ref={ref}>
      <StatusBar barStyle="default" />
      <MainNavigator />
    </NavigationContainer>
  )
}
