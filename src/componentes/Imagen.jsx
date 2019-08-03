import React from 'react';
import { Card, Col, Icon, Avatar } from 'antd';

const { Meta } = Card;

const Imagen = props => {
    const { previewURL, largeImageURL, likes, tags, views, user, userImageURL, type } = props.imagen;

    return (
        <Col span={8} xs={24} sm={24} md={8} lg={8}>
            <Card
                style={{ marginBottom: 20 }}
                cover={
                    <img
                        height="150"
                        alt={tags}
                        src={previewURL}
                    />
                }
                actions={[
                    <span><Icon type="like" /> {likes}</span>,
                    <span><Icon type="eye" /> {views}</span>,
                    <a href={largeImageURL} target="_blank" rel="noopener noreferrer"><Icon type="select" />Ver Imágen</a>
                ]}
            >
                <Meta
                    avatar={<Avatar title={user} src={userImageURL} alt={user} />}
                    title={type}
                />
            </Card>
        </Col>
    )
}

export default Imagen;