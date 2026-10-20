const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const portraitImage = asset('/images/my%20face.jpg')

export const projectImages = {
  'factory-data': asset('/images/factory-floor.jpg'),
  'erp-sap-dashboards': asset('/images/dashboard.jpg'),
  'revpi-flowfuse': asset('/images/electronics.jpg'),
  'pv-vodarna': asset('/images/solar.jpg'),
  'podoli-vibration': asset('/images/machinery.jpg'),
  'prague-traffic': asset('/images/traffic.jpg'),
  'insights-hub-migration': asset('/images/servers.jpg'),
  'bus-telemetry': asset('/images/bus.jpg'),
  'nodered-capabilities': asset('/images/code.jpg'),
}
