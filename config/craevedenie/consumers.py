import json
from channels.generic.websocket import AsyncWebsocketConsumer
from channels.db import database_sync_to_async

class ChatConsumer(AsyncWebsocketConsumer):
    active_clients = {}  # Словарь для отслеживания активных клиентов

    async def connect(self):
        await self.accept()
        self.active_clients[self.channel_name] = self
        await self.send_connected_users_count_to_all()

    async def disconnect(self, close_code):
        del self.active_clients[self.channel_name]
        await self.send_connected_users_count_to_all()

    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json

        # Отправить сообщение каждому клиенту
        for channel_name, client in self.active_clients.items():
            await client.send_message(message)

    async def send_message(self, message):
        await self.send(text_data=json.dumps({'message': message}))

    async def send_connected_users_count_to_all(self):
        for client in self.active_clients.values():
            await client.send_connected_users_count()

    async def send_connected_users_count(self):
        await self.send(text_data=json.dumps({'event': 'user_count', 'count': len(self.active_clients)}))

