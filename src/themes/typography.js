import colors from "./colors";

const FONT_WEIGHT = {
  light: "300",
  regular: "400",
  medium: "500",
  semiBold: "600",
  bold: "700",
};

const typography = {
  AppLight14: { fontSize: 14, fontWeight: FONT_WEIGHT.light, color: colors.black },
  AppLight16: { fontSize: 16, fontWeight: FONT_WEIGHT.light, color: colors.black },

  AppRegular14: { fontSize: 14, fontWeight: FONT_WEIGHT.regular, color: colors.black },
  AppRegular16: { fontSize: 16, fontWeight: FONT_WEIGHT.regular, color: colors.black },
  AppRegular18: { fontSize: 18, fontWeight: FONT_WEIGHT.regular, color: colors.black },

  AppMedium14: { fontSize: 14, fontWeight: FONT_WEIGHT.medium, color: colors.black },
  AppMedium16: { fontSize: 16, fontWeight: FONT_WEIGHT.medium, color: colors.black },
  AppMedium18: { fontSize: 18, fontWeight: FONT_WEIGHT.medium, color: colors.black },

  AppSemi16: { fontSize: 16, fontWeight: FONT_WEIGHT.semiBold, color: colors.black },
  AppSemi20: { fontSize: 20, fontWeight: FONT_WEIGHT.semiBold, color: colors.black },
  AppSemi24: { fontSize: 24, fontWeight: FONT_WEIGHT.semiBold, color: colors.black },

  AppBold18: { fontSize: 18, fontWeight: FONT_WEIGHT.bold, color: colors.black },
  AppBold24: { fontSize: 24, fontWeight: FONT_WEIGHT.bold, color: colors.black },
  AppBold32: { fontSize: 32, fontWeight: FONT_WEIGHT.bold, color: colors.black },
};

export default typography;