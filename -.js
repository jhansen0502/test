Last login: Wed Apr 19 14:37:48 on ttys001
nio-mbair-jhansen:~ jhansen$ cd nio/projects/azz
nio-mbair-jhansen:azz jhansen$ ls
README.md	blocks		envs		etc		nio.conf	prod.env	service_tests	tests
nio-mbair-jhansen:azz jhansen$ git status
test_dipcapture

Your branch is up-to-date with 'origin/nio/oracle/HUR-first-job'.
nothing to commit, working directory clean
nio-mbair-jhansen:azz jhansen$ git checkout nio/oracle/master
Switched to branch 'nio/oracle/master'
Your branch is up-to-date with 'origin/nio/oracle/master'.
nio-mbair-jhansen:azz jhansen$ git pull
remote: Counting objects: 149, done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 149 (delta 89), reused 89 (delta 89), pack-reused 57
Receiving objects: 100% (149/149), 22.91 KiB | 0 bytes/s, done.
Resolving deltas: 100% (109/109), completed with 55 local objects.
From https://github.com/nioinnovation/azz
   1085b61..2439c01  nio/oracle/master -> origin/nio/oracle/master
   e36d84c..3ffeec4  deployment/nio-build/master -> origin/deployment/nio-build/master
 * [new branch]      deployment/nioenvs/db-info -> origin/deployment/nioenvs/db-info
 * [new branch]      nio/kettle/loadcell-alerts -> origin/nio/kettle/loadcell-alerts
   f4ad2fc..dc2276a  nio/kettle/master -> origin/nio/kettle/master
   3a9a72a..81ae336  nio/kettle/weight-cap -> origin/nio/kettle/weight-cap
 * [new branch]      nio/supervisor/rtls-std -> origin/nio/supervisor/rtls-std
   0abfa08..a5b058a  nio/supervisor/secure-redshift -> origin/nio/supervisor/secure-redshift
 * [new tag]         201704191456-kettle -> 201704191456-kettle
 * [new tag]         201704181316-nio_dgs -> 201704181316-nio_dgs
Updating 1085b61..2439c01
Fast-forward
 envs/HUR.env                         |  2 +-
 etc/blocks/PathIsUpdateItemCodes.cfg | 12 ++++++++++++
 etc/blocks/SetCustomerShipToId.cfg   | 13 +++++++++++++
 etc/blocks/ValueIsShipToId.cfg       | 12 ++++++++++++
 etc/services/ItemCodesToRethink.cfg  | 46 +++++++++++++++++++++++++++++++++++++++++++++-
 tests/test_item_codes_to_rethink.py  | 67 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++-
 tests/topic_schema.json              |  2 +-
 7 files changed, 150 insertions(+), 4 deletions(-)
 create mode 100644 etc/blocks/PathIsUpdateItemCodes.cfg
 create mode 100644 etc/blocks/SetCustomerShipToId.cfg
 create mode 100644 etc/blocks/ValueIsShipToId.cfg
nio-mbair-jhansen:azz jhansen$ git checkout -b nio/oracle/HUR-1st-Job-again
Switched to a new branch 'nio/oracle/HUR-1st-Job-again'
nio-mbair-jhansen:azz jhansen$ git status
On branch nio/oracle/HUR-1st-Job-again
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   envs/HUR.env

no changes added to commit (use "git add" and/or "git commit -a")
nio-mbair-jhansen:azz jhansen$ git add .
nio-mbair-jhansen:azz jhansen$ git commmit -m "Hurst First Job AZZ-1080"
git: 'commmit' is not a git command. See 'git --help'.

Did you mean this?
	commit
nio-mbair-jhansen:azz jhansen$ git commit -m "Hurst First Job AZZ-1080"
[nio/oracle/HUR-1st-Job-again 65482b3] Hurst First Job AZZ-1080
 1 file changed, 1 insertion(+), 1 deletion(-)
nio-mbair-jhansen:azz jhansen$ git push -u origin nio/oracle/HUR-1st-Job-again
Counting objects: 4, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 359 bytes | 0 bytes/s, done.
Total 4 (delta 3), reused 0 (delta 0)
remote: Resolving deltas: 100% (3/3), completed with 3 local objects.
To https://github.com/nioinnovation/azz.git
 * [new branch]      nio/oracle/HUR-1st-Job-again -> nio/oracle/HUR-1st-Job-again
