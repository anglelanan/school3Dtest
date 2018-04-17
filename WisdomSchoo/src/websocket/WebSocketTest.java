package websocket;


import java.io.IOException;
import java.util.*;
import java.util.concurrent.CopyOnWriteArraySet;

import javax.websocket.*;
import javax.websocket.server.ServerEndpoint;

/**
 * @ServerEndpoint 注解是一个类层次的注解，它的功能主要是将目前的类定义成一个websocket服务器端,
 * 注解的值将被用于监听用户连接的终端访问URL地址,客户端可以通过这个URL来连接到WebSocket服务器端
 */
@ServerEndpoint("/websocket")
public class WebSocketTest  {

public int num=-1;




	//静态变量，用来记录当前在线连接数。应该把它设计成线程安全的。
	private static int onlineCount = 0;

	//concurrent包的线程安全Set，用来存放每个客户端对应的MyWebSocket对象。若要实现服务端与单一客户端通信的话，可以使用Map来存放，其中Key可以为用户标识
	private static CopyOnWriteArraySet<WebSocketTest> webSocketSet = new CopyOnWriteArraySet<WebSocketTest>();

	//与某个客户端的连接会话，需要通过它来给客户端发送数据
	private Session session;

	/**
	 * 连接建立成功调用的方法
	 * @param session  可选的参数。session为与某个客户端的连接会话，需要通过它来给客户端发送数据
	 */
	@OnOpen
	public void onOpen(final Session session) throws IOException {
		Timer timer = new Timer();
		timer.schedule(new TimerTask() {
			public void run() {
				/*String [] b = { "120.0424296138,30.2329985080,10", "120.0424027917,30.2337122779,10", "120.0424188849,30.2343611551,10",
						"120.0423652408,30.2350517411,10","120.0423759696,30.2358025741,10","120.0414211032,30.2362892221,10","120.0407559154,30.2354317931,10",
						"120.0405413386,30.2347458445,10","120.0397719292,30.2338155004,10","120.0391550211,30.2332685867,10","120.0396646408,30.2319059241,10"};*/
				String [] b = { "120.0424296138,30.2329985080,10", "110.0424027917,-20.2337122779,10", "100.0424188849,10.2343611551,10",
						"90.0423652408,-27.2350517411,10","120.0423759696,20.2358025741,10","110.0414211032,-10.2362892221,10","100.0407559154,1.2354317931,10",
						"90.0405413386,-23.2347458445,10","80.0397719292,10.2338155004,10","70.0391550211,-1.2332685867,10","120.0396646408,20.2319059241,10"};
				num++;
					if (num==b.length){
						num=0;
					}
				String N = String.valueOf(b[num]);
				try {
					String string=N;
					session.getBasicRemote().sendText(string);
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}, 10, 3 * 1000);


		webSocketSet.add(this);     //加入set中
		addOnlineCount();           //在线数加1
		System.out.println("有新连接加入！当前在线人数为" + getOnlineCount());
	}




	/**
	 * 连接关闭调用的方法
	 */
	@OnClose
	public void onClose(){
		webSocketSet.remove(this);  //从set中删除
		subOnlineCount();           //在线数减1
		System.out.println("有一连接关闭！当前在线人数为" + getOnlineCount());
	}

	/**
	 * 收到客户端消息后调用的方法
	 * @param message 客户端发送过来的消息
	 * @param session 可选的参数
	 */
	@OnMessage
	public void onMessage(String message, Session session) throws IOException {
		System.out.println("来自客户端的消息:" + message);
		//群发消息
		for(WebSocketTest item: webSocketSet){
			try {
				item.sendMessage(message);
			} catch (IOException e) {
				e.printStackTrace();
				continue;
			}
		}
	}

	/**
	 * 发生错误时调用
	 * @param session
	 * @param error
	 */
	@OnError
	public void onError(Session session, Throwable error){
		System.out.println("发生错误");
		error.printStackTrace();
	}






	/**
	 * 这个方法与上面几个方法不一样。没有用注解，是根据自己需要添加的方法。
	 * @param message
	 * @throws IOException
	 */
	public void sendMessage(String message) throws IOException{
		this.session.getBasicRemote().sendText(message);
		//this.session.getAsyncRemote().sendText(message);
	}

	public static synchronized int getOnlineCount() {
		return onlineCount;
	}

	public static synchronized void addOnlineCount() {
		WebSocketTest.onlineCount++;
	}

	public static synchronized void subOnlineCount() {
		WebSocketTest.onlineCount--;
	}
}
