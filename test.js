const rest = [
  {
    type: 'element',
    name: 'scaninfo',
    attributes: {
      type: 'syn',
      protocol: 'tcp',
      numservices: '100',
      services:
        '7,9,13,21-23,25-26,37,53,79-81,88,106,110-111,113,119,135,139,143-144,179,199,389,427,443-445,465,513-515,543-544,548,554,587,631,646,873,990,993,995,1025-1029,1110,1433,1720,1723,1755,1900,2000-2001,2049,2121,2717,3000,3128,3306,3389,3986,4899,5000,5009,5051,5060,5101,5190,5357,5432,5631,5666,5800,5900,6000-6001,6646,7070,8000,8008-8009,8080-8081,8443,8888,9100,9999-10000,32768,49152-49157',
    },
  },
  { type: 'element', name: 'verbose', attributes: { level: '0' } },
  { type: 'element', name: 'debugging', attributes: { level: '0' } },
  {
    type: 'element',
    name: 'hosthint',
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.5', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '64:51:06:5C:4B:74',
          addrtype: 'mac',
          vendor: 'Hewlett Packard',
        },
      },
      { type: 'element', name: 'hostnames' },
    ],
  },
  {
    type: 'element',
    name: 'hosthint',
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.4', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '74:46:A0:AD:0D:DA',
          addrtype: 'mac',
          vendor: 'Hewlett Packard',
        },
      },
      { type: 'element', name: 'hostnames' },
    ],
  },
  {
    type: 'element',
    name: 'hosthint',
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.2', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '00:C0:B7:79:89:73',
          addrtype: 'mac',
          vendor: 'American Power Conversion',
        },
      },
      { type: 'element', name: 'hostnames' },
    ],
  },
  {
    type: 'element',
    name: 'hosthint',
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.18', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '78:7B:8A:E1:63:56',
          addrtype: 'mac',
          vendor: 'Apple',
        },
      },
      { type: 'element', name: 'hostnames' },
    ],
  },
  {
    type: 'element',
    name: 'hosthint',
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.21', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '10:DD:B1:B5:27:F5',
          addrtype: 'mac',
          vendor: 'Apple',
        },
      },
      { type: 'element', name: 'hostnames' },
    ],
  },
  {
    type: 'element',
    name: 'hosthint',
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.30', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '00:10:7F:69:18:8F',
          addrtype: 'mac',
          vendor: 'Crestron Electronics',
        },
      },
      { type: 'element', name: 'hostnames' },
    ],
  },
  {
    type: 'element',
    name: 'hosthint',
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.35', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: 'A0:D3:C1:30:71:B2',
          addrtype: 'mac',
          vendor: 'Hewlett Packard',
        },
      },
      { type: 'element', name: 'hostnames' },
    ],
  },
  {
    type: 'element',
    name: 'hosthint',
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.40', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: 'B8:CA:3A:B3:31:08',
          addrtype: 'mac',
          vendor: 'Dell',
        },
      },
      { type: 'element', name: 'hostnames' },
    ],
  },
  {
    type: 'element',
    name: 'hosthint',
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.44', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '64:51:06:55:E6:72',
          addrtype: 'mac',
          vendor: 'Hewlett Packard',
        },
      },
      { type: 'element', name: 'hostnames' },
    ],
  },
  {
    type: 'element',
    name: 'hosthint',
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.53', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: 'AC:16:2D:08:C5:AB',
          addrtype: 'mac',
          vendor: 'Hewlett Packard',
        },
      },
      { type: 'element', name: 'hostnames' },
    ],
  },
  {
    type: 'element',
    name: 'hosthint',
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.57', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: 'B8:CA:3A:7D:59:40',
          addrtype: 'mac',
          vendor: 'Dell',
        },
      },
      { type: 'element', name: 'hostnames' },
    ],
  },
  {
    type: 'element',
    name: 'hosthint',
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.68', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '48:0F:CF:BB:C3:61',
          addrtype: 'mac',
          vendor: 'Hewlett Packard',
        },
      },
      { type: 'element', name: 'hostnames' },
    ],
  },
  {
    type: 'element',
    name: 'hosthint',
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.72', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: 'B8:CA:3A:77:FD:A7',
          addrtype: 'mac',
          vendor: 'Dell',
        },
      },
      { type: 'element', name: 'hostnames' },
    ],
  },
  {
    type: 'element',
    name: 'hosthint',
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.83', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: 'EC:B1:D7:53:0F:FC',
          addrtype: 'mac',
          vendor: 'Hewlett Packard',
        },
      },
      { type: 'element', name: 'hostnames' },
    ],
  },
  {
    type: 'element',
    name: 'hosthint',
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.87', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '18:03:73:C8:C0:A3',
          addrtype: 'mac',
          vendor: 'Dell',
        },
      },
      { type: 'element', name: 'hostnames' },
    ],
  },
  {
    type: 'element',
    name: 'hosthint',
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.108', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '38:EA:A7:6B:4A:36',
          addrtype: 'mac',
          vendor: 'Hewlett Packard',
        },
      },
      { type: 'element', name: 'hostnames' },
    ],
  },
  {
    type: 'element',
    name: 'hosthint',
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.126', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '6C:3B:E5:2B:CD:0C',
          addrtype: 'mac',
          vendor: 'Hewlett Packard',
        },
      },
      { type: 'element', name: 'hostnames' },
    ],
  },
  {
    type: 'element',
    name: 'hosthint',
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.131', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '6C:2B:59:DE:AC:74',
          addrtype: 'mac',
          vendor: 'Dell',
        },
      },
      { type: 'element', name: 'hostnames' },
    ],
  },
  {
    type: 'element',
    name: 'hosthint',
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.142', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '90:B1:1C:6C:4A:F5',
          addrtype: 'mac',
          vendor: 'Dell',
        },
      },
      { type: 'element', name: 'hostnames' },
    ],
  },
  {
    type: 'element',
    name: 'hosthint',
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.151', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: 'EC:B1:D7:5C:F1:C1',
          addrtype: 'mac',
          vendor: 'Hewlett Packard',
        },
      },
      { type: 'element', name: 'hostnames' },
    ],
  },
  {
    type: 'element',
    name: 'hosthint',
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.184', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: 'A0:D3:C1:0F:DE:91',
          addrtype: 'mac',
          vendor: 'Hewlett Packard',
        },
      },
      { type: 'element', name: 'hostnames' },
    ],
  },
  {
    type: 'element',
    name: 'hosthint',
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.191', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '00:90:8F:B0:9B:46',
          addrtype: 'mac',
          vendor: 'Audio Codes',
        },
      },
      { type: 'element', name: 'hostnames' },
    ],
  },
  {
    type: 'element',
    name: 'hosthint',
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.204', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '00:90:8F:9B:2F:6E',
          addrtype: 'mac',
          vendor: 'Audio Codes',
        },
      },
      { type: 'element', name: 'hostnames' },
    ],
  },
  {
    type: 'element',
    name: 'hosthint',
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.215', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '00:90:8F:48:1A:91',
          addrtype: 'mac',
          vendor: 'Audio Codes',
        },
      },
      { type: 'element', name: 'hostnames' },
    ],
  },
  {
    type: 'element',
    name: 'hosthint',
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.224', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '50:9A:4C:3D:F9:4D',
          addrtype: 'mac',
          vendor: 'Dell',
        },
      },
      { type: 'element', name: 'hostnames' },
    ],
  },
  {
    type: 'element',
    name: 'hosthint',
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.228', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '00:E0:DB:46:D9:14',
          addrtype: 'mac',
          vendor: 'ViaVideo Communications',
        },
      },
      { type: 'element', name: 'hostnames' },
    ],
  },
  {
    type: 'element',
    name: 'hosthint',
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.229', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '00:90:5E:17:55:10',
          addrtype: 'mac',
          vendor: 'Rauland-borg',
        },
      },
      { type: 'element', name: 'hostnames' },
    ],
  },
  {
    type: 'element',
    name: 'hosthint',
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.226', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '70:38:EE:CD:42:98',
          addrtype: 'mac',
          vendor: 'Avaya',
        },
      },
      { type: 'element', name: 'hostnames' },
    ],
  },
  {
    type: 'element',
    name: 'hosthint',
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.227', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '68:64:4B:3C:82:67',
          addrtype: 'mac',
          vendor: 'Apple',
        },
      },
      { type: 'element', name: 'hostnames' },
    ],
  },
  {
    type: 'element',
    name: 'hosthint',
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.225', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '68:64:4B:39:32:63',
          addrtype: 'mac',
          vendor: 'Apple',
        },
      },
      { type: 'element', name: 'hostnames' },
    ],
  },
  {
    type: 'element',
    name: 'hosthint',
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.240', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '00:1F:28:20:EE:00',
          addrtype: 'mac',
          vendor: 'HPN Supply Chain',
        },
      },
      { type: 'element', name: 'hostnames' },
    ],
  },
  {
    type: 'element',
    name: 'hosthint',
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.28', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: 'B8:AC:6F:A0:FC:87',
          addrtype: 'mac',
          vendor: 'Dell',
        },
      },
      { type: 'element', name: 'hostnames' },
    ],
  },
  {
    type: 'element',
    name: 'hosthint',
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.49', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '98:90:96:A6:FA:5D',
          addrtype: 'mac',
          vendor: 'Dell',
        },
      },
      { type: 'element', name: 'hostnames' },
    ],
  },
  {
    type: 'element',
    name: 'hosthint',
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.24', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '58:20:B1:F3:D9:E8',
          addrtype: 'mac',
          vendor: 'Hewlett Packard',
        },
      },
      { type: 'element', name: 'hostnames' },
    ],
  },
  {
    type: 'element',
    name: 'hosthint',
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.250', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '00:07:B4:00:01:01',
          addrtype: 'mac',
          vendor: 'Cisco Systems',
        },
      },
      { type: 'element', name: 'hostnames' },
    ],
  },
  {
    type: 'element',
    name: 'hosthint',
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.251', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '00:15:C6:B4:93:3F',
          addrtype: 'mac',
          vendor: 'Cisco Systems',
        },
      },
      { type: 'element', name: 'hostnames' },
    ],
  },
  {
    type: 'element',
    name: 'hosthint',
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.252', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '00:15:C6:B4:93:7F',
          addrtype: 'mac',
          vendor: 'Cisco Systems',
        },
      },
      { type: 'element', name: 'hostnames' },
    ],
  },
  {
    type: 'element',
    name: 'hosthint',
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.125', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '50:65:F3:1D:23:E8',
          addrtype: 'mac',
          vendor: 'Hewlett Packard',
        },
      },
      { type: 'element', name: 'hostnames' },
    ],
  },
  {
    type: 'element',
    name: 'hosthint',
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.146', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '40:A8:F0:4D:D4:7D',
          addrtype: 'mac',
          vendor: 'Hewlett Packard',
        },
      },
      { type: 'element', name: 'hostnames' },
    ],
  },
  {
    type: 'element',
    name: 'hosthint',
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.162', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '50:65:F3:1A:19:70',
          addrtype: 'mac',
          vendor: 'Hewlett Packard',
        },
      },
      { type: 'element', name: 'hostnames' },
    ],
  },
  {
    type: 'element',
    name: 'hosthint',
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.166', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '00:10:7F:A5:B4:55',
          addrtype: 'mac',
          vendor: 'Crestron Electronics',
        },
      },
      { type: 'element', name: 'hostnames' },
    ],
  },
  {
    type: 'element',
    name: 'hosthint',
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.29', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: 'C0:57:BC:1F:BF:29',
          addrtype: 'mac',
          vendor: 'Avaya',
        },
      },
      { type: 'element', name: 'hostnames' },
    ],
  },
  {
    type: 'element',
    name: 'host',
    attributes: { starttime: '1614700878', endtime: '1614700898' },
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.2', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '00:C0:B7:79:89:73',
          addrtype: 'mac',
          vendor: 'American Power Conversion',
        },
      },
      {
        type: 'element',
        name: 'hostnames',
        elements: [
          {
            type: 'element',
            name: 'hostname',
            attributes: { name: 'pc134467.med.cornell.edu', type: 'PTR' },
          },
        ],
      },
      {
        type: 'element',
        name: 'ports',
        elements: [
          {
            type: 'element',
            name: 'extraports',
            attributes: { state: 'closed', count: '97' },
            elements: [
              {
                type: 'element',
                name: 'extrareasons',
                attributes: { reason: 'resets', count: '97' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '21' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '64',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: { name: 'ftp', method: 'table', conf: '3' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '23' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '64',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'telnet',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '80' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '64',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: { name: 'http', method: 'table', conf: '3' },
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'os',
        elements: [
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'open', proto: 'tcp', portid: '21' },
          },
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'closed', proto: 'tcp', portid: '7' },
          },
          {
            type: 'element',
            name: 'portused',
            attributes: {
              state: 'closed',
              proto: 'udp',
              portid: '32570',
            },
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Schweitzer Engineering SEL-2701 Ethernet processor',
              accuracy: '100',
              line: '96508',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'specialized',
                  vendor: 'Schweitzer Engineering',
                  osfamily: 'embedded',
                  accuracy: '100',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/h:schweitzerengineering:sel-2701',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      { type: 'element', name: 'distance', attributes: { value: '1' } },
      {
        type: 'element',
        name: 'times',
        attributes: { srtt: '9189', rttvar: '10134', to: '100000' },
      },
    ],
  },
  {
    type: 'element',
    name: 'host',
    attributes: { starttime: '1614700878', endtime: '1614700903' },
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.4', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '74:46:A0:AD:0D:DA',
          addrtype: 'mac',
          vendor: 'Hewlett Packard',
        },
      },
      {
        type: 'element',
        name: 'hostnames',
        elements: [
          {
            type: 'element',
            name: 'hostname',
            attributes: { name: 'pc163184.med.cornell.edu', type: 'PTR' },
          },
        ],
      },
      {
        type: 'element',
        name: 'ports',
        elements: [
          {
            type: 'element',
            name: 'extraports',
            attributes: { state: 'filtered', count: '95' },
            elements: [
              {
                type: 'element',
                name: 'extrareasons',
                attributes: { reason: 'no-responses', count: '95' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '135' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'msrpc',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '139' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'netbios-ssn',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '445' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'microsoft-ds',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '3389' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'ms-wbt-server',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '5357' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'wsdapi',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'os',
        elements: [
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'open', proto: 'tcp', portid: '135' },
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows XP SP2',
              accuracy: '87',
              line: '81598',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: 'XP',
                  accuracy: '87',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_xp::sp2',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows XP SP3',
              accuracy: '87',
              line: '84874',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: 'XP',
                  accuracy: '87',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_xp::sp3',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows 7',
              accuracy: '85',
              line: '76408',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: '7',
                  accuracy: '85',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:microsoft:windows_7' },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name:
                'Microsoft Windows Server 2008 SP1 or Windows Server 2008 R2',
              accuracy: '85',
              line: '75300',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: '2008',
                  accuracy: '85',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_server_2008::sp1',
                      },
                    ],
                  },
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_server_2008:r2',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      { type: 'element', name: 'distance', attributes: { value: '1' } },
      {
        type: 'element',
        name: 'tcpsequence',
        attributes: {
          index: '256',
          difficulty: 'Good luck!',
          values: 'DA0C7B8A,3DA3257F,B5BA8CFB,F0651EA3,B01FFCAF,C4CEF9C',
        },
      },
      {
        type: 'element',
        name: 'ipidsequence',
        attributes: {
          class: 'Incremental',
          values: '20E9,20EA,20EB,20EC,20ED,20EE',
        },
      },
      {
        type: 'element',
        name: 'tcptssequence',
        attributes: { class: 'none returned (unsupported)' },
      },
      {
        type: 'element',
        name: 'times',
        attributes: { srtt: '1705', rttvar: '702', to: '100000' },
      },
    ],
  },
  {
    type: 'element',
    name: 'host',
    attributes: { starttime: '1614700878', endtime: '1614700903' },
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.5', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '64:51:06:5C:4B:74',
          addrtype: 'mac',
          vendor: 'Hewlett Packard',
        },
      },
      {
        type: 'element',
        name: 'hostnames',
        elements: [
          {
            type: 'element',
            name: 'hostname',
            attributes: { name: 'pc163344.med.cornell.edu', type: 'PTR' },
          },
        ],
      },
      {
        type: 'element',
        name: 'ports',
        elements: [
          {
            type: 'element',
            name: 'extraports',
            attributes: { state: 'filtered', count: '95' },
            elements: [
              {
                type: 'element',
                name: 'extrareasons',
                attributes: { reason: 'no-responses', count: '95' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '80' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: { name: 'http', method: 'table', conf: '3' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '135' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'msrpc',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '139' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'netbios-ssn',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '445' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'microsoft-ds',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '3389' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'ms-wbt-server',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'os',
        elements: [
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'open', proto: 'tcp', portid: '80' },
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows XP SP3',
              accuracy: '89',
              line: '84874',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: 'XP',
                  accuracy: '89',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_xp::sp3',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name:
                'Microsoft Windows Server 2008 SP1 or Windows Server 2008 R2',
              accuracy: '86',
              line: '75300',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: '2008',
                  accuracy: '86',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_server_2008::sp1',
                      },
                    ],
                  },
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_server_2008:r2',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows XP SP2',
              accuracy: '85',
              line: '81598',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: 'XP',
                  accuracy: '85',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_xp::sp2',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows 7',
              accuracy: '85',
              line: '76408',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: '7',
                  accuracy: '85',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:microsoft:windows_7' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      { type: 'element', name: 'distance', attributes: { value: '1' } },
      {
        type: 'element',
        name: 'tcpsequence',
        attributes: {
          index: '263',
          difficulty: 'Good luck!',
          values: 'FE2B1F30,8DA067E0,6B9FF97B,64F42514,646E91C,1291DAD7',
        },
      },
      {
        type: 'element',
        name: 'ipidsequence',
        attributes: {
          class: 'Incremental',
          values: 'CDA2,CDA3,CDA4,CDA5,CDA6,CDA7',
        },
      },
      {
        type: 'element',
        name: 'tcptssequence',
        attributes: { class: 'none returned (unsupported)' },
      },
      {
        type: 'element',
        name: 'times',
        attributes: { srtt: '1199', rttvar: '700', to: '100000' },
      },
    ],
  },
  {
    type: 'element',
    name: 'host',
    attributes: { starttime: '1614700878', endtime: '1614700898' },
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.18', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '78:7B:8A:E1:63:56',
          addrtype: 'mac',
          vendor: 'Apple',
        },
      },
      { type: 'element', name: 'hostnames' },
      {
        type: 'element',
        name: 'ports',
        elements: [
          {
            type: 'element',
            name: 'extraports',
            attributes: { state: 'closed', count: '98' },
            elements: [
              {
                type: 'element',
                name: 'extrareasons',
                attributes: { reason: 'resets', count: '98' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '22' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '64',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: { name: 'ssh', method: 'table', conf: '3' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '3000' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '64',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: { name: 'ppp', method: 'table', conf: '3' },
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'os',
        elements: [
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'open', proto: 'tcp', portid: '22' },
          },
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'closed', proto: 'tcp', portid: '7' },
          },
          {
            type: 'element',
            name: 'portused',
            attributes: {
              state: 'closed',
              proto: 'udp',
              portid: '41444',
            },
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name:
                'Apple macOS 10.13 (High Sierra) - 10.15 (Catalina) or iOS 11.0 - 13.4 (Darwin 17.0.0 - 19.2.0)',
              accuracy: '100',
              line: '3614',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'phone',
                  vendor: 'Apple',
                  osfamily: 'iOS',
                  osgen: '11.X',
                  accuracy: '100',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:apple:iphone_os:11' },
                    ],
                  },
                ],
              },
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'phone',
                  vendor: 'Apple',
                  osfamily: 'iOS',
                  osgen: '12.X',
                  accuracy: '100',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:apple:iphone_os:12' },
                    ],
                  },
                ],
              },
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'phone',
                  vendor: 'Apple',
                  osfamily: 'iOS',
                  osgen: '13.X',
                  accuracy: '100',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:apple:iphone_os:13' },
                    ],
                  },
                ],
              },
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Apple',
                  osfamily: 'macOS',
                  osgen: '10.13.X',
                  accuracy: '100',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:apple:mac_os_x:10.13' },
                    ],
                  },
                ],
              },
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Apple',
                  osfamily: 'macOS',
                  osgen: '10.14.X',
                  accuracy: '100',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:apple:mac_os_x:10.14' },
                    ],
                  },
                ],
              },
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Apple',
                  osfamily: 'macOS',
                  osgen: '10.15.X',
                  accuracy: '100',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:apple:mac_os_x:10.15' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'uptime',
        attributes: {
          seconds: '769893',
          lastboot: 'Sun Feb 21 13:10:18 2021',
        },
      },
      { type: 'element', name: 'distance', attributes: { value: '1' } },
      {
        type: 'element',
        name: 'tcpsequence',
        attributes: {
          index: '261',
          difficulty: 'Good luck!',
          values: '58E51577,830532AA,112C388D,99169075,1F5514F0,E2E24147',
        },
      },
      {
        type: 'element',
        name: 'ipidsequence',
        attributes: { class: 'All zeros', values: '0,0,0,0,0,0' },
      },
      {
        type: 'element',
        name: 'tcptssequence',
        attributes: {
          class: '1000HZ',
          values: '2DE369EC,2DE36A54,2DE36AB6,2DE36B17,2DE36B78,2DE36BDA',
        },
      },
      {
        type: 'element',
        name: 'times',
        attributes: { srtt: '5578', rttvar: '8694', to: '100000' },
      },
    ],
  },
  {
    type: 'element',
    name: 'host',
    attributes: { starttime: '1614700878', endtime: '1614700898' },
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.21', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '10:DD:B1:B5:27:F5',
          addrtype: 'mac',
          vendor: 'Apple',
        },
      },
      {
        type: 'element',
        name: 'hostnames',
        elements: [
          {
            type: 'element',
            name: 'hostname',
            attributes: { name: 'mac189105.med.cornell.edu', type: 'PTR' },
          },
        ],
      },
      {
        type: 'element',
        name: 'ports',
        elements: [
          {
            type: 'element',
            name: 'extraports',
            attributes: { state: 'closed', count: '98' },
            elements: [
              {
                type: 'element',
                name: 'extrareasons',
                attributes: { reason: 'resets', count: '98' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '22' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '64',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: { name: 'ssh', method: 'table', conf: '3' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '5900' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '64',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: { name: 'vnc', method: 'table', conf: '3' },
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'os',
        elements: [
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'open', proto: 'tcp', portid: '22' },
          },
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'closed', proto: 'tcp', portid: '7' },
          },
          {
            type: 'element',
            name: 'portused',
            attributes: {
              state: 'closed',
              proto: 'udp',
              portid: '44369',
            },
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name:
                'Apple Mac OS X 10.11 (El Capitan) or iOS 12.4 - 13.0 (Darwin 15.6.0 - 19.0.0)',
              accuracy: '100',
              line: '7506',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Apple',
                  osfamily: 'OS X',
                  osgen: '10.11.X',
                  accuracy: '100',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:apple:mac_os_x:10.11' },
                    ],
                  },
                ],
              },
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'media device',
                  vendor: 'Apple',
                  osfamily: 'iOS',
                  osgen: '12.X',
                  accuracy: '100',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:apple:iphone_os:12' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'uptime',
        attributes: {
          seconds: '3107728',
          lastboot: 'Mon Jan 25 11:46:23 2021',
        },
      },
      { type: 'element', name: 'distance', attributes: { value: '1' } },
      {
        type: 'element',
        name: 'tcpsequence',
        attributes: {
          index: '263',
          difficulty: 'Good luck!',
          values: 'A8C8F757,A5F70FC9,C7F0FC84,3A2C2F63,69DFD3FC,67D4295B',
        },
      },
      {
        type: 'element',
        name: 'ipidsequence',
        attributes: { class: 'All zeros', values: '0,0,0,0,0,0' },
      },
      {
        type: 'element',
        name: 'tcptssequence',
        attributes: {
          class: '1000HZ',
          values: 'B93BF07D,B93BF0E7,B93BF14A,B93BF1AE,B93BF212,B93BF277',
        },
      },
      {
        type: 'element',
        name: 'times',
        attributes: { srtt: '5684', rttvar: '8946', to: '100000' },
      },
    ],
  },
  {
    type: 'element',
    name: 'host',
    attributes: { starttime: '1614700878', endtime: '1614700898' },
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.24', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '58:20:B1:F3:D9:E8',
          addrtype: 'mac',
          vendor: 'Hewlett Packard',
        },
      },
      { type: 'element', name: 'hostnames' },
      {
        type: 'element',
        name: 'ports',
        elements: [
          {
            type: 'element',
            name: 'extraports',
            attributes: { state: 'closed', count: '93' },
            elements: [
              {
                type: 'element',
                name: 'extrareasons',
                attributes: { reason: 'resets', count: '93' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '80' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '64',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: { name: 'http', method: 'table', conf: '3' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '139' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '64',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'netbios-ssn',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '443' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '64',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'https',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '445' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '64',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'microsoft-ds',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '631' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '64',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: { name: 'ipp', method: 'table', conf: '3' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '8080' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '64',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'http-proxy',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '9100' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '64',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'jetdirect',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'os',
        elements: [
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'open', proto: 'tcp', portid: '80' },
          },
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'closed', proto: 'tcp', portid: '7' },
          },
          {
            type: 'element',
            name: 'portused',
            attributes: {
              state: 'closed',
              proto: 'udp',
              portid: '40440',
            },
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'VxWorks',
              accuracy: '100',
              line: '105691',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Wind River',
                  osfamily: 'VxWorks',
                  accuracy: '100',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:windriver:vxworks' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'uptime',
        attributes: {
          seconds: '3959685',
          lastboot: 'Fri Jan 15 15:07:06 2021',
        },
      },
      { type: 'element', name: 'distance', attributes: { value: '1' } },
      {
        type: 'element',
        name: 'tcpsequence',
        attributes: {
          index: '262',
          difficulty: 'Good luck!',
          values: '90CC7161,98F2C20F,F2BF0FB1,BF82B1B7,820AB772,A2172C9',
        },
      },
      {
        type: 'element',
        name: 'ipidsequence',
        attributes: {
          class: 'Busy server or unknown class',
          values: 'AE70,B056,B1D6,B4DB,B4F0,B533',
        },
      },
      {
        type: 'element',
        name: 'tcptssequence',
        attributes: {
          class: '1000HZ',
          values: 'EC03C501,EC03C576,EC03C5DA,EC03C63E,EC03C6A2,EC03C706',
        },
      },
      {
        type: 'element',
        name: 'times',
        attributes: { srtt: '6038', rttvar: '7228', to: '100000' },
      },
    ],
  },
  {
    type: 'element',
    name: 'host',
    attributes: { starttime: '1614700878', endtime: '1614700903' },
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.28', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: 'B8:AC:6F:A0:FC:87',
          addrtype: 'mac',
          vendor: 'Dell',
        },
      },
      {
        type: 'element',
        name: 'hostnames',
        elements: [
          {
            type: 'element',
            name: 'hostname',
            attributes: { name: 'pc138943.med.cornell.edu', type: 'PTR' },
          },
        ],
      },
      {
        type: 'element',
        name: 'ports',
        elements: [
          {
            type: 'element',
            name: 'extraports',
            attributes: { state: 'filtered', count: '95' },
            elements: [
              {
                type: 'element',
                name: 'extrareasons',
                attributes: { reason: 'no-responses', count: '95' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '135' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'msrpc',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '139' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'netbios-ssn',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '445' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'microsoft-ds',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '3389' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'ms-wbt-server',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '5357' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'wsdapi',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'os',
        elements: [
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'open', proto: 'tcp', portid: '135' },
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows XP SP3',
              accuracy: '89',
              line: '84874',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: 'XP',
                  accuracy: '89',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_xp::sp3',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name:
                'Microsoft Windows Server 2008 SP1 or Windows Server 2008 R2',
              accuracy: '86',
              line: '75300',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: '2008',
                  accuracy: '86',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_server_2008::sp1',
                      },
                    ],
                  },
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_server_2008:r2',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows XP SP2',
              accuracy: '85',
              line: '81598',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: 'XP',
                  accuracy: '85',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_xp::sp2',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows 7',
              accuracy: '85',
              line: '76408',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: '7',
                  accuracy: '85',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:microsoft:windows_7' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      { type: 'element', name: 'distance', attributes: { value: '1' } },
      {
        type: 'element',
        name: 'tcpsequence',
        attributes: {
          index: '259',
          difficulty: 'Good luck!',
          values: '8BA18548,32470E4B,1FC83EA7,C720A53F,AC140E83,87EB02D5',
        },
      },
      {
        type: 'element',
        name: 'ipidsequence',
        attributes: {
          class: 'Incremental',
          values: '35CE,35CF,35D0,35D1,35D2,35D3',
        },
      },
      {
        type: 'element',
        name: 'tcptssequence',
        attributes: { class: 'none returned (unsupported)' },
      },
      {
        type: 'element',
        name: 'times',
        attributes: { srtt: '920', rttvar: '679', to: '100000' },
      },
    ],
  },
  {
    type: 'element',
    name: 'host',
    attributes: { starttime: '1614700878', endtime: '1614700903' },
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.29', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: 'C0:57:BC:1F:BF:29',
          addrtype: 'mac',
          vendor: 'Avaya',
        },
      },
      {
        type: 'element',
        name: 'hostnames',
        elements: [
          {
            type: 'element',
            name: 'hostname',
            attributes: { name: 'pc164084.med.cornell.edu', type: 'PTR' },
          },
        ],
      },
      {
        type: 'element',
        name: 'ports',
        elements: [
          {
            type: 'element',
            name: 'extraports',
            attributes: { state: 'filtered', count: '100' },
            elements: [
              {
                type: 'element',
                name: 'extrareasons',
                attributes: { reason: 'no-responses', count: '100' },
              },
            ],
          },
        ],
      },
      { type: 'element', name: 'os' },
      { type: 'element', name: 'distance', attributes: { value: '1' } },
      {
        type: 'element',
        name: 'times',
        attributes: { srtt: '760', rttvar: '1291', to: '100000' },
      },
    ],
  },
  {
    type: 'element',
    name: 'host',
    attributes: { starttime: '1614700878', endtime: '1614700910' },
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.30', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '00:10:7F:69:18:8F',
          addrtype: 'mac',
          vendor: 'Crestron Electronics',
        },
      },
      { type: 'element', name: 'hostnames' },
      {
        type: 'element',
        name: 'ports',
        elements: [
          {
            type: 'element',
            name: 'extraports',
            attributes: { state: 'closed', count: '96' },
            elements: [
              {
                type: 'element',
                name: 'extrareasons',
                attributes: { reason: 'resets', count: '96' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '22' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '127',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: { name: 'ssh', method: 'table', conf: '3' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '53' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '64',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'domain',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '80' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '127',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: { name: 'http', method: 'table', conf: '3' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '443' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '127',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'https',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'os',
        elements: [
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'open', proto: 'tcp', portid: '22' },
          },
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'closed', proto: 'tcp', portid: '7' },
          },
          {
            type: 'element',
            name: 'portused',
            attributes: {
              state: 'closed',
              proto: 'udp',
              portid: '38274',
            },
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Samsung LE32B651 TV',
              accuracy: '97',
              line: '95930',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'media device',
                  vendor: 'Samsung',
                  osfamily: 'embedded',
                  accuracy: '97',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/h:samsung:le32b651' },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows 7 Ultimate Beta (build 7000)',
              accuracy: '93',
              line: '77841',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: '7',
                  accuracy: '93',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_7::-:ultimate',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows 7 SP1',
              accuracy: '93',
              line: '77279',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: '7',
                  accuracy: '93',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_7::sp1',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name:
                'Microsoft Windows Server 2008 SP2 or Windows 10 or Xbox One',
              accuracy: '92',
              line: '75466',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: '2008',
                  accuracy: '92',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_server_2008::sp2',
                      },
                    ],
                  },
                ],
              },
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: '10',
                  accuracy: '92',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:microsoft:windows_10' },
                    ],
                  },
                ],
              },
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'media device',
                  vendor: 'Microsoft',
                  osfamily: 'embedded',
                  accuracy: '92',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/h:microsoft:xbox_one' },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name:
                'Microsoft Windows Vista, Windows 7 SP1, or Windows 8.1 Update 1',
              accuracy: '92',
              line: '80364',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: 'Vista',
                  accuracy: '92',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_vista',
                      },
                    ],
                  },
                ],
              },
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: '7',
                  accuracy: '92',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_7::sp1',
                      },
                    ],
                  },
                ],
              },
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: '8.1',
                  accuracy: '92',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:microsoft:windows_8.1' },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows 7 or Windows Server 2008 R2',
              accuracy: '91',
              line: '76956',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: '7',
                  accuracy: '91',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:microsoft:windows_7' },
                    ],
                  },
                ],
              },
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: '2008',
                  accuracy: '91',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_server_2008:r2',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name:
                'Microsoft Windows Vista SP2 or Windows 7 Ultimate SP0 - SP1',
              accuracy: '91',
              line: '80294',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: 'Vista',
                  accuracy: '91',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_vista::sp2',
                      },
                    ],
                  },
                ],
              },
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: '7',
                  accuracy: '91',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_7::-:ultimate',
                      },
                    ],
                  },
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_7::sp1:ultimate',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows Server 2008 SP2',
              accuracy: '91',
              line: '75355',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: '2008',
                  accuracy: '91',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_server_2008::sp2',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows Vista',
              accuracy: '90',
              line: '79844',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: 'Vista',
                  accuracy: '90',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_vista',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name:
                'Microsoft Windows 7 SP0 - SP1, Windows Server 2008 SP1, Windows Server 2008 R2, Windows 8, or Windows 8.1 Update 1',
              accuracy: '90',
              line: '77190',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: '7',
                  accuracy: '90',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_7::-',
                      },
                    ],
                  },
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_7::sp1',
                      },
                    ],
                  },
                ],
              },
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: '2008',
                  accuracy: '90',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_server_2008::sp1',
                      },
                    ],
                  },
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_server_2008:r2',
                      },
                    ],
                  },
                ],
              },
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: '8',
                  accuracy: '90',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:microsoft:windows_8' },
                    ],
                  },
                ],
              },
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: '8.1',
                  accuracy: '90',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:microsoft:windows_8.1' },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osfingerprint',
            attributes: {
              fingerprint:
                'OS:SCAN(V=7.91%E=4%D=3/2%OT=22%CT=7%CU=38274%PV=N%DS=1%DC=D%G=Y%M=00107F%TM\nOS:=603E616F%P=i686-pc-windows-windows)SEQ(SP=FC%GCD=1%ISR=10B%TI=I%CI=Z%II\nOS:=I%SS=O%TS=7)OPS(O1=M5B4NW8ST11%O2=M5B4NW8ST11%O3=M5B4NW8NNT11%O4=M5B4NW\nOS:8ST11%O5=M5B4NW8ST11%O6=M5B4ST11)WIN(W1=2000%W2=2000%W3=2000%W4=2000%W5=\nOS:2000%W6=2000)ECN(R=Y%DF=Y%T=7F%W=2000%O=M5B4NW8NNS%CC=N%Q=)T1(R=Y%DF=Y%T\nOS:=7F%S=O%A=S+%F=AS%RD=0%Q=)T2(R=Y%DF=Y%T=40%W=0%S=Z%A=S%F=AR%O=%RD=0%Q=)T\nOS:3(R=Y%DF=Y%T=40%W=0%S=Z%A=O%F=AR%O=%RD=0%Q=)T4(R=Y%DF=Y%T=7F%W=0%S=A%A=O\nOS:%F=R%O=%RD=0%Q=)T5(R=Y%DF=Y%T=40%W=0%S=Z%A=S+%F=AR%O=%RD=0%Q=)T6(R=Y%DF=\nOS:Y%T=40%W=0%S=A%A=Z%F=R%O=%RD=0%Q=)T7(R=Y%DF=Y%T=40%W=0%S=Z%A=S+%F=AR%O=%\nOS:RD=0%Q=)U1(R=Y%DF=N%T=40%IPL=164%UN=0%RIPL=G%RID=G%RIPCK=G%RUCK=G%RUD=G)\nOS:IE(R=Y%DFI=N%T=40%CD=S)\n',
            },
          },
        ],
      },
      {
        type: 'element',
        name: 'uptime',
        attributes: {
          seconds: '1572271',
          lastboot: 'Fri Feb 12 06:17:20 2021',
        },
      },
      { type: 'element', name: 'distance', attributes: { value: '1' } },
      {
        type: 'element',
        name: 'tcpsequence',
        attributes: {
          index: '253',
          difficulty: 'Good luck!',
          values: '26880B7A,81EA4335,2EFFC7B2,F7931E78,CB3FF10C,80C4A237',
        },
      },
      {
        type: 'element',
        name: 'ipidsequence',
        attributes: {
          class: 'Incremental',
          values: '3752,3753,3755,3756,3757,3758',
        },
      },
      {
        type: 'element',
        name: 'tcptssequence',
        attributes: {
          class: '100HZ',
          values: '95F17C6,95F17D0,95F17DA,95F17E4,95F17EE,95F17F8',
        },
      },
      {
        type: 'element',
        name: 'times',
        attributes: { srtt: '4097', rttvar: '7475', to: '100000' },
      },
    ],
  },
  {
    type: 'element',
    name: 'host',
    attributes: { starttime: '1614700878', endtime: '1614700903' },
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.35', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: 'A0:D3:C1:30:71:B2',
          addrtype: 'mac',
          vendor: 'Hewlett Packard',
        },
      },
      {
        type: 'element',
        name: 'hostnames',
        elements: [
          {
            type: 'element',
            name: 'hostname',
            attributes: { name: 'pc160434.med.cornell.edu', type: 'PTR' },
          },
        ],
      },
      {
        type: 'element',
        name: 'ports',
        elements: [
          {
            type: 'element',
            name: 'extraports',
            attributes: { state: 'filtered', count: '96' },
            elements: [
              {
                type: 'element',
                name: 'extrareasons',
                attributes: { reason: 'no-responses', count: '96' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '135' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'msrpc',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '139' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'netbios-ssn',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '445' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'microsoft-ds',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '3389' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'ms-wbt-server',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'os',
        elements: [
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'open', proto: 'tcp', portid: '135' },
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows XP SP3',
              accuracy: '89',
              line: '84874',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: 'XP',
                  accuracy: '89',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_xp::sp3',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows XP SP2',
              accuracy: '87',
              line: '81598',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: 'XP',
                  accuracy: '87',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_xp::sp2',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows 7',
              accuracy: '85',
              line: '76408',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: '7',
                  accuracy: '85',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:microsoft:windows_7' },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name:
                'Microsoft Windows Server 2008 SP1 or Windows Server 2008 R2',
              accuracy: '85',
              line: '75300',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: '2008',
                  accuracy: '85',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_server_2008::sp1',
                      },
                    ],
                  },
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_server_2008:r2',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      { type: 'element', name: 'distance', attributes: { value: '1' } },
      {
        type: 'element',
        name: 'tcpsequence',
        attributes: {
          index: '261',
          difficulty: 'Good luck!',
          values: 'A2FD3EE9,DCE42CB4,4DC6A5C9,37535948,49C01DAD,9FA4BEBB',
        },
      },
      {
        type: 'element',
        name: 'ipidsequence',
        attributes: {
          class: 'Incremental',
          values: '512D,512E,512F,5130,5131,5132',
        },
      },
      {
        type: 'element',
        name: 'tcptssequence',
        attributes: { class: 'none returned (unsupported)' },
      },
      {
        type: 'element',
        name: 'times',
        attributes: { srtt: '860', rttvar: '978', to: '100000' },
      },
    ],
  },
  {
    type: 'element',
    name: 'host',
    attributes: { starttime: '1614700878', endtime: '1614700903' },
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.40', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: 'B8:CA:3A:B3:31:08',
          addrtype: 'mac',
          vendor: 'Dell',
        },
      },
      {
        type: 'element',
        name: 'hostnames',
        elements: [
          {
            type: 'element',
            name: 'hostname',
            attributes: { name: 'pc155023.med.cornell.edu', type: 'PTR' },
          },
        ],
      },
      {
        type: 'element',
        name: 'ports',
        elements: [
          {
            type: 'element',
            name: 'extraports',
            attributes: { state: 'filtered', count: '96' },
            elements: [
              {
                type: 'element',
                name: 'extrareasons',
                attributes: { reason: 'no-responses', count: '96' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '135' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'msrpc',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '139' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'netbios-ssn',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '445' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'microsoft-ds',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '3389' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'ms-wbt-server',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'os',
        elements: [
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'open', proto: 'tcp', portid: '135' },
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows XP SP3',
              accuracy: '89',
              line: '84874',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: 'XP',
                  accuracy: '89',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_xp::sp3',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows XP SP2',
              accuracy: '87',
              line: '81598',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: 'XP',
                  accuracy: '87',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_xp::sp2',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows 7',
              accuracy: '85',
              line: '76408',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: '7',
                  accuracy: '85',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:microsoft:windows_7' },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name:
                'Microsoft Windows Server 2008 SP1 or Windows Server 2008 R2',
              accuracy: '85',
              line: '75300',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: '2008',
                  accuracy: '85',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_server_2008::sp1',
                      },
                    ],
                  },
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_server_2008:r2',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      { type: 'element', name: 'distance', attributes: { value: '1' } },
      {
        type: 'element',
        name: 'tcpsequence',
        attributes: {
          index: '263',
          difficulty: 'Good luck!',
          values: '635D0B82,E9600104,96DEA269,90B5B8A2,DE0FEE65,FBD8EFB0',
        },
      },
      {
        type: 'element',
        name: 'ipidsequence',
        attributes: {
          class: 'Incremental',
          values: 'CC75,CC76,CC77,CC79,CC7A,CC7B',
        },
      },
      {
        type: 'element',
        name: 'tcptssequence',
        attributes: { class: 'none returned (unsupported)' },
      },
      {
        type: 'element',
        name: 'times',
        attributes: { srtt: '794', rttvar: '763', to: '100000' },
      },
    ],
  },
  {
    type: 'element',
    name: 'host',
    attributes: { starttime: '1614700878', endtime: '1614700903' },
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.44', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '64:51:06:55:E6:72',
          addrtype: 'mac',
          vendor: 'Hewlett Packard',
        },
      },
      { type: 'element', name: 'hostnames' },
      {
        type: 'element',
        name: 'ports',
        elements: [
          {
            type: 'element',
            name: 'extraports',
            attributes: { state: 'filtered', count: '96' },
            elements: [
              {
                type: 'element',
                name: 'extrareasons',
                attributes: { reason: 'no-responses', count: '96' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '135' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'msrpc',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '139' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'netbios-ssn',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '445' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'microsoft-ds',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '3389' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'ms-wbt-server',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'os',
        elements: [
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'open', proto: 'tcp', portid: '135' },
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows XP SP3',
              accuracy: '89',
              line: '84874',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: 'XP',
                  accuracy: '89',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_xp::sp3',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows XP SP2',
              accuracy: '87',
              line: '81598',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: 'XP',
                  accuracy: '87',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_xp::sp2',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows 7',
              accuracy: '85',
              line: '76408',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: '7',
                  accuracy: '85',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:microsoft:windows_7' },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name:
                'Microsoft Windows Server 2008 SP1 or Windows Server 2008 R2',
              accuracy: '85',
              line: '75300',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: '2008',
                  accuracy: '85',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_server_2008::sp1',
                      },
                    ],
                  },
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_server_2008:r2',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      { type: 'element', name: 'distance', attributes: { value: '1' } },
      {
        type: 'element',
        name: 'tcpsequence',
        attributes: {
          index: '258',
          difficulty: 'Good luck!',
          values: 'F48985B3,D41AA9D5,3E11AE,A855A5EE,102D963D,D3E8AA50',
        },
      },
      {
        type: 'element',
        name: 'ipidsequence',
        attributes: {
          class: 'Incremental',
          values: '16AC,16AD,16AE,16AF,16B0,16B1',
        },
      },
      {
        type: 'element',
        name: 'tcptssequence',
        attributes: { class: 'none returned (unsupported)' },
      },
      {
        type: 'element',
        name: 'times',
        attributes: { srtt: '2099', rttvar: '1213', to: '100000' },
      },
    ],
  },
  {
    type: 'element',
    name: 'host',
    attributes: { starttime: '1614700878', endtime: '1614700903' },
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.49', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '98:90:96:A6:FA:5D',
          addrtype: 'mac',
          vendor: 'Dell',
        },
      },
      {
        type: 'element',
        name: 'hostnames',
        elements: [
          {
            type: 'element',
            name: 'hostname',
            attributes: { name: 'pc206381.med.cornell.edu', type: 'PTR' },
          },
        ],
      },
      {
        type: 'element',
        name: 'ports',
        elements: [
          {
            type: 'element',
            name: 'extraports',
            attributes: { state: 'filtered', count: '96' },
            elements: [
              {
                type: 'element',
                name: 'extrareasons',
                attributes: { reason: 'no-responses', count: '96' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '135' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'msrpc',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '139' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'netbios-ssn',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '445' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'microsoft-ds',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '3389' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'ms-wbt-server',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'os',
        elements: [
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'open', proto: 'tcp', portid: '135' },
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows XP SP3',
              accuracy: '89',
              line: '84874',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: 'XP',
                  accuracy: '89',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_xp::sp3',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows XP SP2',
              accuracy: '87',
              line: '81598',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: 'XP',
                  accuracy: '87',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_xp::sp2',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows 7',
              accuracy: '85',
              line: '76408',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: '7',
                  accuracy: '85',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:microsoft:windows_7' },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name:
                'Microsoft Windows Server 2008 SP1 or Windows Server 2008 R2',
              accuracy: '85',
              line: '75300',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: '2008',
                  accuracy: '85',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_server_2008::sp1',
                      },
                    ],
                  },
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_server_2008:r2',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      { type: 'element', name: 'distance', attributes: { value: '1' } },
      {
        type: 'element',
        name: 'tcpsequence',
        attributes: {
          index: '260',
          difficulty: 'Good luck!',
          values: 'AC4561E9,8A66F839,4C7586E9,196F2FB8,ED2897A5,68F87FF7',
        },
      },
      {
        type: 'element',
        name: 'ipidsequence',
        attributes: {
          class: 'Incremental',
          values: '3C2F,3C30,3C31,3C32,3C33,3C34',
        },
      },
      {
        type: 'element',
        name: 'tcptssequence',
        attributes: { class: 'none returned (unsupported)' },
      },
      {
        type: 'element',
        name: 'times',
        attributes: { srtt: '1674', rttvar: '1285', to: '100000' },
      },
    ],
  },
  {
    type: 'element',
    name: 'host',
    attributes: { starttime: '1614700878', endtime: '1614700903' },
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.53', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: 'AC:16:2D:08:C5:AB',
          addrtype: 'mac',
          vendor: 'Hewlett Packard',
        },
      },
      {
        type: 'element',
        name: 'hostnames',
        elements: [
          {
            type: 'element',
            name: 'hostname',
            attributes: { name: 'pc140649.med.cornell.edu', type: 'PTR' },
          },
        ],
      },
      {
        type: 'element',
        name: 'ports',
        elements: [
          {
            type: 'element',
            name: 'extraports',
            attributes: { state: 'filtered', count: '95' },
            elements: [
              {
                type: 'element',
                name: 'extrareasons',
                attributes: { reason: 'no-responses', count: '95' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '80' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: { name: 'http', method: 'table', conf: '3' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '135' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'msrpc',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '139' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'netbios-ssn',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '445' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'microsoft-ds',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '3389' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'ms-wbt-server',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'os',
        elements: [
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'open', proto: 'tcp', portid: '80' },
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name:
                'Microsoft Windows Server 2008 SP1 or Windows Server 2008 R2',
              accuracy: '86',
              line: '75300',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: '2008',
                  accuracy: '86',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_server_2008::sp1',
                      },
                    ],
                  },
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_server_2008:r2',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows XP SP3',
              accuracy: '85',
              line: '84874',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: 'XP',
                  accuracy: '85',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_xp::sp3',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      { type: 'element', name: 'distance', attributes: { value: '1' } },
      {
        type: 'element',
        name: 'tcpsequence',
        attributes: {
          index: '254',
          difficulty: 'Good luck!',
          values: '40945130,39AC0354,67B50BD5,94D74CAB,D931E11F,AB333A6F',
        },
      },
      {
        type: 'element',
        name: 'ipidsequence',
        attributes: {
          class: 'Incremental',
          values: 'FCC,FCD,FCE,FCF,FD0,FD1',
        },
      },
      {
        type: 'element',
        name: 'tcptssequence',
        attributes: { class: 'none returned (unsupported)' },
      },
      {
        type: 'element',
        name: 'times',
        attributes: { srtt: '1777', rttvar: '1345', to: '100000' },
      },
    ],
  },
  {
    type: 'element',
    name: 'host',
    attributes: { starttime: '1614700878', endtime: '1614700903' },
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.57', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: 'B8:CA:3A:7D:59:40',
          addrtype: 'mac',
          vendor: 'Dell',
        },
      },
      {
        type: 'element',
        name: 'hostnames',
        elements: [
          {
            type: 'element',
            name: 'hostname',
            attributes: { name: 'pc153006.med.cornell.edu', type: 'PTR' },
          },
        ],
      },
      {
        type: 'element',
        name: 'ports',
        elements: [
          {
            type: 'element',
            name: 'extraports',
            attributes: { state: 'filtered', count: '99' },
            elements: [
              {
                type: 'element',
                name: 'extrareasons',
                attributes: { reason: 'no-responses', count: '99' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '3389' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'ms-wbt-server',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'os',
        elements: [
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'open', proto: 'tcp', portid: '3389' },
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'AVtech Room Alert 26W environmental monitor',
              accuracy: '87',
              line: '9134',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'specialized',
                  vendor: 'AVtech',
                  osfamily: 'embedded',
                  accuracy: '87',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows XP SP2',
              accuracy: '87',
              line: '82178',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: 'XP',
                  accuracy: '87',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_xp::sp2',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name:
                'Microsoft Windows Fundamentals for Legacy PCs (XP Embedded derivative)',
              accuracy: '85',
              line: '80405',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: 'XP',
                  accuracy: '85',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:microsoft:windows_xp' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      { type: 'element', name: 'distance', attributes: { value: '1' } },
      {
        type: 'element',
        name: 'tcpsequence',
        attributes: {
          index: '255',
          difficulty: 'Good luck!',
          values: '316930F5,4D2B62A5,24A552BC,FF9B4994,A80C9388,71C6AC9F',
        },
      },
      {
        type: 'element',
        name: 'ipidsequence',
        attributes: {
          class: 'Incremental',
          values: '7587,7588,758A,758B,758D,758E',
        },
      },
      {
        type: 'element',
        name: 'tcptssequence',
        attributes: { class: 'none returned (unsupported)' },
      },
      {
        type: 'element',
        name: 'times',
        attributes: { srtt: '1311', rttvar: '738', to: '100000' },
      },
    ],
  },
  {
    type: 'element',
    name: 'host',
    attributes: { starttime: '1614700878', endtime: '1614700903' },
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.68', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '48:0F:CF:BB:C3:61',
          addrtype: 'mac',
          vendor: 'Hewlett Packard',
        },
      },
      {
        type: 'element',
        name: 'hostnames',
        elements: [
          {
            type: 'element',
            name: 'hostname',
            attributes: { name: 'pc184901.med.cornell.edu', type: 'PTR' },
          },
        ],
      },
      {
        type: 'element',
        name: 'ports',
        elements: [
          {
            type: 'element',
            name: 'extraports',
            attributes: { state: 'filtered', count: '95' },
            elements: [
              {
                type: 'element',
                name: 'extrareasons',
                attributes: { reason: 'no-responses', count: '95' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '80' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: { name: 'http', method: 'table', conf: '3' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '135' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'msrpc',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '139' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'netbios-ssn',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '445' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'microsoft-ds',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '3389' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'ms-wbt-server',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'os',
        elements: [
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'open', proto: 'tcp', portid: '80' },
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows XP SP3',
              accuracy: '89',
              line: '84874',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: 'XP',
                  accuracy: '89',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_xp::sp3',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows XP SP2',
              accuracy: '87',
              line: '81598',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: 'XP',
                  accuracy: '87',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_xp::sp2',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows 7',
              accuracy: '85',
              line: '76408',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: '7',
                  accuracy: '85',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:microsoft:windows_7' },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name:
                'Microsoft Windows Server 2008 SP1 or Windows Server 2008 R2',
              accuracy: '85',
              line: '75300',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: '2008',
                  accuracy: '85',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_server_2008::sp1',
                      },
                    ],
                  },
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_server_2008:r2',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      { type: 'element', name: 'distance', attributes: { value: '1' } },
      {
        type: 'element',
        name: 'tcpsequence',
        attributes: {
          index: '260',
          difficulty: 'Good luck!',
          values: 'BAF027C2,D5FB26E6,6326A1D3,96C33B45,E27244D3,BCE0CF3A',
        },
      },
      {
        type: 'element',
        name: 'ipidsequence',
        attributes: {
          class: 'Incremental',
          values: '826A,826B,826C,826D,826E,826F',
        },
      },
      {
        type: 'element',
        name: 'tcptssequence',
        attributes: { class: 'none returned (unsupported)' },
      },
      {
        type: 'element',
        name: 'times',
        attributes: { srtt: '1687', rttvar: '1231', to: '100000' },
      },
    ],
  },
  {
    type: 'element',
    name: 'host',
    attributes: { starttime: '1614700878', endtime: '1614700903' },
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.72', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: 'B8:CA:3A:77:FD:A7',
          addrtype: 'mac',
          vendor: 'Dell',
        },
      },
      {
        type: 'element',
        name: 'hostnames',
        elements: [
          {
            type: 'element',
            name: 'hostname',
            attributes: { name: 'thorns.med.cornell.edu', type: 'PTR' },
          },
        ],
      },
      {
        type: 'element',
        name: 'ports',
        elements: [
          {
            type: 'element',
            name: 'extraports',
            attributes: { state: 'filtered', count: '95' },
            elements: [
              {
                type: 'element',
                name: 'extrareasons',
                attributes: { reason: 'no-responses', count: '95' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '80' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: { name: 'http', method: 'table', conf: '3' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '135' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'msrpc',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '139' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'netbios-ssn',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '445' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'microsoft-ds',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '3389' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'ms-wbt-server',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'os',
        elements: [
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'open', proto: 'tcp', portid: '80' },
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows XP SP3',
              accuracy: '89',
              line: '84874',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: 'XP',
                  accuracy: '89',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_xp::sp3',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name:
                'Microsoft Windows Server 2008 SP1 or Windows Server 2008 R2',
              accuracy: '86',
              line: '75300',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: '2008',
                  accuracy: '86',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_server_2008::sp1',
                      },
                    ],
                  },
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_server_2008:r2',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows XP SP2',
              accuracy: '85',
              line: '81598',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: 'XP',
                  accuracy: '85',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_xp::sp2',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows 7',
              accuracy: '85',
              line: '76408',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: '7',
                  accuracy: '85',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:microsoft:windows_7' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      { type: 'element', name: 'distance', attributes: { value: '1' } },
      {
        type: 'element',
        name: 'tcpsequence',
        attributes: {
          index: '259',
          difficulty: 'Good luck!',
          values: 'B4813FD3,865E3274,3D7F81F0,29DF8465,EB63E2B,A91559CC',
        },
      },
      {
        type: 'element',
        name: 'ipidsequence',
        attributes: {
          class: 'Incremental',
          values: '1D49,1D4A,1D4B,1D4D,1D4E,1D4F',
        },
      },
      {
        type: 'element',
        name: 'tcptssequence',
        attributes: { class: 'none returned (unsupported)' },
      },
      {
        type: 'element',
        name: 'times',
        attributes: { srtt: '1698', rttvar: '1232', to: '100000' },
      },
    ],
  },
  {
    type: 'element',
    name: 'host',
    attributes: { starttime: '1614700878', endtime: '1614700903' },
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.83', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: 'EC:B1:D7:53:0F:FC',
          addrtype: 'mac',
          vendor: 'Hewlett Packard',
        },
      },
      { type: 'element', name: 'hostnames' },
      {
        type: 'element',
        name: 'ports',
        elements: [
          {
            type: 'element',
            name: 'extraports',
            attributes: { state: 'filtered', count: '96' },
            elements: [
              {
                type: 'element',
                name: 'extrareasons',
                attributes: { reason: 'no-responses', count: '96' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '135' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'msrpc',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '139' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'netbios-ssn',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '445' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'microsoft-ds',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '3389' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'ms-wbt-server',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'os',
        elements: [
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'open', proto: 'tcp', portid: '135' },
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows XP SP3',
              accuracy: '89',
              line: '84874',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: 'XP',
                  accuracy: '89',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_xp::sp3',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows XP SP2',
              accuracy: '87',
              line: '81598',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: 'XP',
                  accuracy: '87',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_xp::sp2',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows 7',
              accuracy: '85',
              line: '76408',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: '7',
                  accuracy: '85',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:microsoft:windows_7' },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name:
                'Microsoft Windows Server 2008 SP1 or Windows Server 2008 R2',
              accuracy: '85',
              line: '75300',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: '2008',
                  accuracy: '85',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_server_2008::sp1',
                      },
                    ],
                  },
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_server_2008:r2',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      { type: 'element', name: 'distance', attributes: { value: '1' } },
      {
        type: 'element',
        name: 'tcpsequence',
        attributes: {
          index: '260',
          difficulty: 'Good luck!',
          values: 'ED4EAAD0,A127F669,2FD954A,564B2BB1,FA94AE69,FF7C1460',
        },
      },
      {
        type: 'element',
        name: 'ipidsequence',
        attributes: {
          class: 'Incremental',
          values: '9E72,9E73,9E74,9E75,9E77,9E78',
        },
      },
      {
        type: 'element',
        name: 'tcptssequence',
        attributes: { class: 'none returned (unsupported)' },
      },
      {
        type: 'element',
        name: 'times',
        attributes: { srtt: '1490', rttvar: '1219', to: '100000' },
      },
    ],
  },
  {
    type: 'element',
    name: 'host',
    attributes: { starttime: '1614700878', endtime: '1614700903' },
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.87', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '18:03:73:C8:C0:A3',
          addrtype: 'mac',
          vendor: 'Dell',
        },
      },
      {
        type: 'element',
        name: 'hostnames',
        elements: [
          {
            type: 'element',
            name: 'hostname',
            attributes: { name: 'jpc144646.med.cornell.edu', type: 'PTR' },
          },
        ],
      },
      {
        type: 'element',
        name: 'ports',
        elements: [
          {
            type: 'element',
            name: 'extraports',
            attributes: { state: 'filtered', count: '98' },
            elements: [
              {
                type: 'element',
                name: 'extrareasons',
                attributes: { reason: 'no-responses', count: '98' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '135' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'msrpc',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '445' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'microsoft-ds',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'os',
        elements: [
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'open', proto: 'tcp', portid: '135' },
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows XP SP3',
              accuracy: '92',
              line: '84874',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: 'XP',
                  accuracy: '92',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_xp::sp3',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'AVtech Room Alert 26W environmental monitor',
              accuracy: '87',
              line: '9134',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'specialized',
                  vendor: 'AVtech',
                  osfamily: 'embedded',
                  accuracy: '87',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows XP SP2',
              accuracy: '87',
              line: '81598',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: 'XP',
                  accuracy: '87',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_xp::sp2',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'FreeBSD 6.2-RELEASE',
              accuracy: '86',
              line: '27738',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'FreeBSD',
                  osfamily: 'FreeBSD',
                  osgen: '6.X',
                  accuracy: '86',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:freebsd:freebsd:6.2' },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'FreeBSD 10.3-STABLE',
              accuracy: '85',
              line: '26098',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'FreeBSD',
                  osfamily: 'FreeBSD',
                  osgen: '10.X',
                  accuracy: '85',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:freebsd:freebsd:10.3' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      { type: 'element', name: 'distance', attributes: { value: '1' } },
      {
        type: 'element',
        name: 'tcpsequence',
        attributes: {
          index: '262',
          difficulty: 'Good luck!',
          values: '65782DBC,D9FF2DF4,51A4765A,14694050,86C98954,7352AC48',
        },
      },
      {
        type: 'element',
        name: 'ipidsequence',
        attributes: {
          class: 'Incremental',
          values: '91AB,91AC,91AD,91AE,91B0,91B2',
        },
      },
      {
        type: 'element',
        name: 'tcptssequence',
        attributes: { class: 'none returned (unsupported)' },
      },
      {
        type: 'element',
        name: 'times',
        attributes: { srtt: '1166', rttvar: '564', to: '100000' },
      },
    ],
  },
  {
    type: 'element',
    name: 'host',
    attributes: { starttime: '1614700878', endtime: '1614700898' },
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.108', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '38:EA:A7:6B:4A:36',
          addrtype: 'mac',
          vendor: 'Hewlett Packard',
        },
      },
      {
        type: 'element',
        name: 'hostnames',
        elements: [
          {
            type: 'element',
            name: 'hostname',
            attributes: { name: 'pc150537.med.cornell.edu', type: 'PTR' },
          },
        ],
      },
      {
        type: 'element',
        name: 'ports',
        elements: [
          {
            type: 'element',
            name: 'extraports',
            attributes: { state: 'closed', count: '93' },
            elements: [
              {
                type: 'element',
                name: 'extrareasons',
                attributes: { reason: 'resets', count: '93' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '21' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '64',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: { name: 'ftp', method: 'table', conf: '3' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '23' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '64',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'telnet',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '80' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '64',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: { name: 'http', method: 'table', conf: '3' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '443' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '64',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'https',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '515' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '64',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'printer',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '631' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '64',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: { name: 'ipp', method: 'table', conf: '3' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '9100' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '64',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'jetdirect',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'os',
        elements: [
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'open', proto: 'tcp', portid: '21' },
          },
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'closed', proto: 'tcp', portid: '7' },
          },
          {
            type: 'element',
            name: 'portused',
            attributes: {
              state: 'closed',
              proto: 'udp',
              portid: '36900',
            },
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'HP LaserJet 600 M601, 600 M602, 500 M551, or M830 printer',
              accuracy: '100',
              line: '33836',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'printer',
                  vendor: 'HP',
                  osfamily: 'embedded',
                  accuracy: '100',
                },
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'uptime',
        attributes: {
          seconds: '1027313',
          lastboot: 'Thu Feb 18 13:39:58 2021',
        },
      },
      { type: 'element', name: 'distance', attributes: { value: '1' } },
      {
        type: 'element',
        name: 'tcpsequence',
        attributes: {
          index: '260',
          difficulty: 'Good luck!',
          values: 'DB1500E5,F51A5461,167018E1,72A51865,6F6BA4FA,79F0E778',
        },
      },
      {
        type: 'element',
        name: 'ipidsequence',
        attributes: {
          class: 'Incremental',
          values: 'F878,F879,F87A,F87B,F87C,F87D',
        },
      },
      {
        type: 'element',
        name: 'tcptssequence',
        attributes: {
          class: '1000HZ',
          values: '3D3B5391,3D3B53F6,3D3B545C,3D3B54C0,3D3B5525,3D3B558A',
        },
      },
      {
        type: 'element',
        name: 'times',
        attributes: { srtt: '1699', rttvar: '1094', to: '100000' },
      },
    ],
  },
  {
    type: 'element',
    name: 'host',
    attributes: { starttime: '1614700878', endtime: '1614700903' },
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.125', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '50:65:F3:1D:23:E8',
          addrtype: 'mac',
          vendor: 'Hewlett Packard',
        },
      },
      { type: 'element', name: 'hostnames' },
      {
        type: 'element',
        name: 'ports',
        elements: [
          {
            type: 'element',
            name: 'extraports',
            attributes: { state: 'filtered', count: '96' },
            elements: [
              {
                type: 'element',
                name: 'extrareasons',
                attributes: { reason: 'no-responses', count: '96' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '135' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'msrpc',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '139' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'netbios-ssn',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '445' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'microsoft-ds',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '3389' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'ms-wbt-server',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'os',
        elements: [
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'open', proto: 'tcp', portid: '135' },
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows XP SP3',
              accuracy: '89',
              line: '84874',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: 'XP',
                  accuracy: '89',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_xp::sp3',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows XP SP2',
              accuracy: '87',
              line: '81598',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: 'XP',
                  accuracy: '87',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_xp::sp2',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows 7',
              accuracy: '85',
              line: '76408',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: '7',
                  accuracy: '85',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:microsoft:windows_7' },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name:
                'Microsoft Windows Server 2008 SP1 or Windows Server 2008 R2',
              accuracy: '85',
              line: '75300',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: '2008',
                  accuracy: '85',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_server_2008::sp1',
                      },
                    ],
                  },
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_server_2008:r2',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      { type: 'element', name: 'distance', attributes: { value: '1' } },
      {
        type: 'element',
        name: 'tcpsequence',
        attributes: {
          index: '261',
          difficulty: 'Good luck!',
          values: '801E4526,866B3BA6,DDFE9667,78C74559,B4C7802D,D8DE7D25',
        },
      },
      {
        type: 'element',
        name: 'ipidsequence',
        attributes: {
          class: 'Incremental',
          values: '688A,688B,688C,688D,688E,6890',
        },
      },
      {
        type: 'element',
        name: 'tcptssequence',
        attributes: { class: 'none returned (unsupported)' },
      },
      {
        type: 'element',
        name: 'times',
        attributes: { srtt: '2184', rttvar: '1292', to: '100000' },
      },
    ],
  },
  {
    type: 'element',
    name: 'host',
    attributes: { starttime: '1614700878', endtime: '1614700903' },
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.126', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '6C:3B:E5:2B:CD:0C',
          addrtype: 'mac',
          vendor: 'Hewlett Packard',
        },
      },
      {
        type: 'element',
        name: 'hostnames',
        elements: [
          {
            type: 'element',
            name: 'hostname',
            attributes: { name: 'pc151394.med.cornell.edu', type: 'PTR' },
          },
        ],
      },
      {
        type: 'element',
        name: 'ports',
        elements: [
          {
            type: 'element',
            name: 'extraports',
            attributes: { state: 'filtered', count: '96' },
            elements: [
              {
                type: 'element',
                name: 'extrareasons',
                attributes: { reason: 'no-responses', count: '96' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '135' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'msrpc',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '139' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'netbios-ssn',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '445' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'microsoft-ds',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '3389' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'ms-wbt-server',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'os',
        elements: [
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'open', proto: 'tcp', portid: '135' },
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows XP SP3',
              accuracy: '87',
              line: '84874',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: 'XP',
                  accuracy: '87',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_xp::sp3',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name:
                'Microsoft Windows Server 2008 SP1 or Windows Server 2008 R2',
              accuracy: '86',
              line: '75300',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: '2008',
                  accuracy: '86',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_server_2008::sp1',
                      },
                    ],
                  },
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_server_2008:r2',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows XP SP2',
              accuracy: '85',
              line: '81598',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: 'XP',
                  accuracy: '85',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_xp::sp2',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      { type: 'element', name: 'distance', attributes: { value: '1' } },
      {
        type: 'element',
        name: 'tcpsequence',
        attributes: {
          index: '260',
          difficulty: 'Good luck!',
          values: '988B2FBA,B31A48D1,7C2BFA32,96D64384,FEC1C09B,4702CD0',
        },
      },
      {
        type: 'element',
        name: 'ipidsequence',
        attributes: {
          class: 'Incremental',
          values: '5E79,5E7A,5E7B,5E7C,5E7D,5E7F',
        },
      },
      {
        type: 'element',
        name: 'tcptssequence',
        attributes: { class: 'none returned (unsupported)' },
      },
      {
        type: 'element',
        name: 'times',
        attributes: { srtt: '2521', rttvar: '1351', to: '100000' },
      },
    ],
  },
  {
    type: 'element',
    name: 'host',
    attributes: { starttime: '1614700878', endtime: '1614700903' },
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.131', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '6C:2B:59:DE:AC:74',
          addrtype: 'mac',
          vendor: 'Dell',
        },
      },
      { type: 'element', name: 'hostnames' },
      {
        type: 'element',
        name: 'ports',
        elements: [
          {
            type: 'element',
            name: 'extraports',
            attributes: { state: 'filtered', count: '94' },
            elements: [
              {
                type: 'element',
                name: 'extrareasons',
                attributes: { reason: 'no-responses', count: '94' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '80' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: { name: 'http', method: 'table', conf: '3' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '135' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'msrpc',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '139' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'netbios-ssn',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '445' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'microsoft-ds',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '2000' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'cisco-sccp',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '3389' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'ms-wbt-server',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'os',
        elements: [
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'open', proto: 'tcp', portid: '80' },
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows XP SP3',
              accuracy: '89',
              line: '84874',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: 'XP',
                  accuracy: '89',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_xp::sp3',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows XP SP2',
              accuracy: '87',
              line: '81598',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: 'XP',
                  accuracy: '87',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_xp::sp2',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows 7',
              accuracy: '85',
              line: '76408',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: '7',
                  accuracy: '85',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:microsoft:windows_7' },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name:
                'Microsoft Windows Server 2008 SP1 or Windows Server 2008 R2',
              accuracy: '85',
              line: '75300',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: '2008',
                  accuracy: '85',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_server_2008::sp1',
                      },
                    ],
                  },
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_server_2008:r2',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      { type: 'element', name: 'distance', attributes: { value: '1' } },
      {
        type: 'element',
        name: 'tcpsequence',
        attributes: {
          index: '260',
          difficulty: 'Good luck!',
          values: 'E5773D3C,9596BF13,BFA860E9,51B4F4E5,B109D4B2,C8819FCE',
        },
      },
      {
        type: 'element',
        name: 'ipidsequence',
        attributes: {
          class: 'Incremental',
          values: 'D7C6,D7C7,D7C8,D7C9,D7CA,D7CB',
        },
      },
      {
        type: 'element',
        name: 'tcptssequence',
        attributes: { class: 'none returned (unsupported)' },
      },
      {
        type: 'element',
        name: 'times',
        attributes: { srtt: '1925', rttvar: '1558', to: '100000' },
      },
    ],
  },
  {
    type: 'element',
    name: 'host',
    attributes: { starttime: '1614700878', endtime: '1614700898' },
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.142', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '90:B1:1C:6C:4A:F5',
          addrtype: 'mac',
          vendor: 'Dell',
        },
      },
      {
        type: 'element',
        name: 'hostnames',
        elements: [
          {
            type: 'element',
            name: 'hostname',
            attributes: { name: 'carlos.med.cornell.edu', type: 'PTR' },
          },
        ],
      },
      {
        type: 'element',
        name: 'ports',
        elements: [
          {
            type: 'element',
            name: 'extraports',
            attributes: { state: 'filtered', count: '99' },
            elements: [
              {
                type: 'element',
                name: 'extrareasons',
                attributes: { reason: 'no-responses', count: '78' },
              },
              {
                type: 'element',
                name: 'extrareasons',
                attributes: { reason: 'host-prohibiteds', count: '21' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '22' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '64',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: { name: 'ssh', method: 'table', conf: '3' },
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'os',
        elements: [
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'open', proto: 'tcp', portid: '22' },
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Linux 4.15 - 5.6',
              accuracy: '100',
              line: '67241',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Linux',
                  osfamily: 'Linux',
                  osgen: '4.X',
                  accuracy: '100',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:linux:linux_kernel:4' },
                    ],
                  },
                ],
              },
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Linux',
                  osfamily: 'Linux',
                  osgen: '5.X',
                  accuracy: '100',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:linux:linux_kernel:5' },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Linux 5.0 - 5.4',
              accuracy: '100',
              line: '68106',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Linux',
                  osfamily: 'Linux',
                  osgen: '5.X',
                  accuracy: '100',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:linux:linux_kernel:5' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'uptime',
        attributes: {
          seconds: '4117626',
          lastboot: 'Wed Jan 13 19:14:45 2021',
        },
      },
      { type: 'element', name: 'distance', attributes: { value: '1' } },
      {
        type: 'element',
        name: 'tcpsequence',
        attributes: {
          index: '261',
          difficulty: 'Good luck!',
          values: '4DD5C2D2,D555C4D2,4036B19,FCCD6A63,2F8D9628,F3092C8B',
        },
      },
      {
        type: 'element',
        name: 'ipidsequence',
        attributes: { class: 'All zeros', values: '0,0,0,0,0,0' },
      },
      {
        type: 'element',
        name: 'tcptssequence',
        attributes: {
          class: '1000HZ',
          values: 'F56DC5BD,F56DC622,F56DC687,F56DC6EC,F56DC751,F56DC7B6',
        },
      },
      {
        type: 'element',
        name: 'times',
        attributes: { srtt: '1239', rttvar: '1407', to: '100000' },
      },
    ],
  },
  {
    type: 'element',
    name: 'host',
    attributes: { starttime: '1614700878', endtime: '1614700903' },
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.146', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '40:A8:F0:4D:D4:7D',
          addrtype: 'mac',
          vendor: 'Hewlett Packard',
        },
      },
      {
        type: 'element',
        name: 'hostnames',
        elements: [
          {
            type: 'element',
            name: 'hostname',
            attributes: { name: 'pc160883.med.cornell.edu', type: 'PTR' },
          },
        ],
      },
      {
        type: 'element',
        name: 'ports',
        elements: [
          {
            type: 'element',
            name: 'extraports',
            attributes: { state: 'filtered', count: '95' },
            elements: [
              {
                type: 'element',
                name: 'extrareasons',
                attributes: { reason: 'no-responses', count: '95' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '135' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'msrpc',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '139' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'netbios-ssn',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '445' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'microsoft-ds',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '3389' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'ms-wbt-server',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '5357' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'wsdapi',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'os',
        elements: [
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'open', proto: 'tcp', portid: '135' },
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows XP SP3',
              accuracy: '89',
              line: '84874',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: 'XP',
                  accuracy: '89',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_xp::sp3',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows XP SP2',
              accuracy: '87',
              line: '81598',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: 'XP',
                  accuracy: '87',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_xp::sp2',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows 7',
              accuracy: '85',
              line: '76408',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: '7',
                  accuracy: '85',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:microsoft:windows_7' },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name:
                'Microsoft Windows Server 2008 SP1 or Windows Server 2008 R2',
              accuracy: '85',
              line: '75300',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: '2008',
                  accuracy: '85',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_server_2008::sp1',
                      },
                    ],
                  },
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_server_2008:r2',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      { type: 'element', name: 'distance', attributes: { value: '1' } },
      {
        type: 'element',
        name: 'tcpsequence',
        attributes: {
          index: '259',
          difficulty: 'Good luck!',
          values: '98E8B4B4,DE4FD465,4EC18684,358540EE,E56111E1,B65F74EC',
        },
      },
      {
        type: 'element',
        name: 'ipidsequence',
        attributes: {
          class: 'Incremental',
          values: '6DD5,6DD6,6DD7,6DD9,6DDA,6DDB',
        },
      },
      {
        type: 'element',
        name: 'tcptssequence',
        attributes: { class: 'none returned (unsupported)' },
      },
      {
        type: 'element',
        name: 'times',
        attributes: { srtt: '2080', rttvar: '1399', to: '100000' },
      },
    ],
  },
  {
    type: 'element',
    name: 'host',
    attributes: { starttime: '1614700878', endtime: '1614700903' },
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.151', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: 'EC:B1:D7:5C:F1:C1',
          addrtype: 'mac',
          vendor: 'Hewlett Packard',
        },
      },
      {
        type: 'element',
        name: 'hostnames',
        elements: [
          {
            type: 'element',
            name: 'hostname',
            attributes: { name: 'pc177088.med.cornell.edu', type: 'PTR' },
          },
        ],
      },
      {
        type: 'element',
        name: 'ports',
        elements: [
          {
            type: 'element',
            name: 'extraports',
            attributes: { state: 'filtered', count: '95' },
            elements: [
              {
                type: 'element',
                name: 'extrareasons',
                attributes: { reason: 'no-responses', count: '95' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '80' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: { name: 'http', method: 'table', conf: '3' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '135' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'msrpc',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '139' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'netbios-ssn',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '445' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'microsoft-ds',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '3389' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'ms-wbt-server',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'os',
        elements: [
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'open', proto: 'tcp', portid: '80' },
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows XP SP3',
              accuracy: '89',
              line: '84874',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: 'XP',
                  accuracy: '89',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_xp::sp3',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name:
                'Microsoft Windows Server 2008 SP1 or Windows Server 2008 R2',
              accuracy: '86',
              line: '75300',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: '2008',
                  accuracy: '86',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_server_2008::sp1',
                      },
                    ],
                  },
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_server_2008:r2',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows XP SP2',
              accuracy: '85',
              line: '81598',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: 'XP',
                  accuracy: '85',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_xp::sp2',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows 7',
              accuracy: '85',
              line: '76408',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: '7',
                  accuracy: '85',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:microsoft:windows_7' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      { type: 'element', name: 'distance', attributes: { value: '1' } },
      {
        type: 'element',
        name: 'tcpsequence',
        attributes: {
          index: '263',
          difficulty: 'Good luck!',
          values: '6E531A63,F906ACCA,F3038B89,DD6F59F1,94C468FE,AAB0C2DA',
        },
      },
      {
        type: 'element',
        name: 'ipidsequence',
        attributes: {
          class: 'Incremental',
          values: '9679,967A,967B,967C,967D,967E',
        },
      },
      {
        type: 'element',
        name: 'tcptssequence',
        attributes: { class: 'none returned (unsupported)' },
      },
      {
        type: 'element',
        name: 'times',
        attributes: { srtt: '1835', rttvar: '1536', to: '100000' },
      },
    ],
  },
  {
    type: 'element',
    name: 'host',
    attributes: { starttime: '1614700878', endtime: '1614700903' },
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.162', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '50:65:F3:1A:19:70',
          addrtype: 'mac',
          vendor: 'Hewlett Packard',
        },
      },
      {
        type: 'element',
        name: 'hostnames',
        elements: [
          {
            type: 'element',
            name: 'hostname',
            attributes: { name: 'roses.med.cornell.edu', type: 'PTR' },
          },
        ],
      },
      {
        type: 'element',
        name: 'ports',
        elements: [
          {
            type: 'element',
            name: 'extraports',
            attributes: { state: 'filtered', count: '95' },
            elements: [
              {
                type: 'element',
                name: 'extrareasons',
                attributes: { reason: 'no-responses', count: '95' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '80' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: { name: 'http', method: 'table', conf: '3' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '135' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'msrpc',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '139' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'netbios-ssn',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '445' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'microsoft-ds',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '3389' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'ms-wbt-server',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'os',
        elements: [
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'open', proto: 'tcp', portid: '80' },
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows XP SP3',
              accuracy: '89',
              line: '84874',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: 'XP',
                  accuracy: '89',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_xp::sp3',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows XP SP2',
              accuracy: '87',
              line: '81598',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: 'XP',
                  accuracy: '87',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_xp::sp2',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows 7',
              accuracy: '85',
              line: '76408',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: '7',
                  accuracy: '85',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:microsoft:windows_7' },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name:
                'Microsoft Windows Server 2008 SP1 or Windows Server 2008 R2',
              accuracy: '85',
              line: '75300',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: '2008',
                  accuracy: '85',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_server_2008::sp1',
                      },
                    ],
                  },
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_server_2008:r2',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      { type: 'element', name: 'distance', attributes: { value: '1' } },
      {
        type: 'element',
        name: 'tcpsequence',
        attributes: {
          index: '262',
          difficulty: 'Good luck!',
          values: '487FBF3C,BAFE265F,7F156DCA,10DB6077,8AEAFEF,4CA8849B',
        },
      },
      {
        type: 'element',
        name: 'ipidsequence',
        attributes: {
          class: 'Incremental',
          values: 'C956,C957,C959,C95A,C95B,C95C',
        },
      },
      {
        type: 'element',
        name: 'tcptssequence',
        attributes: { class: 'none returned (unsupported)' },
      },
      {
        type: 'element',
        name: 'times',
        attributes: { srtt: '1567', rttvar: '1154', to: '100000' },
      },
    ],
  },
  {
    type: 'element',
    name: 'host',
    attributes: { starttime: '1614700878', endtime: '1614700898' },
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.166', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '00:10:7F:A5:B4:55',
          addrtype: 'mac',
          vendor: 'Crestron Electronics',
        },
      },
      {
        type: 'element',
        name: 'hostnames',
        elements: [
          {
            type: 'element',
            name: 'hostname',
            attributes: { name: 'pc140133.med.cornell.edu', type: 'PTR' },
          },
        ],
      },
      {
        type: 'element',
        name: 'ports',
        elements: [
          {
            type: 'element',
            name: 'extraports',
            attributes: { state: 'closed', count: '97' },
            elements: [
              {
                type: 'element',
                name: 'extrareasons',
                attributes: { reason: 'resets', count: '97' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '80' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '64',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: { name: 'http', method: 'table', conf: '3' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '443' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '64',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'https',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '5060' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '64',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: { name: 'sip', method: 'table', conf: '3' },
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'os',
        elements: [
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'open', proto: 'tcp', portid: '80' },
          },
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'closed', proto: 'tcp', portid: '7' },
          },
          {
            type: 'element',
            name: 'portused',
            attributes: {
              state: 'closed',
              proto: 'udp',
              portid: '38897',
            },
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Linux 2.6.32 - 3.10',
              accuracy: '100',
              line: '56574',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Linux',
                  osfamily: 'Linux',
                  osgen: '2.6.X',
                  accuracy: '100',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:linux:linux_kernel:2.6',
                      },
                    ],
                  },
                ],
              },
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Linux',
                  osfamily: 'Linux',
                  osgen: '3.X',
                  accuracy: '100',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:linux:linux_kernel:3' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'uptime',
        attributes: {
          seconds: '11498550',
          lastboot: 'Tue Oct 20 09:59:21 2020',
        },
      },
      { type: 'element', name: 'distance', attributes: { value: '1' } },
      {
        type: 'element',
        name: 'tcpsequence',
        attributes: {
          index: '265',
          difficulty: 'Good luck!',
          values: 'F17E83E6,716A5A45,51F7B3B8,DECA7B43,7283403,E918651',
        },
      },
      {
        type: 'element',
        name: 'ipidsequence',
        attributes: { class: 'All zeros', values: '0,0,0,0,0,0' },
      },
      {
        type: 'element',
        name: 'tcptssequence',
        attributes: {
          class: '100HZ',
          values: '44895F7F,44895F8C,44895F99,44895FA6,44895FB3,44895FC0',
        },
      },
      {
        type: 'element',
        name: 'times',
        attributes: { srtt: '4137', rttvar: '5475', to: '100000' },
      },
    ],
  },
  {
    type: 'element',
    name: 'host',
    attributes: { starttime: '1614700878', endtime: '1614700903' },
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.184', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: 'A0:D3:C1:0F:DE:91',
          addrtype: 'mac',
          vendor: 'Hewlett Packard',
        },
      },
      {
        type: 'element',
        name: 'hostnames',
        elements: [
          {
            type: 'element',
            name: 'hostname',
            attributes: { name: 'pc165546.med.cornell.edu', type: 'PTR' },
          },
        ],
      },
      {
        type: 'element',
        name: 'ports',
        elements: [
          {
            type: 'element',
            name: 'extraports',
            attributes: { state: 'filtered', count: '95' },
            elements: [
              {
                type: 'element',
                name: 'extrareasons',
                attributes: { reason: 'no-responses', count: '95' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '80' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: { name: 'http', method: 'table', conf: '3' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '135' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'msrpc',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '139' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'netbios-ssn',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '445' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'microsoft-ds',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '3389' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'ms-wbt-server',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'os',
        elements: [
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'open', proto: 'tcp', portid: '80' },
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows XP SP3',
              accuracy: '87',
              line: '84874',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: 'XP',
                  accuracy: '87',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_xp::sp3',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name:
                'Microsoft Windows Server 2008 SP1 or Windows Server 2008 R2',
              accuracy: '86',
              line: '75300',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: '2008',
                  accuracy: '86',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_server_2008::sp1',
                      },
                    ],
                  },
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_server_2008:r2',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows XP SP2',
              accuracy: '85',
              line: '81598',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: 'XP',
                  accuracy: '85',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_xp::sp2',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      { type: 'element', name: 'distance', attributes: { value: '1' } },
      {
        type: 'element',
        name: 'tcpsequence',
        attributes: {
          index: '260',
          difficulty: 'Good luck!',
          values: '3A263AB7,2C1FCBAE,8EF9024C,BCEE4E9B,B1F2DC60,9A9EAD92',
        },
      },
      {
        type: 'element',
        name: 'ipidsequence',
        attributes: {
          class: 'Incremental',
          values: '1C7D,1C7E,1C7F,1C80,1C81,1C82',
        },
      },
      {
        type: 'element',
        name: 'tcptssequence',
        attributes: { class: 'none returned (unsupported)' },
      },
      {
        type: 'element',
        name: 'times',
        attributes: { srtt: '1469', rttvar: '1143', to: '100000' },
      },
    ],
  },
  {
    type: 'element',
    name: 'host',
    attributes: { starttime: '1614700878', endtime: '1614700898' },
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.191', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '00:90:8F:B0:9B:46',
          addrtype: 'mac',
          vendor: 'Audio Codes',
        },
      },
      { type: 'element', name: 'hostnames' },
      {
        type: 'element',
        name: 'ports',
        elements: [
          {
            type: 'element',
            name: 'extraports',
            attributes: { state: 'closed', count: '96' },
            elements: [
              {
                type: 'element',
                name: 'extrareasons',
                attributes: { reason: 'resets', count: '96' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '80' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '64',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: { name: 'http', method: 'table', conf: '3' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '443' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '64',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'https',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '5060' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '64',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: { name: 'sip', method: 'table', conf: '3' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '9999' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '64',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'abyss',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'os',
        elements: [
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'open', proto: 'tcp', portid: '80' },
          },
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'closed', proto: 'tcp', portid: '7' },
          },
          {
            type: 'element',
            name: 'portused',
            attributes: {
              state: 'closed',
              proto: 'udp',
              portid: '43682',
            },
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Linux 2.6.38 - 3.0',
              accuracy: '100',
              line: '58074',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Linux',
                  osfamily: 'Linux',
                  osgen: '2.6.X',
                  accuracy: '100',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:linux:linux_kernel:2.6',
                      },
                    ],
                  },
                ],
              },
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Linux',
                  osfamily: 'Linux',
                  osgen: '3.X',
                  accuracy: '100',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:linux:linux_kernel:3' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'uptime',
        attributes: {
          seconds: '41076387',
          lastboot: 'Wed Nov 13 00:55:24 2019',
        },
      },
      { type: 'element', name: 'distance', attributes: { value: '1' } },
      {
        type: 'element',
        name: 'tcpsequence',
        attributes: {
          index: '205',
          difficulty: 'Good luck!',
          values: '12356F5C,13048FB1,12616DC2,12F9B1F4,13078EFE,1340DAD5',
        },
      },
      {
        type: 'element',
        name: 'ipidsequence',
        attributes: { class: 'All zeros', values: '0,0,0,0,0,0' },
      },
      {
        type: 'element',
        name: 'tcptssequence',
        attributes: {
          class: '100HZ',
          values: 'F4D59216,F4D59220,F4D5922A,F4D59234,F4D5923E,F4D59249',
        },
      },
      {
        type: 'element',
        name: 'times',
        attributes: { srtt: '1676', rttvar: '677', to: '100000' },
      },
    ],
  },
  {
    type: 'element',
    name: 'host',
    attributes: { starttime: '1614700878', endtime: '1614700898' },
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.204', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '00:90:8F:9B:2F:6E',
          addrtype: 'mac',
          vendor: 'Audio Codes',
        },
      },
      { type: 'element', name: 'hostnames' },
      {
        type: 'element',
        name: 'ports',
        elements: [
          {
            type: 'element',
            name: 'extraports',
            attributes: { state: 'closed', count: '97' },
            elements: [
              {
                type: 'element',
                name: 'extrareasons',
                attributes: { reason: 'resets', count: '97' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '80' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '64',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: { name: 'http', method: 'table', conf: '3' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '443' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '64',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'https',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '5060' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '64',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: { name: 'sip', method: 'table', conf: '3' },
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'os',
        elements: [
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'open', proto: 'tcp', portid: '80' },
          },
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'closed', proto: 'tcp', portid: '7' },
          },
          {
            type: 'element',
            name: 'portused',
            attributes: {
              state: 'closed',
              proto: 'udp',
              portid: '42828',
            },
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Linux 2.6.38 - 3.0',
              accuracy: '100',
              line: '58074',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Linux',
                  osfamily: 'Linux',
                  osgen: '2.6.X',
                  accuracy: '100',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:linux:linux_kernel:2.6',
                      },
                    ],
                  },
                ],
              },
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Linux',
                  osfamily: 'Linux',
                  osgen: '3.X',
                  accuracy: '100',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:linux:linux_kernel:3' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'uptime',
        attributes: {
          seconds: '8061694',
          lastboot: 'Sun Nov 29 03:40:17 2020',
        },
      },
      { type: 'element', name: 'distance', attributes: { value: '1' } },
      {
        type: 'element',
        name: 'tcpsequence',
        attributes: {
          index: '200',
          difficulty: 'Good luck!',
          values: '73F37DE0,73D458E0,74338892,73AAEC4B,73BD2FD3,74203219',
        },
      },
      {
        type: 'element',
        name: 'ipidsequence',
        attributes: { class: 'All zeros', values: '0,0,0,0,0,0' },
      },
      {
        type: 'element',
        name: 'tcptssequence',
        attributes: {
          class: 'other',
          values: '7820DDD5,7820DDEE,7820DE07,7820DE21,7820DE3A,7820DE53',
        },
      },
      {
        type: 'element',
        name: 'times',
        attributes: { srtt: '1368', rttvar: '945', to: '100000' },
      },
    ],
  },
  {
    type: 'element',
    name: 'host',
    attributes: { starttime: '1614700878', endtime: '1614700898' },
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.215', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '00:90:8F:48:1A:91',
          addrtype: 'mac',
          vendor: 'Audio Codes',
        },
      },
      { type: 'element', name: 'hostnames' },
      {
        type: 'element',
        name: 'ports',
        elements: [
          {
            type: 'element',
            name: 'extraports',
            attributes: { state: 'closed', count: '97' },
            elements: [
              {
                type: 'element',
                name: 'extrareasons',
                attributes: { reason: 'resets', count: '97' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '80' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '64',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: { name: 'http', method: 'table', conf: '3' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '443' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '64',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'https',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '5060' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '64',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: { name: 'sip', method: 'table', conf: '3' },
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'os',
        elements: [
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'open', proto: 'tcp', portid: '80' },
          },
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'closed', proto: 'tcp', portid: '7' },
          },
          {
            type: 'element',
            name: 'portused',
            attributes: {
              state: 'closed',
              proto: 'udp',
              portid: '35790',
            },
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Linux 2.6.10 - 2.6.13 (embedded)',
              accuracy: '100',
              line: '47640',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Linux',
                  osfamily: 'Linux',
                  osgen: '2.6.X',
                  accuracy: '100',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:linux:linux_kernel:2.6',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'uptime',
        attributes: {
          seconds: '42419567',
          lastboot: 'Mon Oct 28 12:49:04 2019',
        },
      },
      { type: 'element', name: 'distance', attributes: { value: '1' } },
      {
        type: 'element',
        name: 'tcpsequence',
        attributes: {
          index: '206',
          difficulty: 'Good luck!',
          values: '30B78E9E,3092C1BD,30988678,314F2754,3091131C,30779C9E',
        },
      },
      {
        type: 'element',
        name: 'ipidsequence',
        attributes: { class: 'All zeros', values: '0,0,0,0,0,0' },
      },
      {
        type: 'element',
        name: 'tcptssequence',
        attributes: {
          class: '100HZ',
          values: 'FCD719A9,FCD719B3,FCD719BD,FCD719C7,FCD719D1,FCD719DB',
        },
      },
      {
        type: 'element',
        name: 'times',
        attributes: { srtt: '5956', rttvar: '7742', to: '100000' },
      },
    ],
  },
  {
    type: 'element',
    name: 'host',
    attributes: { starttime: '1614700878', endtime: '1614700903' },
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.224', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '50:9A:4C:3D:F9:4D',
          addrtype: 'mac',
          vendor: 'Dell',
        },
      },
      {
        type: 'element',
        name: 'hostnames',
        elements: [
          {
            type: 'element',
            name: 'hostname',
            attributes: { name: 'pc200144.med.cornell.edu', type: 'PTR' },
          },
        ],
      },
      {
        type: 'element',
        name: 'ports',
        elements: [
          {
            type: 'element',
            name: 'extraports',
            attributes: { state: 'filtered', count: '95' },
            elements: [
              {
                type: 'element',
                name: 'extrareasons',
                attributes: { reason: 'no-responses', count: '95' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '80' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: { name: 'http', method: 'table', conf: '3' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '135' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'msrpc',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '139' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'netbios-ssn',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '445' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'microsoft-ds',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '3389' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'ms-wbt-server',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'os',
        elements: [
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'open', proto: 'tcp', portid: '80' },
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows XP SP3',
              accuracy: '89',
              line: '84874',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: 'XP',
                  accuracy: '89',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_xp::sp3',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows XP SP2',
              accuracy: '87',
              line: '81598',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: 'XP',
                  accuracy: '87',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_xp::sp2',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows 7',
              accuracy: '85',
              line: '76408',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: '7',
                  accuracy: '85',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:microsoft:windows_7' },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name:
                'Microsoft Windows Server 2008 SP1 or Windows Server 2008 R2',
              accuracy: '85',
              line: '75300',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: '2008',
                  accuracy: '85',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_server_2008::sp1',
                      },
                    ],
                  },
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:microsoft:windows_server_2008:r2',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      { type: 'element', name: 'distance', attributes: { value: '1' } },
      {
        type: 'element',
        name: 'tcpsequence',
        attributes: {
          index: '261',
          difficulty: 'Good luck!',
          values: 'E8387546,7B88848,AF0FC845,CF113E96,B4FB0686,26AD693A',
        },
      },
      {
        type: 'element',
        name: 'ipidsequence',
        attributes: {
          class: 'Incremental',
          values: '7641,7642,7643,7644,7645,7646',
        },
      },
      {
        type: 'element',
        name: 'tcptssequence',
        attributes: { class: 'none returned (unsupported)' },
      },
      {
        type: 'element',
        name: 'times',
        attributes: { srtt: '1443', rttvar: '1097', to: '100000' },
      },
    ],
  },
  {
    type: 'element',
    name: 'host',
    attributes: { starttime: '1614700878', endtime: '1614700898' },
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.225', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '68:64:4B:39:32:63',
          addrtype: 'mac',
          vendor: 'Apple',
        },
      },
      { type: 'element', name: 'hostnames' },
      {
        type: 'element',
        name: 'ports',
        elements: [
          {
            type: 'element',
            name: 'extraports',
            attributes: { state: 'closed', count: '99' },
            elements: [
              {
                type: 'element',
                name: 'extrareasons',
                attributes: { reason: 'resets', count: '99' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '5000' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '64',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: { name: 'upnp', method: 'table', conf: '3' },
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'os',
        elements: [
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'open', proto: 'tcp', portid: '5000' },
          },
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'closed', proto: 'tcp', portid: '7' },
          },
          {
            type: 'element',
            name: 'portused',
            attributes: {
              state: 'closed',
              proto: 'udp',
              portid: '43958',
            },
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name:
                'Apple Mac OS X 10.7.0 (Lion) - 10.12 (Sierra) or iOS 4.1 - 9.3.3 (Darwin 10.0.0 - 16.4.0)',
              accuracy: '100',
              line: '6485',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Apple',
                  osfamily: 'Mac OS X',
                  osgen: '10.7.X',
                  accuracy: '100',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:apple:mac_os_x:10.7' },
                    ],
                  },
                ],
              },
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Apple',
                  osfamily: 'OS X',
                  osgen: '10.8.X',
                  accuracy: '100',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:apple:mac_os_x:10.8' },
                    ],
                  },
                ],
              },
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Apple',
                  osfamily: 'OS X',
                  osgen: '10.9.X',
                  accuracy: '100',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:apple:mac_os_x:10.9' },
                    ],
                  },
                ],
              },
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Apple',
                  osfamily: 'OS X',
                  osgen: '10.10.X',
                  accuracy: '100',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:apple:mac_os_x:10.10' },
                    ],
                  },
                ],
              },
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Apple',
                  osfamily: 'OS X',
                  osgen: '10.11.X',
                  accuracy: '100',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:apple:mac_os_x:10.11' },
                    ],
                  },
                ],
              },
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Apple',
                  osfamily: 'macOS',
                  osgen: '10.12.X',
                  accuracy: '100',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:apple:mac_os_x:10.12' },
                    ],
                  },
                ],
              },
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'media device',
                  vendor: 'Apple',
                  osfamily: 'iOS',
                  osgen: '4.X',
                  accuracy: '100',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:apple:iphone_os:4' },
                    ],
                  },
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/a:apple:apple_tv:4' },
                    ],
                  },
                ],
              },
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'phone',
                  vendor: 'Apple',
                  osfamily: 'iOS',
                  osgen: '4.X',
                  accuracy: '100',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:apple:iphone_os:4' },
                    ],
                  },
                ],
              },
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'phone',
                  vendor: 'Apple',
                  osfamily: 'iOS',
                  osgen: '5.X',
                  accuracy: '100',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:apple:iphone_os:5' },
                    ],
                  },
                ],
              },
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'phone',
                  vendor: 'Apple',
                  osfamily: 'iOS',
                  osgen: '6.X',
                  accuracy: '100',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:apple:iphone_os:6' },
                    ],
                  },
                ],
              },
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'phone',
                  vendor: 'Apple',
                  osfamily: 'iOS',
                  osgen: '7.X',
                  accuracy: '100',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:apple:iphone_os:7' },
                    ],
                  },
                ],
              },
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'phone',
                  vendor: 'Apple',
                  osfamily: 'iOS',
                  osgen: '8.X',
                  accuracy: '100',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:apple:iphone_os:8' },
                    ],
                  },
                ],
              },
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'phone',
                  vendor: 'Apple',
                  osfamily: 'iOS',
                  osgen: '9.X',
                  accuracy: '100',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:apple:iphone_os:9' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'uptime',
        attributes: {
          seconds: '2238881',
          lastboot: 'Thu Feb 04 13:07:10 2021',
        },
      },
      { type: 'element', name: 'distance', attributes: { value: '1' } },
      {
        type: 'element',
        name: 'tcpsequence',
        attributes: {
          index: '260',
          difficulty: 'Good luck!',
          values: 'F0856F38,C78EC728,630C8BE7,B972C1DF,39440157,6ED34598',
        },
      },
      {
        type: 'element',
        name: 'ipidsequence',
        attributes: {
          class: 'Randomized',
          values: '7D1B,CE73,F186,63AB,BF64,D2E1',
        },
      },
      {
        type: 'element',
        name: 'tcptssequence',
        attributes: {
          class: '1000HZ',
          values: '857262A8,8572630C,85726370,857263D4,85726439,8572649E',
        },
      },
      {
        type: 'element',
        name: 'times',
        attributes: { srtt: '6586', rttvar: '7603', to: '100000' },
      },
    ],
  },
  {
    type: 'element',
    name: 'host',
    attributes: { starttime: '1614700878', endtime: '1614700903' },
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.226', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '70:38:EE:CD:42:98',
          addrtype: 'mac',
          vendor: 'Avaya',
        },
      },
      {
        type: 'element',
        name: 'hostnames',
        elements: [
          {
            type: 'element',
            name: 'hostname',
            attributes: { name: 'pc204051.med.cornell.edu', type: 'PTR' },
          },
        ],
      },
      {
        type: 'element',
        name: 'ports',
        elements: [
          {
            type: 'element',
            name: 'extraports',
            attributes: { state: 'filtered', count: '100' },
            elements: [
              {
                type: 'element',
                name: 'extrareasons',
                attributes: { reason: 'no-responses', count: '100' },
              },
            ],
          },
        ],
      },
      { type: 'element', name: 'os' },
      { type: 'element', name: 'distance', attributes: { value: '1' } },
      {
        type: 'element',
        name: 'times',
        attributes: { srtt: '1328', rttvar: '2098', to: '100000' },
      },
    ],
  },
  {
    type: 'element',
    name: 'host',
    attributes: { starttime: '1614700878', endtime: '1614700898' },
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.227', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '68:64:4B:3C:82:67',
          addrtype: 'mac',
          vendor: 'Apple',
        },
      },
      { type: 'element', name: 'hostnames' },
      {
        type: 'element',
        name: 'ports',
        elements: [
          {
            type: 'element',
            name: 'extraports',
            attributes: { state: 'closed', count: '99' },
            elements: [
              {
                type: 'element',
                name: 'extrareasons',
                attributes: { reason: 'resets', count: '99' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '5000' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '64',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: { name: 'upnp', method: 'table', conf: '3' },
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'os',
        elements: [
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'open', proto: 'tcp', portid: '5000' },
          },
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'closed', proto: 'tcp', portid: '7' },
          },
          {
            type: 'element',
            name: 'portused',
            attributes: {
              state: 'closed',
              proto: 'udp',
              portid: '43529',
            },
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name:
                'Apple Mac OS X 10.7.0 (Lion) - 10.12 (Sierra) or iOS 4.1 - 9.3.3 (Darwin 10.0.0 - 16.4.0)',
              accuracy: '100',
              line: '6485',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Apple',
                  osfamily: 'Mac OS X',
                  osgen: '10.7.X',
                  accuracy: '100',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:apple:mac_os_x:10.7' },
                    ],
                  },
                ],
              },
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Apple',
                  osfamily: 'OS X',
                  osgen: '10.8.X',
                  accuracy: '100',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:apple:mac_os_x:10.8' },
                    ],
                  },
                ],
              },
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Apple',
                  osfamily: 'OS X',
                  osgen: '10.9.X',
                  accuracy: '100',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:apple:mac_os_x:10.9' },
                    ],
                  },
                ],
              },
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Apple',
                  osfamily: 'OS X',
                  osgen: '10.10.X',
                  accuracy: '100',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:apple:mac_os_x:10.10' },
                    ],
                  },
                ],
              },
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Apple',
                  osfamily: 'OS X',
                  osgen: '10.11.X',
                  accuracy: '100',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:apple:mac_os_x:10.11' },
                    ],
                  },
                ],
              },
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Apple',
                  osfamily: 'macOS',
                  osgen: '10.12.X',
                  accuracy: '100',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:apple:mac_os_x:10.12' },
                    ],
                  },
                ],
              },
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'media device',
                  vendor: 'Apple',
                  osfamily: 'iOS',
                  osgen: '4.X',
                  accuracy: '100',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:apple:iphone_os:4' },
                    ],
                  },
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/a:apple:apple_tv:4' },
                    ],
                  },
                ],
              },
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'phone',
                  vendor: 'Apple',
                  osfamily: 'iOS',
                  osgen: '4.X',
                  accuracy: '100',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:apple:iphone_os:4' },
                    ],
                  },
                ],
              },
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'phone',
                  vendor: 'Apple',
                  osfamily: 'iOS',
                  osgen: '5.X',
                  accuracy: '100',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:apple:iphone_os:5' },
                    ],
                  },
                ],
              },
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'phone',
                  vendor: 'Apple',
                  osfamily: 'iOS',
                  osgen: '6.X',
                  accuracy: '100',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:apple:iphone_os:6' },
                    ],
                  },
                ],
              },
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'phone',
                  vendor: 'Apple',
                  osfamily: 'iOS',
                  osgen: '7.X',
                  accuracy: '100',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:apple:iphone_os:7' },
                    ],
                  },
                ],
              },
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'phone',
                  vendor: 'Apple',
                  osfamily: 'iOS',
                  osgen: '8.X',
                  accuracy: '100',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:apple:iphone_os:8' },
                    ],
                  },
                ],
              },
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'phone',
                  vendor: 'Apple',
                  osfamily: 'iOS',
                  osgen: '9.X',
                  accuracy: '100',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:apple:iphone_os:9' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'uptime',
        attributes: {
          seconds: '2127852',
          lastboot: 'Fri Feb 05 19:57:39 2021',
        },
      },
      { type: 'element', name: 'distance', attributes: { value: '1' } },
      {
        type: 'element',
        name: 'tcpsequence',
        attributes: {
          index: '263',
          difficulty: 'Good luck!',
          values: '73B28951,9482513,BD928F0F,B923CA0C,4604A41B,BC015002',
        },
      },
      {
        type: 'element',
        name: 'ipidsequence',
        attributes: {
          class: 'Randomized',
          values: 'B20E,A62,D030,46B5,374C,5DBF',
        },
      },
      {
        type: 'element',
        name: 'tcptssequence',
        attributes: {
          class: '1000HZ',
          values: '7ED43A26,7ED43A89,7ED43AED,7ED43B51,7ED43BB6,7ED43C1B',
        },
      },
      {
        type: 'element',
        name: 'times',
        attributes: { srtt: '6494', rttvar: '7841', to: '100000' },
      },
    ],
  },
  {
    type: 'element',
    name: 'host',
    attributes: { starttime: '1614700878', endtime: '1614700898' },
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.228', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '00:E0:DB:46:D9:14',
          addrtype: 'mac',
          vendor: 'ViaVideo Communications',
        },
      },
      { type: 'element', name: 'hostnames' },
      {
        type: 'element',
        name: 'ports',
        elements: [
          {
            type: 'element',
            name: 'extraports',
            attributes: { state: 'closed', count: '97' },
            elements: [
              {
                type: 'element',
                name: 'extrareasons',
                attributes: { reason: 'resets', count: '97' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '22' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '64',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: { name: 'ssh', method: 'table', conf: '3' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '443' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '64',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'https',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '1720' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '64',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'h323q931',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'os',
        elements: [
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'open', proto: 'tcp', portid: '22' },
          },
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'closed', proto: 'tcp', portid: '7' },
          },
          {
            type: 'element',
            name: 'portused',
            attributes: {
              state: 'closed',
              proto: 'udp',
              portid: '30497',
            },
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Linux 2.6.36 - 2.6.37',
              accuracy: '100',
              line: '57410',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Linux',
                  osfamily: 'Linux',
                  osgen: '2.6.X',
                  accuracy: '100',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:linux:linux_kernel:2.6',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'uptime',
        attributes: {
          seconds: '1571884',
          lastboot: 'Fri Feb 12 06:23:47 2021',
        },
      },
      { type: 'element', name: 'distance', attributes: { value: '1' } },
      {
        type: 'element',
        name: 'tcpsequence',
        attributes: {
          index: '201',
          difficulty: 'Good luck!',
          values: '1CF5C963,1C7092D0,1D032D84,1D4365BD,1C9400D4,1D69B27A',
        },
      },
      {
        type: 'element',
        name: 'ipidsequence',
        attributes: { class: 'All zeros', values: '0,0,0,0,0,0' },
      },
      {
        type: 'element',
        name: 'tcptssequence',
        attributes: {
          class: '1000HZ',
          values: '5DB0D499,5DB0D4FD,5DB0D562,5DB0D5C6,5DB0D62B,5DB0D690',
        },
      },
      {
        type: 'element',
        name: 'times',
        attributes: { srtt: '5718', rttvar: '7810', to: '100000' },
      },
    ],
  },
  {
    type: 'element',
    name: 'host',
    attributes: { starttime: '1614700878', endtime: '1614700903' },
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.229', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '00:90:5E:17:55:10',
          addrtype: 'mac',
          vendor: 'Rauland-borg',
        },
      },
      { type: 'element', name: 'hostnames' },
      {
        type: 'element',
        name: 'ports',
        elements: [
          {
            type: 'element',
            name: 'extraports',
            attributes: { state: 'closed', count: '100' },
            elements: [
              {
                type: 'element',
                name: 'extrareasons',
                attributes: { reason: 'resets', count: '100' },
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'os',
        elements: [
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'closed', proto: 'tcp', portid: '7' },
          },
          {
            type: 'element',
            name: 'portused',
            attributes: {
              state: 'closed',
              proto: 'udp',
              portid: '38443',
            },
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Brother MFC-7820N printer',
              accuracy: '94',
              line: '11727',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'printer',
                  vendor: 'Brother',
                  osfamily: 'embedded',
                  accuracy: '94',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/h:brother:mfc-7820n' },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Elk ELK-M1EXP Ethernet-to-serial bridge',
              accuracy: '94',
              line: '23940',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'bridge',
                  vendor: 'Elk',
                  osfamily: 'embedded',
                  accuracy: '94',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [{ type: 'text', text: 'cpe:/h:elk:elk-m1exp' }],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name:
                'Novatel MiFi 2200 3G WAP or iDirect Evolution X1 satellite router',
              accuracy: '94',
              line: '40298',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'WAP',
                  vendor: 'iDirect',
                  osfamily: 'embedded',
                  accuracy: '94',
                },
              },
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'WAP',
                  vendor: 'Novatel',
                  osfamily: 'embedded',
                  accuracy: '94',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/h:novatel:mifi_2200_3g' },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Brother HL-2070N printer',
              accuracy: '94',
              line: '11107',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'printer',
                  vendor: 'Brother',
                  osfamily: 'embedded',
                  accuracy: '94',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/h:brother:hl-2070n' },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Brother HL-5070N printer',
              accuracy: '94',
              line: '11323',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'printer',
                  vendor: 'Brother',
                  osfamily: 'embedded',
                  accuracy: '94',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/h:brother:hl-5070n' },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'AMX AVB-RX-DXLINK-HDMI audio/video receiver',
              accuracy: '90',
              line: '2843',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'media device',
                  vendor: 'AMX',
                  osfamily: 'embedded',
                  accuracy: '90',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'GoPro HERO3 camera',
              accuracy: '90',
              line: '31908',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'webcam',
                  vendor: 'GoPro',
                  osfamily: 'embedded',
                  accuracy: '90',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [{ type: 'text', text: 'cpe:/h:gopro:hero3' }],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'GoPro Wifi-Bacpac camera',
              accuracy: '90',
              line: '31926',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'webcam',
                  vendor: 'GoPro',
                  osfamily: 'embedded',
                  accuracy: '90',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/h:gopro:wifi-bacpac' },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'MQX RTOS',
              accuracy: '90',
              line: '94108',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'specialized',
                  vendor: 'Precise Software Technologies',
                  osfamily: 'MQX',
                  accuracy: '90',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      {
                        type: 'text',
                        text: 'cpe:/o:precisesoftwaretechnologies:mqx',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Reliable Controls MAC ProWebCom building control server',
              accuracy: '90',
              line: '94783',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'specialized',
                  vendor: 'Reliable Controls',
                  osfamily: 'embedded',
                  accuracy: '90',
                },
              },
            ],
          },
        ],
      },
      { type: 'element', name: 'distance', attributes: { value: '1' } },
      {
        type: 'element',
        name: 'times',
        attributes: { srtt: '1669', rttvar: '1357', to: '100000' },
      },
    ],
  },
  {
    type: 'element',
    name: 'host',
    attributes: { starttime: '1614700878', endtime: '1614700898' },
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.240', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '00:1F:28:20:EE:00',
          addrtype: 'mac',
          vendor: 'HPN Supply Chain',
        },
      },
      {
        type: 'element',
        name: 'hostnames',
        elements: [
          {
            type: 'element',
            name: 'hostname',
            attributes: { name: 'mac176480.med.cornell.edu', type: 'PTR' },
          },
        ],
      },
      {
        type: 'element',
        name: 'ports',
        elements: [
          {
            type: 'element',
            name: 'extraports',
            attributes: { state: 'closed', count: '98' },
            elements: [
              {
                type: 'element',
                name: 'extrareasons',
                attributes: { reason: 'resets', count: '98' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '22' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '64',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: { name: 'ssh', method: 'table', conf: '3' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '80' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '64',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: { name: 'http', method: 'table', conf: '3' },
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'os',
        elements: [
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'open', proto: 'tcp', portid: '22' },
          },
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'closed', proto: 'tcp', portid: '7' },
          },
          {
            type: 'element',
            name: 'portused',
            attributes: {
              state: 'closed',
              proto: 'udp',
              portid: '37025',
            },
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'HP 2530, 2920, or 5406zl switch',
              accuracy: '100',
              line: '35150',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'switch',
                  vendor: 'HP',
                  osfamily: 'embedded',
                  accuracy: '100',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [{ type: 'text', text: 'cpe:/h:hp:switch_2530' }],
                  },
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [{ type: 'text', text: 'cpe:/h:hp:switch_2920' }],
                  },
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/h:hp:switch_5406zl' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'uptime',
        attributes: {
          seconds: '1572139',
          lastboot: 'Fri Feb 12 06:19:32 2021',
        },
      },
      { type: 'element', name: 'distance', attributes: { value: '1' } },
      {
        type: 'element',
        name: 'tcpsequence',
        attributes: {
          index: '132',
          difficulty: 'Good luck!',
          values: '64A3F12A,64A462F2,64A5145B,64A5EF5E,64A6932A,64A73884',
        },
      },
      {
        type: 'element',
        name: 'ipidsequence',
        attributes: {
          class: 'Incremental',
          values: '1839,183A,183B,183C,183E,1840',
        },
      },
      {
        type: 'element',
        name: 'tcptssequence',
        attributes: {
          class: '1000HZ',
          values: '5DB4B5BA,5DB4B61E,5DB4B682,5DB4B6E6,5DB4B74A,5DB4B7AE',
        },
      },
      {
        type: 'element',
        name: 'times',
        attributes: { srtt: '5808', rttvar: '7841', to: '100000' },
      },
    ],
  },
  {
    type: 'element',
    name: 'host',
    attributes: { starttime: '1614700878', endtime: '1614700903' },
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.250', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '00:07:B4:00:01:01',
          addrtype: 'mac',
          vendor: 'Cisco Systems',
        },
      },
      { type: 'element', name: 'hostnames' },
      {
        type: 'element',
        name: 'ports',
        elements: [
          {
            type: 'element',
            name: 'extraports',
            attributes: { state: 'closed', count: '100' },
            elements: [
              {
                type: 'element',
                name: 'extrareasons',
                attributes: { reason: 'resets', count: '100' },
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'os',
        elements: [
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'closed', proto: 'tcp', portid: '7' },
          },
        ],
      },
      { type: 'element', name: 'distance', attributes: { value: '1' } },
      {
        type: 'element',
        name: 'times',
        attributes: { srtt: '6476', rttvar: '4048', to: '100000' },
      },
    ],
  },
  {
    type: 'element',
    name: 'host',
    attributes: { starttime: '1614700878', endtime: '1614700903' },
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.251', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '00:15:C6:B4:93:3F',
          addrtype: 'mac',
          vendor: 'Cisco Systems',
        },
      },
      { type: 'element', name: 'hostnames' },
      {
        type: 'element',
        name: 'ports',
        elements: [
          {
            type: 'element',
            name: 'extraports',
            attributes: { state: 'closed', count: '100' },
            elements: [
              {
                type: 'element',
                name: 'extrareasons',
                attributes: { reason: 'resets', count: '100' },
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'os',
        elements: [
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'closed', proto: 'tcp', portid: '7' },
          },
        ],
      },
      { type: 'element', name: 'distance', attributes: { value: '1' } },
      {
        type: 'element',
        name: 'times',
        attributes: { srtt: '8176', rttvar: '7015', to: '100000' },
      },
    ],
  },
  {
    type: 'element',
    name: 'host',
    attributes: { starttime: '1614700878', endtime: '1614700903' },
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'arp-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.252', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'address',
        attributes: {
          addr: '00:15:C6:B4:93:7F',
          addrtype: 'mac',
          vendor: 'Cisco Systems',
        },
      },
      { type: 'element', name: 'hostnames' },
      {
        type: 'element',
        name: 'ports',
        elements: [
          {
            type: 'element',
            name: 'extraports',
            attributes: { state: 'closed', count: '100' },
            elements: [
              {
                type: 'element',
                name: 'extrareasons',
                attributes: { reason: 'resets', count: '100' },
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'os',
        elements: [
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'closed', proto: 'tcp', portid: '7' },
          },
        ],
      },
      { type: 'element', name: 'distance', attributes: { value: '1' } },
      {
        type: 'element',
        name: 'times',
        attributes: { srtt: '3152', rttvar: '2869', to: '100000' },
      },
    ],
  },
  {
    type: 'element',
    name: 'host',
    attributes: { starttime: '1614700911', endtime: '1614700912' },
    elements: [
      {
        type: 'element',
        name: 'status',
        attributes: {
          state: 'up',
          reason: 'localhost-response',
          reason_ttl: '0',
        },
      },
      {
        type: 'element',
        name: 'address',
        attributes: { addr: '140.251.72.25', addrtype: 'ipv4' },
      },
      {
        type: 'element',
        name: 'hostnames',
        elements: [
          {
            type: 'element',
            name: 'hostname',
            attributes: {
              name: 'selfregister.med.cornell.edu',
              type: 'PTR',
            },
          },
        ],
      },
      {
        type: 'element',
        name: 'ports',
        elements: [
          {
            type: 'element',
            name: 'extraports',
            attributes: { state: 'closed', count: '95' },
            elements: [
              {
                type: 'element',
                name: 'extrareasons',
                attributes: { reason: 'resets', count: '95' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '135' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'msrpc',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '139' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'netbios-ssn',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '445' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'microsoft-ds',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '3000' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: { name: 'ppp', method: 'table', conf: '3' },
              },
            ],
          },
          {
            type: 'element',
            name: 'port',
            attributes: { protocol: 'tcp', portid: '3389' },
            elements: [
              {
                type: 'element',
                name: 'state',
                attributes: {
                  state: 'open',
                  reason: 'syn-ack',
                  reason_ttl: '128',
                },
              },
              {
                type: 'element',
                name: 'service',
                attributes: {
                  name: 'ms-wbt-server',
                  method: 'table',
                  conf: '3',
                },
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        name: 'os',
        elements: [
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'open', proto: 'tcp', portid: '135' },
          },
          {
            type: 'element',
            name: 'portused',
            attributes: { state: 'closed', proto: 'tcp', portid: '7' },
          },
          {
            type: 'element',
            name: 'portused',
            attributes: {
              state: 'closed',
              proto: 'udp',
              portid: '40113',
            },
          },
          {
            type: 'element',
            name: 'osmatch',
            attributes: {
              name: 'Microsoft Windows 10 1809 - 1909',
              accuracy: '100',
              line: '69956',
            },
            elements: [
              {
                type: 'element',
                name: 'osclass',
                attributes: {
                  type: 'general purpose',
                  vendor: 'Microsoft',
                  osfamily: 'Windows',
                  osgen: '10',
                  accuracy: '100',
                },
                elements: [
                  {
                    type: 'element',
                    name: 'cpe',
                    elements: [
                      { type: 'text', text: 'cpe:/o:microsoft:windows_10' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      { type: 'element', name: 'distance', attributes: { value: '0' } },
      {
        type: 'element',
        name: 'tcpsequence',
        attributes: {
          index: '261',
          difficulty: 'Good luck!',
          values: '5DC85776,B55223DA,89A9F01F,AD2D04D0,C60B6C58,3EFCCAB3',
        },
      },
      {
        type: 'element',
        name: 'ipidsequence',
        attributes: {
          class: 'Incremental',
          values: '9632,9634,9636,9638,963A,963C',
        },
      },
      {
        type: 'element',
        name: 'tcptssequence',
        attributes: { class: 'none returned (unsupported)' },
      },
      {
        type: 'element',
        name: 'times',
        attributes: { srtt: '14', rttvar: '30', to: '100000' },
      },
    ],
  },
  {
    type: 'element',
    name: 'runstats',
    elements: [
      {
        type: 'element',
        name: 'finished',
        attributes: {
          time: '1614700912',
          timestr: 'Tue Mar 02 11:01:52 2021',
          summary:
            'Nmap done at Tue Mar 02 11:01:52 2021; 256 IP addresses (43 hosts up) scanned in 34.16 seconds',
          elapsed: '34.16',
          exit: 'success',
        },
      },
      {
        type: 'element',
        name: 'hosts',
        attributes: { up: '43', down: '213', total: '256' },
      },
    ],
  },
];

const output = rest.filter((r) => {
  return r.name == 'hosthint';
});

console.log(rest.length);
console.log(output.length);
