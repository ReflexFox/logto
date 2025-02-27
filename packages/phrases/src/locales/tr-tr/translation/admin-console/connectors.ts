const connectors = {
  title: 'Connectorlar',
  subtitle:
    'Şifresiz ve sosyal oturum açma deneyimini etkinleştirmek için connectorları ayarlayınız.',
  create: 'Social Connector ekle',
  config_sie_notice: 'You’ve set up connectors. Make sure to configure it in <a>{{link}}</a>.', // UNTRANSLATED
  config_sie_link_text: 'sign in experience', // UNTRANSLATED
  tab_email_sms: 'E-posta ve SMS connectorları',
  tab_social: 'Social connectorlar',
  connector_name: 'Connector adı',
  connector_type: 'Tip',
  connector_status: 'Oturum açma deneyimi',
  connector_status_in_use: 'Kullanımda',
  connector_status_not_in_use: 'Kullanımda değil',
  not_in_use_tip: {
    content:
      'Not in use means your sign in experience hasn’t used this sign in method. <a>{{link}}</a> to add this sign in method. ', // UNTRANSLATED
    go_to_sie: 'Go to sign in experience', // UNTRANSLATED
  },
  social_connector_eg: 'Örneğin, Google, Facebook, Github',
  save_and_done: 'Kaydet ve bitir',
  type: {
    email: 'Eposta connectorı',
    sms: 'SMS connectorı',
    social: 'Social connector',
  },
  setup_title: {
    email: 'Eposta connectorı ayarla',
    sms: 'SMS connectorı ayarla',
    social: 'Social Connector ekle',
  },
  guide: {
    subtitle: 'Connectorı yapılandırmak için adım adım kılavuz',
    connector_setting: 'Connector setting', // UNTRANSLATED
    name: 'Connector name', // UNTRANSLATED
    name_tip:
      'The name of the connector button will be displayed as "Continue with {{name}}." Be mindful of the length of the naming in case it gets too long.', // UNTRANSLATED
    logo: 'Logo image URL', // UNTRANSLATED
    logo_placeholder: 'https://your.cdn.domain/logo.png', // UNTRANSLATED
    logo_tip:
      'Logo image will show on the connector. Get a publicly accessible image link and insert the link here.', // UNTRANSLATED
    logo_dark: 'Connector logo URL for dark mode', // UNTRANSLATED
    logo_dark_placeholder: 'https://your.cdn.domain/logo.png', // UNTRANSLATED
    logo_dark_tip:
      'Set your connector’s logo for dark mode after enabling it in the Sign-in Experience of Admin Console.', // UNTRANSLATED
    logo_dark_collapse: 'Collapse', // UNTRANSLATED
    logo_dark_show: 'Show logo setting for dark mode', // UNTRANSLATED
    target: 'Connector identity target', // UNTRANSLATED
    target_tip:
      'If the connector is successfully built, the connector “Target” cannot be modified.', // UNTRANSLATED
    target_tooltip:
      '"Target" in Logto social connectors refers to the "source" of your social identities. In Logto design, we do not accept the same "target" of a specific platform to avoid conflicts. You should be very careful before you add a connector since you CAN NOT change its value once you create it. <a>Learn more.</a>', // UNTRANSLATED
    config: 'Enter your config JSON', // UNTRANSLATED
    sync_profile: 'Sync profile information', // UNTRANSLATED
    sync_profile_only_at_sign_up: 'Only sync at sign-up', // UNTRANSLATED
    sync_profile_each_sign_in: 'Always do a sync at each sign-in', // UNTRANSLATED
    sync_profile_tip: 'Sync basic user profile, e.g. name and avatar.', // UNTRANSLATED
  },
  platform: {
    universal: 'Evrensel',
    web: 'Web',
    native: 'Native',
  },
  add_multi_platform: ' birden fazla platformu destekler, devam etmek için bir platform seçin',
  drawer_title: 'Connector Kılavuzu',
  drawer_subtitle: 'Connectorı entegre etmek için yönergeleri izleyin',
  unknown: 'Bilinmeyen connector',
};

export default connectors;
