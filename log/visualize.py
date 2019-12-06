import numpy as np 
import pickle 

with open("log/train_log.pkl", "rb") as f:
    loss_log, acc_log = pickle.load(f)

loss_np = np.array(loss_log)
acc_np = np.array(acc_log)

import matplotlib.pyplot as plt 


fig = plt.figure()

ax1 = fig.add_subplot(111)
ax1.plot(loss_np)
ax1.set_ylabel('loss')
ax1.set_title("Training log")

ax2 = ax1.twinx()  # this is the important function
ax2.plot(acc_np, 'r')
ax2.set_ylabel('accurate rate on test set')
ax2.set_xlabel('Same X for both exp(-x) and ln(x)')

plt.show()