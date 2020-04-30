import winston from 'winston'

import { get } from '../settings'

export const logger = winston.createLogger({
  level: get('logger:level'),
  defaultMeta: { service: 'api' },
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple(),
      ),
    }),
  ],
})
