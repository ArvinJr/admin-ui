import JSEncrypt from 'jsencrypt/bin/jsencrypt.min'

// 密钥对生成 http://web.chacuo.net/netrsakeypair

const publicKey = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqljv37IiyqpM3Zgdmogp\n' +
  'H9S7Z2H6nToyj4PHPXnv+VgPliyueDyDiytKF+6OWSh3Mh1dN7NFbomAOZ/FZg11\n' +
  '32HB6HwJNOw78qII8ALCHXzqz0mBcEVR0/wPgDn3g5Z0Yu2/TvnsINJlkDIccxvk\n' +
  'Vkpv3y2MlcAWAK8LfJC6M3OQ2+A1BvrkkPaJEWybpRvxvA6A+pj2D/pd/GHbM1Fp\n' +
  'vV0+5mRyqTefwdTEwVxjWpMHKnO9jNVZpI2k7cTcgORtRiYX83Y3brw2Qv+sMrEM\n' +
  'bY8Svd0hi1Yss8Qp51hVeckLT7A/U50PSV2AxeK/KCmrzuOSbXK5X4EFYDpJ3yfS\n' +
  'QwIDAQAB'

const privateKey = 'MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCqWO/fsiLKqkzd\n' +
  'mB2aiCkf1LtnYfqdOjKPg8c9ee/5WA+WLK54PIOLK0oX7o5ZKHcyHV03s0VuiYA5\n' +
  'n8VmDXXfYcHofAk07DvyogjwAsIdfOrPSYFwRVHT/A+AOfeDlnRi7b9O+ewg0mWQ\n' +
  'MhxzG+RWSm/fLYyVwBYArwt8kLozc5Db4DUG+uSQ9okRbJulG/G8DoD6mPYP+l38\n' +
  'YdszUWm9XT7mZHKpN5/B1MTBXGNakwcqc72M1VmkjaTtxNyA5G1GJhfzdjduvDZC\n' +
  '/6wysQxtjxK93SGLViyzxCnnWFV5yQtPsD9TnQ9JXYDF4r8oKavO45JtcrlfgQVg\n' +
  'OknfJ9JDAgMBAAECggEAXWLUXfXyTNh/uxuhXw42PVUKR+rW0UsOXM8JcxJeFHvK\n' +
  'T7G/E/tYwfrBa81EDGy6q6ada+PDtI181hpYxVGrxQJ6o1EcWv8G/kUGUU2xzSim\n' +
  'MW1CoKHf8i7E8K7WmjTpKTLdJhas9HFjbGGMZy5rR0MXgWofIBll9on/6hINghZ7\n' +
  'y9n6wde8XY69Ugi0PSHe5ou60D5LFOxuxwmEVAWhBGlRMOBc9Rut/JMXqnJs0C58\n' +
  'x+a5V/7KL+2SjeHGlO2nG4ZyHMw1hnRSO8p6DrB+NBm9TYfipegoGAYNJA8I8Sgq\n' +
  'GkY7G7DcafgDq+xFYzfwHN4xzq/DwJDi+6raZ81YwQKBgQDW8a92mM1xhHz/+sFS\n' +
  '7UMkc+nnrqQCxoLEcfxnoQnKd0Ilqz9pjbBQI+zoeInc5XJavVCGDFQ69yIRKdi6\n' +
  'x6oB8EiwPIclpBiYXbUGe863zo6kKDkQu0TlJ+u2idpVsydbiq8T/7NVgxbTSxZb\n' +
  'XHZGpMrjbvrxhQtvrd6GH5wV3wKBgQDK4pFfqhHfbjZsLr0GNhCUOAyl3bSSBGIV\n' +
  'U4Aa1d8K/qoiyrlQxzd8Il9sHsvcdNGwbZGQxxKwjpVXt3cEF13nQFXP5IxS7Uii\n' +
  'oEjWq+vfRsL5DL1uQZjnUvhHSXRUexhJUWZ7ZzVsvlI1hH1Crj/Tmg/qINRWBCcC\n' +
  'bQBYgcGoHQKBgC4RMof6i92OhbPfLFv3mfJQHYuYNHKb1R8BRxV2wEByeuzT3Q1k\n' +
  'XqtuZ7ITU4jSbEXiWUXBkrPoj5aaH2c4r8kmlI2hC14X42WUf93Z3x4p2Qx5ynE5\n' +
  'kbSDb9N5jB/d+8t0170zil4DcHrslugR0w+k9g70lDf7Sc4vt4eLcsqFAoGAds+l\n' +
  'yHsFCm41arcYNQn2PYZxSbUC6LuuYMTMcWqrunmWUtebHIX9pTFP5jZGtiynG4We\n' +
  'yET8We614G9tQDUa5bDUT/GMh4ezkKEC5sw5TkDXLxfZ2zaI/3akNML8X/jSKSWF\n' +
  'OWEgdTUjWXnkDOeUMyu2hCqDjnfSDGae3DXonbUCgYEAqKYp4PJFQMgllrmxbLK3\n' +
  'cL+5nJgcXgeFEVIDx5TXSQ8NnZgT6sD6rWccK3Phx14cKfR0v/fAkfiTCkb5Ymzk\n' +
  '1jyyH1+TVfgZjqolkV/zzL3/ZgOFDsSvp3/dU3AMzPJ/KTMmhM2rVKV0MVbU4zG2\n' +
  'oXUyJYNucV/cN57Xq9PP1iw='

// 加密
export function encrypt(txt) {
  const encryptor = new JSEncrypt()
  encryptor.setPublicKey(publicKey) // 设置公钥
  return encryptor.encrypt(txt) // 对数据进行加密
}

// 解密
export function decrypt(txt) {
  const encryptor = new JSEncrypt()
  encryptor.setPrivateKey(privateKey) // 设置私钥
  return encryptor.decrypt(txt) // 对数据进行解密
}