Branch nio/oracle/HUR-1st-Job-again set up to track remote branch nio/oracle/HUR-1st-Job-again from origin.
nio-mbair-jhansen:azz jhansen$ cd nio/projects
-bash: cd: nio/projects: No such file or directory
nio-mbair-jhansen:azz jhansen$ ls
README.md	blocks		envs		etc		nio.conf	prod.env	service_tests	tests
nio-mbair-jhansen:azz jhansen$ cd ..
nio-mbair-jhansen:projects jhansen$ ls
azz
nio-mbair-jhansen:projects jhansen$ cd ..
nio-mbair-jhansen:nio jhansen$ ls
nio-envs	projects
nio-mbair-jhansen:nio jhansen$ cd nio-envs
nio-mbair-jhansen:nio-envs jhansen$ ls
CRO Network and IO Assignments rev16.xlsx	__init__.py					tests
README.md					build_envs.py					~$CRO Network and IO Assignments rev16.xlsx
ZincLaserAngleCalculator rev2.xlsx		envs						~$ZincLaserAngleCalculator rev2.xlsx
nio-mbair-jhansen:nio-envs jhansen$ python3 build_envs.py
Building environment files for 4 plants...
CRO_SV built
CRO_SHK1 COM ports 1,4 mapped
CRO_SHK1 built
CRO_SHK2 COM ports 1 mapped
CRO_SHK2 built
CRO_SHC1 built
CRO_SHC2 built
CRO_SHC3 built
CRO_SHC4 built
CRO_SHC5 built
CRO_SHC6 built
CRO_SHC7 built
CRO_SHC8 built
CRO_SHC9 built
CRO_SHC10 built
CRO_SHC11 built
CRO_SHC12 built
CRO_SHC13 built
CRO_SHC14 built
CRO_SHC15 built
CRO_SHC16 built
CRO_SHC17 built
CRO_SHC18 built
CRO_SHC19 built
CRO_SHC20 built
CRO_SHC21 built
CRO_SHC22 built
CRO_SHC23 built
CRO_SHC24 built
CRO_SHC25 built
Traceback (most recent call last):
  File "/Library/Frameworks/Python.framework/Versions/3.4/lib/python3.4/site-packages/xlrd/book.py", line 439, in sheet_by_name
    sheetx = self._sheet_names.index(sheet_name)
ValueError: 'Network Assignments' is not in list

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "build_envs.py", line 488, in <module>
    main()
  File "build_envs.py", line 380, in main
    reader = read_xlsx(source, 'Network Assignments')
  File "build_envs.py", line 21, in read_xlsx
    open_sheet = source.sheet_by_name(sheet)
  File "/Library/Frameworks/Python.framework/Versions/3.4/lib/python3.4/site-packages/xlrd/book.py", line 441, in sheet_by_name
    raise XLRDError('No sheet named <%r>' % sheet_name)
xlrd.biffh.XLRDError: No sheet named <'Network Assignments'>
nio-mbair-jhansen:nio-envs jhansen$ python3 build_envs.py
Building environment files for 3 plants...
CRO_SV built
CRO_SHK1 COM ports 1,4 mapped
CRO_SHK1 built
CRO_SHK2 COM ports 1 mapped
CRO_SHK2 built
CRO_SHC1 built
CRO_SHC2 built
CRO_SHC3 built
CRO_SHC4 built
CRO_SHC5 built
CRO_SHC6 built
CRO_SHC7 built
CRO_SHC8 built
CRO_SHC9 built
CRO_SHC10 built
CRO_SHC11 built
CRO_SHC12 built
CRO_SHC13 built
CRO_SHC14 built
CRO_SHC15 built
CRO_SHC16 built
CRO_SHC17 built
CRO_SHC18 built
CRO_SHC19 built
CRO_SHC20 built
CRO_SHC21 built
CRO_SHC22 built
CRO_SHC23 built
CRO_SHC24 built
CRO_SHC25 built
Traceback (most recent call last):
  File "build_envs.py", line 488, in <module>
    main()
  File "build_envs.py", line 379, in main
    source = xlrd.open_workbook(filename=file)
  File "/Library/Frameworks/Python.framework/Versions/3.4/lib/python3.4/site-packages/xlrd/__init__.py", line 441, in open_workbook
    ragged_rows=ragged_rows,
  File "/Library/Frameworks/Python.framework/Versions/3.4/lib/python3.4/site-packages/xlrd/book.py", line 91, in open_workbook_xls
    biff_version = bk.getbof(XL_WORKBOOK_GLOBALS)
  File "/Library/Frameworks/Python.framework/Versions/3.4/lib/python3.4/site-packages/xlrd/book.py", line 1230, in getbof
    bof_error('Expected BOF record; found %r' % self.mem[savpos:savpos+8])
  File "/Library/Frameworks/Python.framework/Versions/3.4/lib/python3.4/site-packages/xlrd/book.py", line 1224, in bof_error
    raise XLRDError('Unsupported format, or corrupt file: ' + msg)
