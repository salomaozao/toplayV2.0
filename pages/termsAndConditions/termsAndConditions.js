import React from "react";
import { View, ScrollView, Image } from "react-native";
import { Text, Surface, Checkbox } from "react-native-paper";

import styles from "../styles/styles";
import media from "../../media/media";

const termsAndConditions = () => (
  <>
    {/* <Dialog texts={{ question: "Contza inválida!" }} /> */}
    <View
      style={{
        minHeight: "100%",
        justifyContent: "center",
      }}
    >
      <Image
        source={{ uri: media.player }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      />
      <View
        style={[
          {
            alignItems: "center",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(107, 107, 107, 0.8)",
          },
        ]}
      >
        <Text style={[styles.title, styles.my4, { textAlign: "center" }]}>
          TERMOS E CONDIÇÕES
        </Text>
        <Surface
          style={[
            styles.my4,
            styles.shadowLg,
            styles.p1,
            styles.round,
            { width: "80%", height: "40%" },
          ]}
        >
          <ScrollView>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse a justo rutrum, commodo turpis eu, eleifend dui. Nunc
              dapibus, tellus sit amet interdum ultrices, lectus velit rhoncus
              turpis, sit amet vulputate est ex a dolor. Aliquam dictum augue eu
              sapien varius dapibus. Nunc feugiat est et interdum mattis. Fusce
              lobortis augue ut nisi blandit hendrerit. Vivamus non justo ac
              neque gravida hendrerit in sollicitudin massa. Ut viverra diam et
              rutrum pharetra. Pellentesque at finibus orci. In hac habitasse
              platea dictumst. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Suspendisse potenti.
              Curabitur in tincidunt augue. Praesent est ante, consectetur sed
              scelerisque vel, fringilla et neque. Maecenas pulvinar vitae leo
              nec porttitor.
            </Text>
          </ScrollView>
        </Surface>
        <View style={styles.center}>
          <Text style={[styles.my2, { color: "black" }]}>
            Eu lí e aceito os termos e condições citados acima.
          </Text>
          <Checkbox />
        </View>
      </View>
    </View>
  </>
);

export default termsAndConditions;
