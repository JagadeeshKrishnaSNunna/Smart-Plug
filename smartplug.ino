

/* Controlling LED using Firebase console by CircuitDigest(www.circuitdigest.com) */
#include <ESP8266WiFi.h>                                                // esp8266 library
#include <FirebaseESP8266.h>                                             // firebase library

#define FIREBASE_HOST "https://smartplug-42069.firebaseio.com/"                         // the project name address from firebase id
#define FIREBASE_AUTH "BcxNXS8HsFtWni0XqmiMwfsnKPXnl7OIWUkpom0X"                    // the secret key generated from firebase
#define WIFI_SSID "Oneplus"                                          // input your home or public wifi name 
#define WIFI_PASSWORD "stfucker"                                    //password of wifi ssid
FirebaseData firebaseData;
int fireStatus = 0;                                                     // led status received from firebase
int relayPin = 2;                                                                // for external led
void setup() {
  Serial.begin(9600);
  delay(1000);
  pinMode(LED_BUILTIN, OUTPUT);      
  pinMode(relayPin, OUTPUT);                 
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);                                      //try to connect with wifi
  Serial.print("Connecting to ");
  Serial.print(WIFI_SSID);
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  Serial.println();
  Serial.print("Connected to ");
  Serial.println(WIFI_SSID);
  Serial.print("IP Address is : ");
  Serial.println(WiFi.localIP());                                                      //print local IP address
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  Firebase.reconnectWiFi(true);                                                       // connect to firebase
  Firebase.setInt(firebaseData,"/RELAY_STATUS", 0);                                          //send initial string of led status
}

void loop() {
  fireStatus = Firebase.getInt(firebaseData,"/RELAY_STATUS");                                      // get ld status input from firebase
  if (fireStatus == 1) {                                                          // compare the input of led status received from firebase
    Serial.println("RELAY Turned ON");                         
    digitalWrite(LED_BUILTIN, LOW);                                                  // make bultin led ON
    digitalWrite(relayPin, HIGH);                                                         // make external led ON
  } 
  else if (fireStatus == 0) {                                                  // compare the input of led status received from firebase
    Serial.println("RELAY Turned OFF");
    digitalWrite(LED_BUILTIN, HIGH);                                               // make bultin led OFF
    digitalWrite(relayPin, LOW);                                                         // make external led OFF
  }
  else {
    Serial.println("Wrong Credential! Please send ON/OFF "+fireStatus);
  }
  delay(50);
}
