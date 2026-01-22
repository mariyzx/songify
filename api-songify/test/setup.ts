process.env.DATABASE_URL =
  process.env.TEST_DATABASE_URL || 'mysql://test:test@localhost:3306/test_db';
process.env.JWT_SECRET = 'test-secret-key';
process.env.JWT_EXPIRES_IN = '1h';
