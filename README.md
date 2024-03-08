## 目标

- 提供后台 REST API 给前端购物车使用
- response 格式为 JSON

## REST API

| Method | Endpoint                            | Resources                               |
| ------ | ----------------------------------- | --------------------------------------- |
| GET    | http://localhost:8080/all           | 获取所有项目                            |
| GET    | http://localhost:8080/all/:id       | 获取对应 id 的项目                      |
| GET    | http://localhost:8080/:category/:id | 获取对应分类并且对应 id 的项目          |
| GET    | http://localhost:8080/food          | 获取所有分类为 food 的项目              |
| GET    | http://localhost:8080/drink/:id     | 获取所有分类为 drink 并且对应 id 的项目 |

## 评分准则

- MVC 设计
- 编码整洁
- 准时完成
- 使用 ES6
- 能够完成并达到题目要求
