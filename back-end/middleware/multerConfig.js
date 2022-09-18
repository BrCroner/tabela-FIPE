import multer from 'multer'
import path from 'path'
import crypto from 'crypto'

export const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, path.resolve('upload'))
  },
  limits: {
    // 2(Bytes) * 1024(Kbytes) * 1024(MegaBytes) = 2MB
    fileSize: 2 * 1024 * 1024
  },
  filename: (req, file, callback) => {
    crypto.randomBytes(16, (err, hash) => {
      if(err) callback(err)
      // hash.toString('hex') -  converte os 16 bytes em hexadecimal
      const fileName = `${hash.toString('hex')}-${file.originalname}`
      callback(null, fileName)
    })
  },
  fileFilter:(req, file, callback) => {
    // Validar a extensão do arquivo
    if(path.extension(file.originalname) !== '.xls' || 
       path.extension(file.originalname) !== '.xlsx') 
       {
        callback(new Error('Tipo de arquivo inválido.'))
      } else{
        callback(null, true)
      }
  }
})