xlrd.biffh.XLRDError: Unsupported format, or corrupt file: Expected BOF record; found b'\x15Microso'
nio-mbair-jhansen:nio-envs jhansen$ cd ..
nio-mbair-jhansen:nio jhansen$ cd projects
nio-mbair-jhansen:projects jhansen$ cd azz
nio-mbair-jhansen:azz jhansen$ ls
README.md	blocks		envs		etc		nio.conf	prod.env	service_tests	tests
nio-mbair-jhansen:azz jhansen$ git branch
  master
* nio/oracle/HUR-1st-Job-again
  nio/oracle/HUR-first-job
  nio/oracle/master
nio-mbair-jhansen:azz jhansen$ git status
On branch nio/oracle/HUR-1st-Job-again
Your branch is up-to-date with 'origin/nio/oracle/HUR-1st-Job-again'.
nothing to commit, working directory clean
nio-mbair-jhansen:azz jhansen$ git checkout -b nio/kettle/April20
Switched to a new branch 'nio/kettle/April20'
nio-mbair-jhansen:azz jhansen$ git checkout nio/kettle/master
Branch nio/kettle/master set up to track remote branch nio/kettle/master from origin.
Switched to a new branch 'nio/kettle/master'
nio-mbair-jhansen:azz jhansen$ git pull
remote: Counting objects: 202, done.
remote: Compressing objects: 100% (202/202), done.
remote: Total 202 (delta 49), reused 0 (delta 0), pack-reused 0
Receiving objects: 100% (202/202), 6.29 MiB | 1.70 MiB/s, done.
Resolving deltas: 100% (49/49), done.
From https://github.com/nioinnovation/azz
   dc2276a..6e90b07  nio/kettle/master -> origin/nio/kettle/master
 * [new branch]      deployment/ansible/projectupdate -> origin/deployment/ansible/projectupdate
   3ffeec4..35cc34f  deployment/nio-build/master -> origin/deployment/nio-build/master
 + 721b8e1...caf5f81 nio/kettle/loadcell-alerts -> origin/nio/kettle/loadcell-alerts  (forced update)
 * [new branch]      nio/oracle/hoist-email-alerts -> origin/nio/oracle/hoist-email-alerts
   2439c01..36ca1c9  nio/oracle/master -> origin/nio/oracle/master
   37b221d..55f1255  nio/supervisor/master -> origin/nio/supervisor/master
 * [new tag]         201704191526-nio_dgs -> 201704191526-nio_dgs
 * [new tag]         201704191716-kettle -> 201704191716-kettle
