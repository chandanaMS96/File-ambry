class User < ApplicationRecord
  extend Devise::Models
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
delegate :audios, :handwritings, :remainders, :textnotes, :cameras, to: :docs
  has_many :docs
 has_many_attached :images
end
