if __name__ == '__main__':
    import socket
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.connect(('10.21.31.138', 887))
    import time
    time.sleep(2)
    sock.send('1')
    print sock.recv(1024)
    sock.close()