Updating dc2276a..6e90b07
Fast-forward
 .gitmodules                           |   9 ++++++++
 blocks/buffer                         |   1 +
 blocks/nio_command                    |   1 +
 blocks/rethink_db                     |   1 +
 envs/CRO_SHK1.env                     |   6 +++++
 envs/CRO_SHK2.env                     |   6 +++++
 envs/HUR1_SHK.env                     |   6 +++++
 envs/HUR2_SHK.env                     |   6 +++++
 envs/KEN_SHK.env                      |   6 +++++
 etc/blocks/CloudDBInsert.cfg          |  27 ++++++++++++++++++++++
 etc/blocks/CombineDipHoists.cfg       |  15 +++++++++++++
 etc/blocks/CombineWeights.cfg         |  15 +++++++++++++
 etc/blocks/DipByCrane.cfg             |  17 ++++++++++++++
 etc/blocks/DipCaptureTriggers.cfg     |  18 +++++++++++++++
 etc/blocks/DipIDNotNone.cfg           |  12 ++++++++++
 etc/blocks/DipWeightData.cfg          |  23 +++++++++++++++++++
 etc/blocks/EmitBuffer.cfg             |  28 +++++++++++++++++++++++
 etc/blocks/FormatDipData.cfg          |  33 +++++++++++++++++++++++++++
 etc/blocks/MergeDipID.cfg             |  16 +++++++++++++
 etc/blocks/NewCommandQueueEntries.cfg |  21 +++++++++++++++++
 etc/blocks/SplitHoists.cfg            |   8 +++++++
 etc/blocks/StateNotNone.cfg           |  12 ++++++++++
 etc/blocks/SumDipWeights.cfg          |  21 +++++++++++++++++
 etc/services/DipCapture.cfg           | 167 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 tests/mock_rethink.py                 |  94 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 tests/test_dipcapture.py              | 190 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 tests/test_monitor_beckhoff_io.py     |   2 ++
 27 files changed, 761 insertions(+)
 create mode 160000 blocks/buffer
 create mode 160000 blocks/nio_command
 create mode 160000 blocks/rethink_db
 create mode 100644 etc/blocks/CloudDBInsert.cfg
 create mode 100644 etc/blocks/CombineDipHoists.cfg
 create mode 100644 etc/blocks/CombineWeights.cfg
 create mode 100644 etc/blocks/DipByCrane.cfg
 create mode 100644 etc/blocks/DipCaptureTriggers.cfg
 create mode 100644 etc/blocks/DipIDNotNone.cfg
 create mode 100644 etc/blocks/DipWeightData.cfg
 create mode 100644 etc/blocks/EmitBuffer.cfg
 create mode 100644 etc/blocks/FormatDipData.cfg
 create mode 100644 etc/blocks/MergeDipID.cfg
 create mode 100644 etc/blocks/NewCommandQueueEntries.cfg
 create mode 100644 etc/blocks/SplitHoists.cfg
 create mode 100644 etc/blocks/StateNotNone.cfg
 create mode 100644 etc/blocks/SumDipWeights.cfg
 create mode 100644 etc/services/DipCapture.cfg
 create mode 100644 tests/mock_rethink.py
 create mode 100644 tests/test_dipcapture.py
nio-mbair-jhansen:azz jhansen$ git checkout -b nio/kettle/April20envs
Switched to a new branch 'nio/kettle/April20envs'
nio-mbair-jhansen:azz jhansen$ git status
On branch nio/kettle/April20envs
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   envs/CRO_SHK1.env
	modified:   envs/CRO_SHK2.env

no changes added to commit (use "git add" and/or "git commit -a")
nio-mbair-jhansen:azz jhansen$ git diff envs/CRO_SHK1.env 
diff --git a/envs/CRO_SHK1.env b/envs/CRO_SHK1.env
index 2b93c02..1495b33 100644
--- a/envs/CRO_SHK1.env
+++ b/envs/CRO_SHK1.env
@@ -24,12 +24,6 @@ XSUB_PORT: 9001
 # beckhoff io host
 BECKHOFF_IO_HOST: 172.16.17.255
 
-# weight capture
-RETHINKDB_HOST: 10.103.6.80
-RETHINKDB_CLOUD_HOST: rtls.nioinstances.com
-RETHINKDB_PORT: 28015
-PLANT_NUMBER: 410
-
 # socketio
 LOCAL_SOCKETIO_HOST: 10.103.6.80
 LOCAL_SOCKETIO_PORT: 81
@@ -54,8 +48,8 @@ BECKHOFF_IO_HI: _|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|
 BECKHOFF_IO_HIHI: _|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|
 BECKHOFF_IO_LO: _|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|
 BECKHOFF_IO_LOLO: _|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|
