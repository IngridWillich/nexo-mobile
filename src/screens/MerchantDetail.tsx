import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import StatusBadge from "../components/StatusBadge";

const MerchantDetail = ({ navigation, route }: any) => {
  const { merchant } = route.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f9fafb" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 16,
          paddingVertical: 12,
          borderBottomWidth: 1,
          borderBottomColor: "#e5e7eb",
          backgroundColor: "white",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ padding: 4 }}>
          <Ionicons name="arrow-back" size={24} color="#374151" />
        </TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: "600", color: "#111827", marginLeft: 12 }}>
          Detalle del Comercio
        </Text>
      </View>

      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 20 }}>

        <View
          style={{
            backgroundColor: "white",
            borderRadius: 20,
            padding: 20,
            borderWidth: 1,
            borderColor: "#e5e7eb",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.05,
            shadowRadius: 4,
            elevation: 3,
          }}
        >

          <View style={{ marginBottom: 24 }}>
            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>
              <Ionicons name="business" size={18} color="#6b7280" />
              <Text style={{ fontSize: 13, color: "#6b7280", marginLeft: 6 }}>
                Razón Social
              </Text>
            </View>
            <Text style={{ fontSize: 22, fontWeight: "700", color: "#111827", marginLeft: 24 }}>
              {merchant.razonSocial}
            </Text>
          </View>

          <View style={{ marginBottom: 20 }}>
            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 6 }}>
              <Ionicons name="document-text" size={18} color="#6b7280" />
              <Text style={{ fontSize: 13, color: "#6b7280", marginLeft: 6 }}>
                NIT
              </Text>
            </View>
            <Text style={{ fontSize: 16, color: "#374151", marginLeft: 24 }}>
              {merchant.nit}
            </Text>
          </View>

          <View style={{ marginBottom: 20 }}>
            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 6 }}>
              <Ionicons name="mail" size={18} color="#6b7280" />
              <Text style={{ fontSize: 13, color: "#6b7280", marginLeft: 6 }}>
                Email
              </Text>
            </View>
            <Text style={{ fontSize: 16, color: "#374151", marginLeft: 24 }}>
              {merchant.email}
            </Text>
          </View>

          {merchant.telefono && (
            <View style={{ marginBottom: 20 }}>
              <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 6 }}>
                <Ionicons name="call" size={18} color="#6b7280" />
                <Text style={{ fontSize: 13, color: "#6b7280", marginLeft: 6 }}>
                  Teléfono
                </Text>
              </View>
              <Text style={{ fontSize: 16, color: "#374151", marginLeft: 24 }}>
                {merchant.telefono}
              </Text>
            </View>
          )}

          <View style={{ marginBottom: 20 }}>
            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 6 }}>
              <Ionicons name="person" size={18} color="#6b7280" />
              <Text style={{ fontSize: 13, color: "#6b7280", marginLeft: 6 }}>
                Representante Legal
              </Text>
            </View>
            <Text style={{ fontSize: 16, color: "#374151", marginLeft: 24 }}>
              {merchant.representante}
            </Text>
          </View>

          <View style={{ marginTop: 8 }}>
            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>
              <Ionicons name="flag" size={18} color="#6b7280" />
              <Text style={{ fontSize: 13, color: "#6b7280", marginLeft: 6 }}>
                Estado
              </Text>
            </View>
            <View style={{ marginLeft: 24 }}>
              <StatusBadge status={merchant.estado} />
            </View>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: "#f3f4f6",
            paddingVertical: 14,
            borderRadius: 12,
            marginTop: 24,
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#e5e7eb",
          }}
        >
          <Text style={{ color: "#374151", fontWeight: "500" }}>
            Volver al listado
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MerchantDetail;