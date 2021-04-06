class User < ApplicationRecord
  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  attr_reader :password
  after_initialize :ensure_session_token

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.base64
    while (User.find_by(session_token: self.session_token))
      self.session_token = SecureRandom.base64
    end
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token = SecureRandom.base64
    while (User.find_by(session_token: self.session_token))
      self.session_token = SecureRandom.base6
    end
  end
end
