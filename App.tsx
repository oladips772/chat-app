/** @format */
import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import { StreamChat } from "stream-chat";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const API_KEY = "jungnvr22zs9";
  const client = StreamChat.getInstance(API_KEY);

  useEffect(() => {
    const connectUser = async () => {
      await client.connectUser(
        {
          id: "korede",
          name: "korede",
          image:
            "https://media-exp1.licdn.com/dms/image/C4E03AQFOfPu93n6Kxw/profile-displayphoto-shrink_100_100/0/1632301101571?e=1658361600&v=beta&t=yP5E33783yKk5Jq8u_fy-b2m_RG5ohOvrLqRpjsZ1ZY",
        },
        client.devToken("korede")
      );
    };

    connectUser();
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
