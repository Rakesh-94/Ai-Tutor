import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import BackHandler from '../../../components/BackHandler';

const TermsAndCondition = ({navigation}) => {
  return (
    <View>
      <BackHandler name={'Terms&Condition'} navigation={navigation} />
      <View style={{width: '90%', alignSelf: 'center'}}>
        <Text
          style={{
            marginTop: 20,
            color: '#121F3E',
            fontFamily: 'Manrope',
            fontSize: 12,
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: 22,
          }}>
          These Terms of Use ("Terms") were last updated on February 24, 2021.
        </Text>
        <Text
          style={{
            marginTop: 20,
            color: '#121F3E',
            fontFamily: 'Manrope',
            fontSize: 12,
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: 22,
          }}>
          Ontari’s mission is to improve lives through learning. We enable
          anyone anywhere to create and share educational courses (instructors)
          and to enroll in these educational courses to learn (students). We
          consider our marketplace model the best way to offer valuable
          educational content to our users. We need rules to keep our platform
          and services safe for you, us and our student and instructor
          community. These Terms apply to all your activities on the Ontari
          website, the Ontari mobile applications, our TV applications, our APIs
          and other related services (“Services”).
        </Text>
        <Text
          style={{
            marginTop: 20,
            color: '#121F3E',
            fontFamily: 'Manrope',
            fontSize: 12,
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: 22,
          }}>
          If you publish a course on the Ontari platform, you must also agree to
          the Instructor Terms. We also provide details regarding our processing
          of personal data of our students and instructors in our Privacy
          Policy. If you are using Udemy as part of your employer’s Ontari For
          Business learning and development program, you can consult our{' '}
          <Text
            style={{
              marginTop: 20,
              color: '#2961D7',
              fontFamily: 'Manrope',
              fontSize: 12,
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: 22,
            }}>
            Ontari for Business Privacy Statement.
          </Text>
        </Text>
        <Text
          style={{
            marginTop: 20,
            color: '#121F3E',
            fontFamily: 'Manrope',
            fontSize: 12,
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: 22,
          }}>
          If you live in the United States or Canada, by agreeing to these
          Terms, you agree to resolve disputes with Ontari through binding
          arbitration (with very limited exceptions, not in court), and you
          waive certain rights to participate in class actions, as detailed in
          the Dispute Resolution section.
        </Text>
      </View>
    </View>
  );
};

export default TermsAndCondition;

const styles = StyleSheet.create({});
