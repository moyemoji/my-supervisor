# my-supervisor
导师网前端页面

## 主页

* 页面说明

  本页面显示了各个团队的研究动态和各个团队的简略信息。其中，研究动态附带了一张图片和简要的文字说明，团队简略信息包含了团队头像、名字以及评价星级。本页面提供了登录和注册框，可以点击整个页面的右上角登录框调出。本页面还提供了状态发布功能，点击团队动态右上角编辑按钮即可编辑发布，但是只有在登录且为某个团队的内部成员的情况下才能发布消息。

* 页面输入

  初始页面需要显示6条（或者少于）团队动态，以及院系所有的团队信息。团队动态包含了`动态配图、文本说明、团队名称、发布时间`等内容，后台将团队动态按照发布时间的远近排序以后发至前端。团队信息包含了`团队头像、团队名称、团队星级`等内容，后台将所有团队按照星级高低排序后发至前端。

* 页面输出

  点击右上角登录按钮并键入登录信息后可登录（也可注册），该操作提供了`账户、密码`两项数据。点击动态编辑按钮后键入弹出相应弹框，编辑完成后发布，提供了`动态配图、文本说明`两项数据，`团队名称、发布时间`由系统记录并提供。点击更多动态按钮可以加载更多的最近研究动态，点击以后多加载最近三条动态。发布动态和加载更多动态均使用AJAX技术实现。

* 页面跳转

  点击团队信息中的团队头像可以跳转至相应的团队主页。点击左上角logo回到主页。登录后可点击右上角个人中心按钮跳转至个人中心。

## 团队主页

* 页面说明

  本页面提供了团队详细信息并展示了用户对该团队的评价情况。团队详细信息由团队成员编辑上传，用户评价可以是登录用户填写，也可是非登录用户填写，同时用户也可以选择匿名发布。本页面内也可注册和登录。

* 页面输入

  初始页面显示团队详细信息，同时显示前5条评论。团队详细信息包括`头像、姓名、性别、职称、出生日期、办公地点、邮箱、研究方向、项目经历`等项。评论包含了`用户头像（或无）、用户ID（或无）、评价内容、评价星级、评论的点赞数和鄙视数目`，后台按照点赞数目排序后发至前端。

* 页面输出

  登录选项同主页相同。点击团队信息右上角按钮打开编辑框，填写相应内容`头像、姓名、性别、职称、出生日期、办公地点、邮箱、研究方向、项目经历`后提交更新，填写的内容可以为空。点击加载更多评论按钮加载3条评论。编辑团队信息和加载评论使用AJAX实现。

* 页面跳转

  左上角logo回到主页，登录后可点击右上角个人中心按钮跳转至个人中心。

## 个人中心

* 页面说明

  本页面针对用户个人操作了提供了基本信息编辑、修改密码、授权管理等功能。

* 页面输入

  本页面仅仅针对已经登录的用户，未登录的用户不会跳转至此页面。初始页面显示出用户基本信息，包括`头像、ID、性别、团队、研究方向`等项。若用户为管理员，授权管理会显示相应的加入团队申请数量及对应的申请条目。

* 页面输出

  编辑基本信息提供`头像、性别、研究方向`等项的数据。修改密码提供了`原始密码、新密码`两项数据。授权管理对申请用户的权限进行了修改。

* 页面跳转

  左上角logo回到主页