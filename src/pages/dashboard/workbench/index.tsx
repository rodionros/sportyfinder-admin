import { Col, Row } from 'antd';

import BannerCard from './banner-card';

function Workbench() {
  return (
    <div className="p-2">
      <Row gutter={[16, 16]} justify="center">
        <Col span={24} lg={16}>
          <BannerCard />
        </Col>
      </Row>
    </div>
  );
}

export default Workbench;