-BECKHOFF_IO_MAX: _|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|120|120|120|20|120|120|120|60|60|60|31.904|60|60|60|60|60|60|60|60|60|60|60|60|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|
-BECKHOFF_IO_MIN: _|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|0|0|0|0|0|0|0|0|0|0|51.046|0|0|0|0|0|0|0|0|0|0|0|0|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|
+BECKHOFF_IO_MAX: _|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|120|120|120|20|120|120|120|60|60|60|-9.195|60|60|60|60|60|60|60|60|60|60|60|60|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|
+BECKHOFF_IO_MIN: _|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|0|0|0|0|0|0|0|0|0|0|9.739|0|0|0|0|0|0|0|0|0|0|0|0|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|
 BECKHOFF_IO_NAME: _|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|Motor L1|Motor L2|Motor L3|Pressure Differential|Motor L1|Motor L2|Motor L3|Motor L1|Motor L2|Motor L3|Level|Motor L1|Motor L2|Motor L3|Motor L1|Motor L2|Motor L3|Motor L1|Motor L2|Motor L3|Motor L1|Motor L2|Motor L3|_|_|_|_|_|_|_|_|_|Level Measurement On|_|_|_|_|_|_|_|Temperature|_|Temperature|_|Temperature|_|Temperature|_|Temperature|_|Temperature|_|Temperature|_|_|_|_|_|_|_|_|_|_|_|
 BECKHOFF_IO_TYPE: _|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|A|A|A|A|A|A|A|A|A|A|A|A|A|A|A|A|A|A|A|A|A|A|A|A|_|_|_|_|_|_|_|_|D|D|D|D|D|D|D|D|T|_|T|_|T|_|T|_|T|_|T|_|T|_|T|_|T|_|T|_|T|_|T|_|
 BECKHOFF_IO_UNITS: _|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|A|A|A|IN.WC|A|A|A|A|A|A|IN|A|A|A|A|A|A|A|A|A|A|A|A|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|F|_|F|_|F|_|F|_|F|_|F|_|F|_|F|_|F|_|F|_|F|_|F|_|
nio-mbair-jhansen:azz jhansen$ cd ..
nio-mbair-jhansen:projects jhansen$ cd //
nio-mbair-jhansen:// jhansen$ cd ..
nio-mbair-jhansen:// jhansen$ ls
Applications			User Information		cores				installer.failurerequests	sbin
Library				Users				dev				net				tmp
Network				Volumes				etc				opt				usr
System				bin				home				private				var
nio-mbair-jhansen:// jhansen$ cd users
nio-mbair-jhansen:users jhansen$ ls
Deleted Users	Guest		Shared		admin		jhansen
nio-mbair-jhansen:users jhansen$ cd jhansen
nio-mbair-jhansen:jhansen jhansen$ ls
Applications		Downloads		InVision		Music			audio.aiff		rethinkdb_data
Desktop			Dropbox			Library			Pictures		myproj			sketch password.txt
Documents		Google Drive		Movies			Public			nio
nio-mbair-jhansen:jhansen jhansen$ cd nio/projects
nio-mbair-jhansen:projects jhansen$ cd ../nio-envs/
nio-mbair-jhansen:nio-envs jhansen$ git status
On branch deployment/nioenvs/master
Your branch is up-to-date with 'origin/deployment/nioenvs/master'.
Untracked files:
  (use "git add <file>..." to include in what will be committed)

	CRO Network and IO Assignments rev16.xlsx
	~$CRO Network and IO Assignments rev16.xlsx
	~$ZincLaserAngleCalculator rev2.xlsx

nothing added to commit but untracked files present (use "git add" to track)
nio-mbair-jhansen:nio-envs jhansen$ git checkout deployment/nioenvs/db-info
Branch deployment/nioenvs/db-info set up to track remote branch deployment/nioenvs/db-info from origin.
Switched to a new branch 'deployment/nioenvs/db-info'
nio-mbair-jhansen:nio-envs jhansen$ git pull
remote: Counting objects: 83, done.
remote: Compressing objects: 100% (83/83), done.
remote: Total 83 (delta 41), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (83/83), done.
From https://github.com/nioinnovation/azz
 + f20d48e...caf5f81 nio/kettle/loadcell-alerts -> origin/nio/kettle/loadcell-alerts  (forced update)
 * [new branch]      nio/oracle/hoist-email-alerts -> origin/nio/oracle/hoist-email-alerts
   37b221d..55f1255  nio/supervisor/master -> origin/nio/supervisor/master
