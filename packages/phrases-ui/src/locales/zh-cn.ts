import type { LocalePhrase } from '../types.js';

const translation = {
  input: {
    username: '用户名',
    password: '密码',
    email: '邮箱',
    phone_number: '手机号',
    confirm_password: '确认密码',
  },
  secondary: {
    sign_in_with: '通过 {{methods, list(type: disjunction;), zhOrSpaces}} 登录',
    register_with: '通过 {{methods, list(type: disjunction;)}} 注册',
    social_bind_with:
      '绑定到已有账户? 使用 {{methods, list(type: disjunction;), zhOrSpaces}} 登录并绑定。',
  },
  action: {
    sign_in: '登录',
    continue: '继续',
    create_account: '注册',
    create: '注册',
    enter_passcode: '输入验证码',
    cancel: '取消',
    confirm: '确认',
    save_password: '保存密码',
    bind: '绑定到 {{address}}',
    bind_and_continue: 'Link and continue', // UNTRANSLATED
    back: '返回',
    nav_back: '返回',
    agree: '同意',
    got_it: '知道了',
    sign_in_with: '通过 {{name}} 继续',
    forgot_password: '忘记密码？',
    switch_to: '切换到{{method}}',
    sign_in_via_passcode: '用验证码登录',
    sign_in_via_password: '密码登录',
    change: '更改{{method}}',
    link_another_email: 'Link another email', // UNTRANSLATED
    link_another_phone: 'Link another phone', // UNTRANSLATED
    link_another_email_or_phone: 'Link another email or phone', // UNTRANSLATED
    show_password: 'Show password', // UNTRANSLATED
  },
  description: {
    email: '邮箱',
    phone_number: '手机',
    reminder: '提示',
    not_found: '404 页面不存在',
    agree_with_terms: '我已阅读并同意 ',
    agree_with_terms_modal: '请先同意 <link></link> 以继续',
    terms_of_use: '使用条款',
    create_account: '创建帐号',
    or: '或',
    enter_passcode: '验证码已经发送至你的{{ address }} {{target}}',
    passcode_sent: '验证码已经发送',
    resend_after_seconds: '在 <span>{{ seconds }}</span> 秒后重发',
    resend_passcode: '重发验证码',
    create_account_id_exists: '{{ type }}为 {{ value }} 的帐号已存在，你要登录吗？',
    link_account_id_exists:
      'The account with {{type}} {{value}} already exists, would you like to link?', // UNTRANSLATED
    sign_in_id_does_not_exist: '{{ type }}为 {{ value }} 的帐号不存在，你要创建一个新帐号吗？',
    sign_in_id_does_not_exist_alert: '{{ type }}为 {{ value }} 的帐号不存在。',
    create_account_id_exists_alert: '{{ type }}为 {{ value }} 的帐号已存在',
    social_identity_exist:
      'The {{type}} {{value}} is linked to another account. Please try another {{type}}', // UNTRANSLATED
    bind_account_title: '绑定或创建帐号',
    social_create_account: '没有帐号？你可以创建一个帐号并绑定。',
    social_link_email: 'You can link another email', // UNTRANSLATED,
    social_link_phone: 'You can link another phone', // UNTRANSLATED,
    social_link_email_or_phone: 'You can link another email or phone', // UNTRANSLATED,
    social_bind_with_existing: '找到了一个匹配的帐号，你可以直接绑定。',
    reset_password: '重设密码',
    reset_password_description_email: '输入邮件地址，领取验证码以重设密码。',
    reset_password_description_phone: '输入手机号，领取验证码以重设密码。',
    new_password: '新密码',
    set_password: '设置密码',
    password_changed: '已重置密码！',
    no_account: '还没有账号？',
    have_account: ' 已有账号？',
    enter_password: '输入密码',
    enter_password_for: '输入 {{method}} {{value}} 对应的密码进行登录',
    enter_username: '设置用户名',
    enter_username_description: '用户名可以用来进行登录。用户名仅可以包含字母、数字和下划线。',
    link_email: '绑定邮箱',
    link_phone: '绑定手机',
    link_email_or_phone: '绑定邮箱或手机号',
    link_email_description: '绑定邮箱以保障您的账号安全',
    link_phone_description: '绑定手机号以保障您的账号安全',
    link_email_or_phone_description: '绑定邮箱或手机号以保障您的账号安全',
    continue_with_more_information: '为保障您的账号安全，需要您补充以下信息。',
  },
  profile: {
    title: 'Account Settings', // UNTRANSLATED
    description:
      'Change your account settings and manage your personal information here to ensure your account security.', // UNTRANSLATED
    settings: {
      title: 'PROFILE SETTINGS', // UNTRANSLATED
      profile_information: 'Profile Information', // UNTRANSLATED
      avatar: 'Avatar', // UNTRANSLATED
      name: 'Name', // UNTRANSLATED
      username: 'Username', // UNTRANSLATED
    },
    password: {
      title: 'PASSWORD', // UNTRANSLATED
      reset_password: 'Reset Password', // UNTRANSLATED
      reset_password_sc: 'Reset password', // UNTRANSLATED
    },
    link_account: {
      title: 'LINK ACCOUNT', // UNTRANSLATED
      email_phone_sign_in: 'Email / Phone Sign-In', // UNTRANSLATED
      email: 'Email', // UNTRANSLATED
      phone: 'Phone', // UNTRANSLATED
      phone_sc: 'Phone number', // UNTRANSLATED
      social: 'Social Sign-In', // UNTRANSLATED
      social_sc: 'Social accounts', // UNTRANSLATED
    },
    not_set: 'Not set', // UNTRANSLATED
    edit: 'Edit', // UNTRANSLATED
    change: 'Change', // UNTRANSLATED
    link: 'Link', // UNTRANSLATED
    unlink: 'Unlink', // UNTRANSLATED
  },
  error: {
    username_password_mismatch: '用户名和密码不匹配',
    username_required: '用户名必填',
    password_required: '密码必填',
    username_exists: '用户名已存在',
    username_should_not_start_with_number: '用户名不能以数字开头',
    username_valid_charset: '用户名只能包含英文字母、数字或下划线。',
    invalid_email: '无效的邮箱',
    invalid_phone: '无效的手机号',
    password_min_length: '密码最少需要{{min}}个字符',
    passwords_do_not_match: '两次输入的密码不一致，请重试。',
    invalid_passcode: '无效的验证码',
    invalid_connector_auth: '登录失败',
    invalid_connector_request: '无效的登录请求',
    unknown: '未知错误，请稍后重试。',
    invalid_session: '未找到会话，请返回并重新登录。',
  },
};

const zhCN: LocalePhrase = Object.freeze({
  translation,
});

export default zhCN;
