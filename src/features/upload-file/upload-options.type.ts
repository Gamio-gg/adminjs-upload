import { AWSOptions } from './providers/aws-provider'
import { MimeType } from './mime-types.type'
import BaseProvider from './providers/base-provider'
import { LocalUploadOptions } from './providers/local-provider'

/**
 * Configuration options for @admin-bro/upload feature
 *
 * @memberof module:@admin-bro/upload
 */
type UploadOptions = {
  /**
   * Options for the provider
   */
  provider: {
    /** AWS Credentials */
    aws?: AWSOptions,
    /** Storage on the local drive */
    local?: LocalUploadOptions
  } | BaseProvider,
  properties: {
    /**
     * Property under which file key (path) will be stored
     */
    key: string;
    /**
     * Virtual property where uploaded file will be passed to from
     * frontend to the backend in the request payload.
     * Default to `file`
     */
    file?: string;
    /**
     * Virtual property where path for uploaded file will be
     * generated and accessible on the frontend.
     * Default to `filePath`
     */
    filePath?: string
    /**
     * Property under which file bucket (folder) will be stored
     */
    bucket?: string;
    /**
     * Property under which file mime type will be stored.
     * When you give this system will show a correct icon by the
     * uploaded file
     */
    mimeType?: string;
    /**
     * Property under which file size will be stored
     */
    size?: string;
    /**
     * Property under which file name will be stored
     */
    filename?: string;
  },
  /** Validation rules */
  validation?: {
    /**
     * Available mime types
     */
    mimeTypes?: Array<MimeType>,
    /**
     * Maximum size in bytes
     */
    maxSize?: number,
  },
}

export default UploadOptions