Already up-to-date.
nio-mbair-jhansen:nio-envs jhansen$ python3 build_envs.py 
Building environment files for 3 plants...
CRO_SV built
CRO_SHK1 COM ports 1,4 mapped
CRO_SHK1 built
CRO_SHK2 COM ports 1 mapped
CRO_SHK2 built
CRO_SHC1 built
CRO_SHC2 built
CRO_SHC3 built
CRO_SHC4 built
CRO_SHC5 built
CRO_SHC6 built
CRO_SHC7 built
CRO_SHC8 built
CRO_SHC9 built
CRO_SHC10 built
CRO_SHC11 built
CRO_SHC12 built
CRO_SHC13 built
CRO_SHC14 built
CRO_SHC15 built
CRO_SHC16 built
CRO_SHC17 built
CRO_SHC18 built
CRO_SHC19 built
CRO_SHC20 built
CRO_SHC21 built
CRO_SHC22 built
CRO_SHC23 built
CRO_SHC24 built
CRO_SHC25 built
Traceback (most recent call last):
  File "build_envs.py", line 487, in <module>
    main()
  File "build_envs.py", line 378, in main
    source = xlrd.open_workbook(filename=file)
  File "/Library/Frameworks/Python.framework/Versions/3.4/lib/python3.4/site-packages/xlrd/__init__.py", line 441, in open_workbook
    ragged_rows=ragged_rows,
  File "/Library/Frameworks/Python.framework/Versions/3.4/lib/python3.4/site-packages/xlrd/book.py", line 91, in open_workbook_xls
    biff_version = bk.getbof(XL_WORKBOOK_GLOBALS)
  File "/Library/Frameworks/Python.framework/Versions/3.4/lib/python3.4/site-packages/xlrd/book.py", line 1230, in getbof
    bof_error('Expected BOF record; found %r' % self.mem[savpos:savpos+8])
  File "/Library/Frameworks/Python.framework/Versions/3.4/lib/python3.4/site-packages/xlrd/book.py", line 1224, in bof_error
    raise XLRDError('Unsupported format, or corrupt file: ' + msg)
xlrd.biffh.XLRDError: Unsupported format, or corrupt file: Expected BOF record; found b'\x15Microso'
nio-mbair-jhansen:nio-envs jhansen$ cd ../projects
nio-mbair-jhansen:projects jhansen$ cd azz
nio-mbair-jhansen:azz jhansen$ git status
On branch nio/kettle/April20envs
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   envs/CRO_SHK1.env
	modified:   envs/CRO_SHK2.env

no changes added to commit (use "git add" and/or "git commit -a")
nio-mbair-jhansen:azz jhansen$ git diff envs/CRO_SHK1.env 
diff --git a/envs/CRO_SHK1.env b/envs/CRO_SHK1.env
index 2b93c02..04f0ec3 100644
--- a/envs/CRO_SHK1.env
+++ b/envs/CRO_SHK1.env
@@ -24,16 +24,18 @@ XSUB_PORT: 9001
 # beckhoff io host
 BECKHOFF_IO_HOST: 172.16.17.255
 
-# weight capture
-RETHINKDB_HOST: 10.103.6.80
-RETHINKDB_CLOUD_HOST: rtls.nioinstances.com
-RETHINKDB_PORT: 28015
-PLANT_NUMBER: 410
-
 # socketio
 LOCAL_SOCKETIO_HOST: 10.103.6.80
 LOCAL_SOCKETIO_PORT: 81
 
+# rtls tags
+RETHINKDB_CLOUD_HOST: rtls.nioinstances.com
+PLANT_NUMBER: 410
+
+# rethink
+RETHINKDB_HOST: 10.103.6.80
+RETHINKDB_PORT: 28015
+
 # Loadcell Gateway port
 LOADCELL_PORT: /dev/ttyS6 115200 8N1
 
@@ -54,8 +56,8 @@ BECKHOFF_IO_HI: _|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|
 BECKHOFF_IO_HIHI: _|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|
 BECKHOFF_IO_LO: _|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|
 BECKHOFF_IO_LOLO: _|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|
