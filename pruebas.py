import urllib.request
import concurrent.futures
import time

url = "http://172.206.240.231/"
total = 10000
workers = 100

def peticion(i):
    try:
        urllib.request.urlopen(url, timeout=10).read()
        return True
    except:
        return False

inicio = time.time()

with concurrent.futures.ThreadPoolExecutor(max_workers=workers) as executor:
    resultados = list(executor.map(peticion, range(total)))

tiempo = time.time() - inicio
exitosas = sum(resultados)
fallidas = total - exitosas

print("----- RESULTADOS -----")
print("Peticiones:", total)
print("Exitosas:", exitosas)
print("Fallidas:", fallidas)
print("Tiempo:", round(tiempo, 2), "segundos")
print("Peticiones/segundo:", round(total / tiempo, 2))