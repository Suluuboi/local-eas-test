I want to compile a project locally and then use eas debbuging and development build.

# Steps

## Part 1: Build the project

1. create a react-native app `npx create-expo-app@latest --template tabs`.
2. build the app with android studio `expo run:ios -or android` or ucan use eas.

   ### more info

   - I added as script called `build-app-android` in this project that does just this task.
   - This will crate an android folder in your route project. (the app will also run on you phone locally if adb is configured)
   - if you dont have android studio or xcode installed on your local pc you can use ESA to buld the app for you(on the cloud). `eas build -p ios -or android`
   -

3. run a development build locally on your pc using `expo start --dev-client`

Now that your app is running locally we now need to connect it to esa.

## Part 2: ESA conection

4. configure the project to use EAS `eas build:configure `
5. send the build to eas `eas build --profile development --platform android`

## resources

- ( What is a development build )[https://docs.expo.dev/develop/development-builds/introduction/]
- (Create a development build)[https://docs.expo.dev/develop/development-builds/create-a-build/]