-BECKHOFF_IO_MAX: _|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|120|120|120|20|120|120|120|60|60|60|31.904|60|60|60|60|60|60|60|60|60|60|60|60|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|
-BECKHOFF_IO_MIN: _|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|0|0|0|0|0|0|0|0|0|0|51.046|0|0|0|0|0|0|0|0|0|0|0|0|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|
+BECKHOFF_IO_MAX: _|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|120|120|120|20|120|120|120|60|60|60|-9.195|60|60|60|60|60|60|60|60|60|60|60|60|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|
+BECKHOFF_IO_MIN: _|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|0|0|0|0|0|0|0|0|0|0|9.739|0|0|0|0|0|0|0|0|0|0|0|0|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|
 BECKHOFF_IO_NAME: _|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|Motor L1|Motor L2|Motor L3|Pressure Differential|Motor L1|Motor L2|Motor L3|Motor L1|Motor L2|Motor L3|Level|Motor L1|Motor L2|Motor L3|Motor L1|Motor L2|Motor L3|Motor L1|Motor L2|Motor L3|Motor L1|Motor L2|Motor L3|_|_|_|_|_|_|_|_|_|Level Measurement On|_|_|_|_|_|_|_|Temperature|_|Temperature|_|Temperature|_|Temperature|_|Temperature|_|Temperature|_|Temperature|_|_|_|_|_|_|_|_|_|_|_|
 BECKHOFF_IO_TYPE: _|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|A|A|A|A|A|A|A|A|A|A|A|A|A|A|A|A|A|A|A|A|A|A|A|A|_|_|_|_|_|_|_|_|D|D|D|D|D|D|D|D|T|_|T|_|T|_|T|_|T|_|T|_|T|_|T|_|T|_|T|_|T|_|T|_|
 BECKHOFF_IO_UNITS: _|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|A|A|A|IN.WC|A|A|A|A|A|A|IN|A|A|A|A|A|A|A|A|A|A|A|A|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|_|F|_|F|_|F|_|F|_|F|_|F|_|F|_|F|_|F|_|F|_|F|_|F|_|
nio-mbair-jhansen:azz jhansen$ git diff envs/CRO_SHK2.env 
diff --git a/envs/CRO_SHK2.env b/envs/CRO_SHK2.env
index f909d47..a4159b5 100644
--- a/envs/CRO_SHK2.env
+++ b/envs/CRO_SHK2.env
@@ -24,16 +24,18 @@ XSUB_PORT: 9001
 # beckhoff io host
 BECKHOFF_IO_HOST: 172.16.17.255
 
-# weight capture
-RETHINKDB_HOST: 10.103.6.80
-RETHINKDB_CLOUD_HOST: rtls.nioinstances.com
-RETHINKDB_PORT: 28015
-PLANT_NUMBER: 410
-
 # socketio
 LOCAL_SOCKETIO_HOST: 10.103.6.80
 LOCAL_SOCKETIO_PORT: 81
 
+# rtls tags
+RETHINKDB_CLOUD_HOST: rtls.nioinstances.com
+PLANT_NUMBER: 410
+
+# rethink
+RETHINKDB_HOST: 10.103.6.80
+RETHINKDB_PORT: 28015
+
 # Loadcell Gateway port
 LOADCELL_PORT: /dev/ttyS6 115200 8N1
 
nio-mbair-jhansen:azz jhansen$ git status
On branch nio/kettle/April20envs
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   envs/CRO_SHK1.env
	modified:   envs/CRO_SHK2.env

no changes added to commit (use "git add" and/or "git commit -a")
nio-mbair-jhansen:azz jhansen$ git add .
nio-mbair-jhansen:azz jhansen$ git status
On branch nio/kettle/April20envs
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	modified:   envs/CRO_SHK1.env
	modified:   envs/CRO_SHK2.env

nio-mbair-jhansen:azz jhansen$ git commit -m "Updates CRO Kettle Freeboard Calc"
[nio/kettle/April20envs 83a758a] Updates CRO Kettle Freeboard Calc
 2 files changed, 18 insertions(+), 14 deletions(-)
nio-mbair-jhansen:azz jhansen$ git push --set-upstream origin nio/kettle/April20envs
Counting objects: 5, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (5/5), done.
Writing objects: 100% (5/5), 575 bytes | 0 bytes/s, done.
Total 5 (delta 4), reused 0 (delta 0)
remote: Resolving deltas: 100% (4/4), completed with 4 local objects.
To https://github.com/nioinnovation/azz.git
 * [new branch]      nio/kettle/April20envs -> nio/kettle/April20envs
Branch nio/kettle/April20envs set up to track remote branch nio/kettle/April20envs from origin.
nio-mbair-jhansen:azz jhansen$ 