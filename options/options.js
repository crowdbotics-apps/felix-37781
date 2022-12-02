const styles = StyleSheet.create({
  heading: {
    height: 60,
    backgroundColor: "#333333",
    padding: 20,
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "center"
  }
})
export const globalOptions = {
  name: "felix_37781",
  url: "https://felix_37781.botics.co",
  api: "https://felix_37781.botics.co/api/v1"
}

export const modulesOptions = {
  "@modules/app-menu": {
    copy: "Routes available!"
  },
  "@modules/basiq-payments": { styles: styles }
}
