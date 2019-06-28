class Doc < ApplicationRecord

belongs_to :user

scope :audios, -> { where(type: 'Audio') } 
scope :handwritings, -> { where(type: 'Handwriting') }
scope :remainders, -> { where(type: 'Remainder') } 
scope :textnotes, -> { where(type: 'TextNote') } 
scope :cameras, -> { where(type: 'Camera') }
scope :uploads, -> { where(type: 'Upload') }

end

