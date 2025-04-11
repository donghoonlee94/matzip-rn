import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function WebViewScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{ uri: "https://ai-search.dbpia.co.kr/" }}
        onLoadStart={() => console.log("📡 WebView 로딩 시작")}
        onLoadEnd={() => console.log("✅ WebView 로딩 완료")}
        onError={(e) => console.log("❌ WebView 에러:", e.nativeEvent)}
        onHttpError={(e) => console.log("💥 HTTP 에러:", e.nativeEvent)}
        originWhitelist={["*"]}
        javaScriptEnabled={true}
        style={styles.webview}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  webview: { flex: 1 },
});
