import React from "react";
import { View, Text } from "react-native";
import { MerchantStatus } from "../types/Merchant";

interface Props {
  status: MerchantStatus;
}

const StatusBadge = ({ status }: Props) => {
  const getStyles = () => {
    switch (status) {
      case "ACTIVO":
        return { bg: "#dcfce7", text: "#166534" };
      case "INACTIVO":
        return { bg: "#fee2e2", text: "#991b1b" };
      case "PENDIENTE_VALIDACION":
        return { bg: "#fef3c7", text: "#92400e" };
      default:
        return { bg: "#f3f4f6", text: "#1f2937" };
    }
  };

  const getLabel = () => {
    switch (status) {
      case "PENDIENTE_VALIDACION":
        return "Pendiente";
      default:
        return status.charAt(0) + status.slice(1).toLowerCase();
    }
  };

  const { bg, text } = getStyles();

  return (
    <View
      style={{
        backgroundColor: bg,
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
        alignSelf: "flex-start",
      }}
    >
      <Text style={{ color: text, fontSize: 12, fontWeight: "600" }}>
        {getLabel()}
      </Text>
    </View>
  );
};

export default StatusBadge;