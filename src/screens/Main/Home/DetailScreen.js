import React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';

import AppText from '../../../components/AppText';
import colors from '../../../themes/colors';
import Images from '../../../utils/images';
import { moderateScale, verticalScale } from '../../../utils/scales';

const Row = ({ label, value }) => (
  <View style={styles.row}>
    <AppText type="AppRegular14" color={colors.primaryAccent}>{label}</AppText>
    <AppText type="AppRegular14" color={colors.white}>{value}</AppText>
  </View>
);

const Section = ({ title, children }) => (
  <View style={styles.section}>
    <AppText type="AppSemi16" color={colors.primaryAccent}>{title}</AppText>
    <View style={styles.divider} />
    {children}
  </View>
);

const DetailScreen = ({ route }) => {
  const { user } = route.params;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>

      <View style={styles.header}>
        <Image source={Images.avatar} style={styles.avatar} />
        <View>
          <AppText type="AppSemi20" color={colors.white}>{user.name}</AppText>
          <AppText type="AppRegular14" color={colors.primaryAccent}>@{user.username}</AppText>
        </View>
      </View>

      <Section title="Contact">
        <Row label="Email" value={user.email} />
        <Row label="Phone" value={user.phone} />
        {user.website && <Row label="Website" value={user.website} />}
      </Section>

      <Section title="Address">
        <Row label="Street" value={`${user.address.street}, ${user.address.suite}`} />
        <Row label="City" value={user.address.city} />
        <Row label="Zipcode" value={user.address.zipcode} />
        <Row label="Geo" value={`${user.address.geo.lat}, ${user.address.geo.lng}`} />
      </Section>

      <Section title="Company">
        <Row label="Name" value={user.company.name} />
        <Row label="Tagline" value={user.company.catchPhrase} />
        <Row label="Focus" value={user.company.bs} />
      </Section>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: moderateScale(16), paddingBottom: verticalScale(100) },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(12),
    marginBottom: verticalScale(20),
  },
  avatar: { width: 60, height: 60, borderRadius: 12 },
  section: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: moderateScale(14),
    marginBottom: verticalScale(12),
    borderRightWidth: 3,
    borderRightColor: colors.primaryAccent,
  },
  divider: { height: 1, backgroundColor: '#2E2E2E', marginVertical: verticalScale(8) },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: verticalScale(6),
  },
});

export default DetailScreen;