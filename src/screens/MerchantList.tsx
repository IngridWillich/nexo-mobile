import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useMerchants } from "../context/MerchantContext";
import StatusBadge from "../components/StatusBadge";

const MerchantList = ({ navigation }: any) => {
  const { merchants } = useMerchants();
  const [filtered, setFiltered] = useState(merchants);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const result = merchants.filter(
      (m) =>
        m.razonSocial.toLowerCase().includes(search.toLowerCase()) ||
        m.nit.includes(search)
    );
    setFiltered(result);
  }, [search, merchants]);

  if (loading) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#f9fafb" }}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator size="large" color="#2563eb" />
          <Text style={{ marginTop: 12, fontSize: 14, color: "#6b7280" }}>
            Cargando comercios...
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  if (filtered.length === 0) {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#f9fafb" }}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 24 }}>
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              backgroundColor: "#dbeafe",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <Ionicons name="business-outline" size={40} color="#2563eb" />
          </View>
          <Text style={{ fontSize: 18, fontWeight: "600", color: "#111827", marginBottom: 8 }}>
            No hay comercios
          </Text>
          <Text style={{ fontSize: 14, color: "#6b7280", textAlign: "center", marginBottom: 24 }}>
            No se encontraron comercios con los filtros actuales
          </Text>
          <TouchableOpacity
            onPress={() => setSearch("")}
            style={{
              backgroundColor: "#2563eb",
              paddingHorizontal: 20,
              paddingVertical: 12,
              borderRadius: 8,
            }}
          >
            <Text style={{ color: "white", fontWeight: "500" }}>Limpiar búsqueda</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f9fafb" }}>
      <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />
    
      <View style={{ paddingHorizontal: 16, paddingTop: 16, paddingBottom: 8 }}>
        <Text style={{ fontSize: 28, fontWeight: "bold", color: "#111827" }}>
          Comercios
        </Text>
        <Text style={{ fontSize: 14, color: "#6b7280", marginTop: 4 }}>
          Gestiona tus comercios registrados
        </Text>
      </View>

      <View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 12,
            borderWidth: 1,
            borderColor: "#e5e7eb",
            paddingHorizontal: 12,
            height: 48,
          }}
        >
          <Ionicons name="search" size={20} color="#9ca3af" />
          <TextInput
            placeholder="Buscar por razón social o NIT..."
            value={search}
            onChangeText={setSearch}
            style={{
              flex: 1,
              marginLeft: 8,
              fontSize: 15,
              color: "#111827",
            }}
            placeholderTextColor="#9ca3af"
          />
          {search.length > 0 && (
            <TouchableOpacity onPress={() => setSearch("")}>
              <Ionicons name="close-circle" size={20} color="#9ca3af" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={{ paddingHorizontal: 16, paddingBottom: 12 }}>
        <Text style={{ fontSize: 13, color: "#6b7280" }}>
          {filtered.length} {filtered.length === 1 ? "comercio encontrado" : "comercios encontrados"}
        </Text>
      </View>
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 20 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("MerchantDetail", { merchant: item })}
            activeOpacity={0.7}
            style={{
              backgroundColor: "white",
              borderRadius: 16,
              padding: 16,
              marginBottom: 12,
              borderWidth: 1,
              borderColor: "#e5e7eb",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.05,
              shadowRadius: 2,
              elevation: 2,
            }}
          >
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16, fontWeight: "600", color: "#111827", marginBottom: 6 }}>
                  {item.razonSocial}
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 4 }}>
                  <Ionicons name="document-text" size={14} color="#6b7280" />
                  <Text style={{ fontSize: 14, color: "#4b5563", marginLeft: 4 }}>
                    NIT: {item.nit}
                  </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>
                  <Ionicons name="mail" size={14} color="#6b7280" />
                  <Text style={{ fontSize: 14, color: "#4b5563", marginLeft: 4 }}>
                    {item.email}
                  </Text>
                </View>
              </View>
              <StatusBadge status={item.estado} />
            </View>
            
            <View style={{ flexDirection: "row", justifyContent: "flex-end", marginTop: 12 }}>
              <Text style={{ fontSize: 13, color: "#2563eb", fontWeight: "500" }}>
                Ver detalles <Ionicons name="arrow-forward" size={13} color="#2563eb" />
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default MerchantList;