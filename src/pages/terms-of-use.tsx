/* eslint-disable react/no-unescaped-entities */
import { Container, Space, Stack, Title } from '@mantine/core';

import Layout from '~/layouts/layout';

import AppHeader from '~/components/header';
import AppFooter from '~/components/footer';

const TOSPage = () => {
  return (
    <Layout>
      <AppHeader />
      <Space h={140} />
      <Container>
        <Stack px="lg">
          <Title>CHATGM - TERMS OF USE</Title>
          <Title order={2}>1. Introduction</Title>
          Welcome to ChatGM! We are a decentralized, AI-supported platform that combines secure
          messaging and crypto trading, powered by the Matrix Protocol and GPT-4. These terms and
          conditions ("Terms") govern the access and use of the application and related services
          ("Services") provided by ChatGM ("Company", "we", "us" or "our").
          <Title order={2}>2. Acceptance of Terms</Title>
          By accessing and using our Services, you ("User") agree to these Terms and our Privacy
          Policy. If you do not agree to these Terms, do not use our Services. We may change or
          modify these Terms at any time and in our sole discretion. 3. Eligibility To access and
          use our Services, you must be at least 13 years old. By using our Services, you represent
          that you meet this requirement. Access to certain features of our Services may be
          restricted to users who have registered with us.
          <Title order={2}>4. Registration and User Accounts</Title>
          You can sign up for an account using a phone number, email, or existing crypto wallet. You
          agree to provide accurate, complete, and updated information. You are solely responsible
          for safeguarding your account credentials, and any actions under your account, whether or
          not you authorized those actions.
          <Title order={2}>5. Service Use and Restrictions</Title>
          You may use our Services for your personal, non-commercial use. You agree not to misuse
          our Services, and in particular, you must not: * Violate any applicable law, regulation,
          or these Terms; * Send or transmit any viruses or harmful, disruptive, or inappropriate
          messages or content; * Interfere with the operation of our Services or any user's
          enjoyment of the Services, including by uploading or disseminating spam or other malicious
          code; * Attempt to reverse-engineer or disrupt the proper working of our Services; * Make
          any unauthorized use of the Services, including collecting usernames, user ids, and/or
          email addresses of users by electronic or other means.
          <Title order={2}>6. Privacy and Security</Title>
          We prioritize your privacy and use state-of-the-art encryption technology to ensure the
          security of your data. For detailed information about our data practices, please review
          our Privacy Policy.
          <Title order={2}>7. Intellectual Property Rights</Title>
          Our Services, including its entire content, features, and functionality, are owned by the
          Company, its licensors, or other providers of such material. You agree not to copy,
          modify, create derivative works, publicly display, sell, or exploit any of our Services
          without the express permission of the Company.
          <Title order={2}>8. Modifications to the Service</Title>
          We are always striving to improve our Services and bring you additional functionality that
          you will find useful. This means we may add new features or enhancements, or remove some
          features, in our sole discretion. If you object to any changes, your sole recourse is to
          cease using our Services.
          <Title order={2}>9. Termination</Title>
          We reserve the right to suspend or terminate your access to our Services, at our sole
          discretion, at any time and without notice to you.
          <Title order={2}>10. Disclaimer of Warranties and Limitation of Liability</Title>
          Our Services are provided "as is" without warranties of any kind. To the fullest extent
          permissible under applicable law, we disclaim all warranties, express or implied,
          including, but not limited to, implied warranties of merchantability and fitness for a
          particular purpose. We do not guarantee, represent, or warrant that your use of our
          Services will be uninterrupted or error-free, and you agree that from time to time we may
          remove the Services for indefinite periods of time, or cancel the Services at any time,
          without notice to you.
          <Title order={2}>11. Governing Law</Title>
          These Terms and your use of the Services are governed by and construed in accordance with
          the laws of the jurisdiction of our headquarters.
          <Title order={2}>12. Contact Information</Title>
          If you have any questions about these Terms, please contact us at k@chatgm.com By using
          our Services, you are agreeing to these Terms. If you do not agree to these Terms, do not
          use our Services. Effective Date: [01 June 2023] Please remember that trading
          cryptocurrency carries risk, and only trade what you can afford to lose. Always use secure
          and trusted networks when accessing your ChatGM account. Be smart, be safe, and enjoy the
          revolution that is ChatGM!
        </Stack>
      </Container>

      <AppFooter />
    </Layout>
  );
};

export default TOSPage;
