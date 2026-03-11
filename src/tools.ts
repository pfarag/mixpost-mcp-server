import { Tool } from '@modelcontextprotocol/sdk/types.js';

export const MIXPOST_TOOLS: Tool[] = [
  // Account tools
  {
    name: 'mixpost_list_accounts',
    description: 'List all connected social media accounts in the workspace',
    inputSchema: {
      type: 'object',
      properties: {},
      required: []
    }
  },
  {
    name: 'mixpost_get_account',
    description: 'Get details of a specific social media account',
    inputSchema: {
      type: 'object',
      properties: {
        accountUuid: {
          type: 'string',
          description: 'The UUID of the account to retrieve'
        }
      },
      required: ['accountUuid']
    }
  },

  // Post tools
  {
    name: 'mixpost_create_post',
    description: 'Create a new social media post',
    inputSchema: {
      type: 'object',
      properties: {
        date: {
          type: 'string',
          description: 'Post date in YYYY-MM-DD format'
        },
        time: {
          type: 'string',
          description: 'Post time in HH:MM format'
        },
        timezone: {
          type: 'string',
          description: 'Timezone for the post (e.g., "America/New_York")'
        },
        schedule: {
          type: 'boolean',
          description: 'Whether to schedule the post for the specified date/time'
        },
        schedule_now: {
          type: 'boolean',
          description: 'Whether to schedule the post immediately'
        },
        queue: {
          type: 'boolean',
          description: 'Whether to add the post to the queue'
        },
        accounts: {
          type: 'array',
          items: { type: 'string' },
          description: 'Array of account UUIDs to post to'
        },
        tags: {
          type: 'array',
          items: { type: 'string' },
          description: 'Array of tag UUIDs to associate with the post'
        },
        versions: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              account_id: { type: 'string' },
              is_original: { type: 'boolean' },
              content: {
                type: 'object',
                properties: {
                  body: { type: 'string' },
                  media: { type: 'array', items: { type: 'string' } },
                  urls: { type: 'array', items: { type: 'string' } }
                }
              },
              options: { type: 'object' }
            },
            required: ['account_id', 'is_original', 'content']
          },
          description: 'Array of post versions for different accounts'
        }
      },
      required: ['date', 'time', 'timezone', 'accounts', 'versions']
    }
  },
  {
    name: 'mixpost_update_post',
    description: 'Update an existing social media post',
    inputSchema: {
      type: 'object',
      properties: {
        postUuid: {
          type: 'string',
          description: 'The UUID of the post to update'
        },
        date: {
          type: 'string',
          description: 'Post date in YYYY-MM-DD format'
        },
        time: {
          type: 'string',
          description: 'Post time in HH:MM format'
        },
        timezone: {
          type: 'string',
          description: 'Timezone for the post'
        },
        accounts: {
          type: 'array',
          items: { type: 'string' },
          description: 'Array of account UUIDs to post to'
        },
        tags: {
          type: 'array',
          items: { type: 'string' },
          description: 'Array of tag UUIDs to associate with the post'
        },
        versions: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              account_id: { type: 'string' },
              is_original: { type: 'boolean' },
              content: {
                type: 'object',
                properties: {
                  body: { type: 'string' },
                  media: { type: 'array', items: { type: 'string' } },
                  urls: { type: 'array', items: { type: 'string' } }
                }
              },
              options: { type: 'object' }
            },
            required: ['account_id', 'is_original', 'content']
          },
          description: 'Array of post versions for different accounts'
        }
      },
      required: ['postUuid', 'date', 'time', 'timezone', 'accounts', 'versions']
    }
  },
  {
    name: 'mixpost_approve_post',
    description: 'Approve a social media post',
    inputSchema: {
      type: 'object',
      properties: {
        postUuid: {
          type: 'string',
          description: 'The UUID of the post to approve'
        }
      },
      required: ['postUuid']
    }
  },
  {
    name: 'mixpost_get_post',
    description: 'Get details of a specific post',
    inputSchema: {
      type: 'object',
      properties: {
        postUuid: {
          type: 'string',
          description: 'The UUID of the post to retrieve'
        }
      },
      required: ['postUuid']
    }
  },
  {
    name: 'mixpost_list_posts',
    description: 'List posts in the workspace',
    inputSchema: {
      type: 'object',
      properties: {
        page: {
          type: 'number',
          description: 'Page number for pagination'
        },
        limit: {
          type: 'number',
          description: 'Number of posts per page'
        },
        status: {
          type: 'string',
          description: 'Filter by post status'
        }
      },
      required: []
    }
  },
  {
    name: 'mixpost_delete_post',
    description: 'Delete a specific post',
    inputSchema: {
      type: 'object',
      properties: {
        postUuid: {
          type: 'string',
          description: 'The UUID of the post to delete'
        }
      },
      required: ['postUuid']
    }
  },
  {
    name: 'mixpost_delete_multiple_posts',
    description: 'Delete multiple posts at once',
    inputSchema: {
      type: 'object',
      properties: {
        postUuids: {
          type: 'array',
          items: { type: 'string' },
          description: 'Array of post UUIDs to delete'
        }
      },
      required: ['postUuids']
    }
  },
  {
    name: 'mixpost_schedule_post',
    description: 'Schedule a post for publishing',
    inputSchema: {
      type: 'object',
      properties: {
        postUuid: {
          type: 'string',
          description: 'The UUID of the post to schedule'
        }
      },
      required: ['postUuid']
    }
  },
  {
    name: 'mixpost_add_post_to_queue',
    description: 'Add a post to the publishing queue',
    inputSchema: {
      type: 'object',
      properties: {
        postUuid: {
          type: 'string',
          description: 'The UUID of the post to add to queue'
        }
      },
      required: ['postUuid']
    }
  },

  // Media tools
  {
    name: 'mixpost_list_media',
    description: 'List media files in the workspace',
    inputSchema: {
      type: 'object',
      properties: {
        page: {
          type: 'number',
          description: 'Page number for pagination'
        },
        limit: {
          type: 'number',
          description: 'Number of media files per page'
        },
        type: {
          type: 'string',
          description: 'Filter by media type (image, video, etc.)'
        }
      },
      required: []
    }
  },
  {
    name: 'mixpost_get_media',
    description: 'Get details of a specific media file',
    inputSchema: {
      type: 'object',
      properties: {
        mediaUuid: {
          type: 'string',
          description: 'The UUID of the media file to retrieve'
        }
      },
      required: ['mediaUuid']
    }
  },
  {
    name: 'mixpost_update_media',
    description: 'Update media file metadata',
    inputSchema: {
      type: 'object',
      properties: {
        mediaUuid: {
          type: 'string',
          description: 'The UUID of the media file to update'
        },
        name: {
          type: 'string',
          description: 'New name for the media file'
        },
        alt_text: {
          type: 'string',
          description: 'Alt text for accessibility'
        }
      },
      required: ['mediaUuid']
    }
  },
  {
    name: 'mixpost_delete_media',
    description: 'Delete a media file',
    inputSchema: {
      type: 'object',
      properties: {
        mediaUuid: {
          type: 'string',
          description: 'The UUID of the media file to delete'
        }
      },
      required: ['mediaUuid']
    }
  },

  // Tag tools
  {
    name: 'mixpost_list_tags',
    description: 'List all tags in the workspace',
    inputSchema: {
      type: 'object',
      properties: {},
      required: []
    }
  },
  {
    name: 'mixpost_get_tag',
    description: 'Get details of a specific tag',
    inputSchema: {
      type: 'object',
      properties: {
        tagUuid: {
          type: 'string',
          description: 'The UUID of the tag to retrieve'
        }
      },
      required: ['tagUuid']
    }
  },
  {
    name: 'mixpost_create_tag',
    description: 'Create a new tag',
    inputSchema: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          description: 'The name of the tag'
        },
        hex_color: {
          type: 'string',
          description: 'Hex color code for the tag (e.g., "#FF0000")'
        }
      },
      required: ['name']
    }
  },
  {
    name: 'mixpost_update_tag',
    description: 'Update an existing tag',
    inputSchema: {
      type: 'object',
      properties: {
        tagUuid: {
          type: 'string',
          description: 'The UUID of the tag to update'
        },
        name: {
          type: 'string',
          description: 'The new name of the tag'
        },
        hex_color: {
          type: 'string',
          description: 'New hex color code for the tag'
        }
      },
      required: ['tagUuid']
    }
  },
  {
    name: 'mixpost_delete_tag',
    description: 'Delete a tag',
    inputSchema: {
      type: 'object',
      properties: {
        tagUuid: {
          type: 'string',
          description: 'The UUID of the tag to delete'
        }
      },
      required: ['tagUuid']
    }
  }
];
