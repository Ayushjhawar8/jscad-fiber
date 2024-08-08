import { GeodesicSphere } from "../lib"
import { JsCadFixture } from "../lib/components/jscad-fixture"

export default () => (
  <JsCadFixture wireframe>
    <GeodesicSphere
      radius={10}
      frequency={12}
      color="violet"
      center={[10, 5, 0]}
    />
  </JsCadFixture>
)
