game.import("extension", function(lib, game, ui, get, ai, _status) {
	return {
		name: "校园杀",
		editable: true,
		content: function(config, pack) {
			//势力
			var style1 = document.createElement('style');
			style1.innerHTML = ".player .identity[data-color='nsfzxys_group_li'],";
			style1.innerHTML += "div[data-nature='nsfzxys_group_li'],";
			style1.innerHTML += "span[data-nature='nsfzxys_group_li'] {text-shadow: black 0 0 1px,rgba(100, 160, 255, 1) 0 0 2px,rgba(100, 160, 255, 1) 0 0 5px,rgba(100, 160, 255, 1) 0 0 10px,rgba(100, 160, 255, 1) 0 0 10px}";
			style1.innerHTML += "div[data-nature='nsfzxys_group_lim'],";
			style1.innerHTML += "span[data-nature='nsfzxys_group_lim'] {text-shadow: black 0 0 1px,rgba(100, 160, 255, 1) 0 0 2px,rgba(100, 160, 255, 1) 0 0 5px,rgba(100, 160, 255, 1) 0 0 5px,rgba(100, 160, 255, 1) 0 0 5px,black 0 0 1px;}";
			style1.innerHTML += "div[data-nature='nsfzxys_group_limm'],";
			style1.innerHTML += "span[data-nature='nsfzxys_group_limm'] {text-shadow: black 0 0 1px,rgba(100, 160, 255, 1) 0 0 2px,rgba(100, 160, 255, 1) 0 0 2px,rgba(100, 160, 255, 1) 0 0 2px,rgba(100, 160, 255, 1) 0 0 2px,black 0 0 1px;}";
			document.head.appendChild(style1);

			lib.group.push('nsfzxys_group_li');
			lib.translate.nsfzxys_group_li = '理';
			lib.translate.nsfzxys_group_li2 = '理';
			lib.groupnature.nsfzxys_group_li = 'nsfzxys_group_li';

			var style2 = document.createElement('style');
			style2.innerHTML = ".player .identity[data-color='nsfzxys_group_wen'],";
			style2.innerHTML += "div[data-nature='nsfzxys_group_wen'],";
			style2.innerHTML += "span[data-nature='nsfzxys_group_wen'] {text-shadow: black 0 0 1px,rgba(51, 255, 51, 1) 0 0 2px,rgba(51, 255, 51, 1) 0 0 5px,rgba(51, 255, 51, 1) 0 0 10px,rgba(51, 255, 51, 1) 0 0 10px}";
			style2.innerHTML += "div[data-nature='nsfzxys_group_wenm'],";
			style2.innerHTML += "span[data-nature='nsfzxys_group_wenm'] {text-shadow: black 0 0 1px,rgba(51, 255, 51, 1) 0 0 2px,rgba(51, 255, 51, 1) 0 0 5px,rgba(51, 255, 51, 1) 0 0 5px,rgba(51, 255, 51, 1) 0 0 5px,black 0 0 1px;}";
			style2.innerHTML += "div[data-nature='nsfzxys_group_wenmm'],";
			style2.innerHTML += "span[data-nature='nsfzxys_group_wenmm'] {text-shadow: black 0 0 1px,rgba(51, 255, 51, 1) 0 0 2px,rgba(51, 255, 51, 1) 0 0 2px,rgba(51, 255, 51, 1) 0 0 2px,rgba(51, 255, 51, 1) 0 0 2px,black 0 0 1px;}";
			document.head.appendChild(style2);

			lib.group.push('nsfzxys_group_wen');
			lib.translate.nsfzxys_group_wen = '文';
			lib.translate.nsfzxys_group_wen2 = '文';
			lib.groupnature.nsfzxys_group_wen = 'nsfzxys_group_wen';

			var style3 = document.createElement('style');
			style3.innerHTML = ".player .identity[data-color='nsfzxys_group_ti'],";
			style3.innerHTML += "div[data-nature='nsfzxys_group_ti'],";
			style3.innerHTML += "span[data-nature='nsfzxys_group_ti'] {text-shadow: black 0 0 1px,rgba(255, 64, 32,1) 0 0 2px,rgba(255, 64, 32,1) 0 0 5px,rgba(255, 64, 32,1) 0 0 10px,rgba(255, 64, 32,1) 0 0 10px}";
			style3.innerHTML += "div[data-nature='nsfzxys_group_tim'],";
			style3.innerHTML += "span[data-nature='nsfzxys_group_tim'] {text-shadow: black 0 0 1px,rgba(255, 64, 32,1) 0 0 2px,rgba(255, 64, 32,1) 0 0 5px,rgba(255, 64, 32,1) 0 0 5px,rgba(255, 64, 32,1) 0 0 5px,black 0 0 1px;}";
			style3.innerHTML += "div[data-nature='nsfzxys_group_timm'],";
			style3.innerHTML += "span[data-nature='nsfzxys_group_timm'] {text-shadow: black 0 0 1px,rgba(255, 64, 32,1) 0 0 2px,rgba(255, 64, 32,1) 0 0 2px,rgba(255, 64, 32,1) 0 0 2px,rgba(255, 64, 32,1) 0 0 2px,black 0 0 1px;}";
			document.head.appendChild(style3);

			lib.group.push('nsfzxys_group_ti');
			lib.translate.nsfzxys_group_ti = '体';
			lib.translate.nsfzxys_group_ti2 = '体';
			lib.groupnature.nsfzxys_group_ti = 'nsfzxys_group_ti';

			var style4 = document.createElement('style');
			style4.innerHTML = ".player .identity[data-color='nsfzxys_group_ta'],";
			style4.innerHTML += "div[data-nature='nsfzxys_group_ta'],";
			style4.innerHTML += "span[data-nature='nsfzxys_group_ta'] {text-shadow: black 0 0 1px,rgba(191, 191, 191, 1) 0 0 2px,rgba(191, 191, 191, 1) 0 0 5px,rgba(191, 191, 191, 1) 0 0 10px,rgba(191, 191, 191, 1) 0 0 10px}";
			style4.innerHTML += "div[data-nature='nsfzxys_group_tam'],";
			style4.innerHTML += "span[data-nature='nsfzxys_group_tam'] {text-shadow: black 0 0 1px,rgba(191, 191, 191, 1) 0 0 2px,rgba(191, 191, 191, 1) 0 0 5px,rgba(191, 191, 191, 1) 0 0 5px,rgba(191, 191, 191, 1) 0 0 5px,black 0 0 1px;}";
			style4.innerHTML += "div[data-nature='nsfzxys_group_tamm'],";
			style4.innerHTML += "span[data-nature='nsfzxys_group_tamm'] {text-shadow: black 0 0 1px,rgba(191, 191, 191, 1) 0 0 2px,rgba(191, 191, 191, 1) 0 0 2px,rgba(191, 191, 191, 1) 0 0 2px,rgba(191, 191, 191, 1) 0 0 2px,black 0 0 1px;}";
			document.head.appendChild(style4);

			lib.group.push('nsfzxys_group_ta');
			lib.translate.nsfzxys_group_ta = '他';
			lib.translate.nsfzxys_group_ta2 = '他';
			lib.groupnature.nsfzxys_group_ta = 'nsfzxys_group_ta';

			var style5 = document.createElement('style');
			style5.innerHTML = ".player .identity[data-color='nsfzxys_group_shi'],";
			style5.innerHTML += "div[data-nature='nsfzxys_group_shi'],";
			style5.innerHTML += "span[data-nature='nsfzxys_group_shi'] {text-shadow: black 0 0 1px,rgba(245, 240, 11, 1) 0 0 2px,rgba(245, 240, 11, 1) 0 0 5px,rgba(245, 240, 11, 1) 0 0 10px,rgba(245, 240, 11, 1) 0 0 10px}";
			style5.innerHTML += "div[data-nature='nsfzxys_group_shim'],";
			style5.innerHTML += "span[data-nature='nsfzxys_group_shim'] {text-shadow: black 0 0 1px,rgba(245, 240, 11, 1) 0 0 2px,rgba(245, 240, 11, 1) 0 0 5px,rgba(245, 240, 11, 1) 0 0 5px,rgba(245, 240, 11, 1) 0 0 5px,black 0 0 1px;}";
			style5.innerHTML += "div[data-nature='nsfzxys_group_shimm'],";
			style5.innerHTML += "span[data-nature='nsfzxys_group_shimm'] {text-shadow: black 0 0 1px,rgba(245, 240, 11, 1) 0 0 2px,rgba(245, 240, 11, 1) 0 0 2px,rgba(245, 240, 11, 1) 0 0 2px,rgba(245, 240, 11, 1) 0 0 2px,black 0 0 1px;}";
			document.head.appendChild(style5);

			lib.group.push('nsfzxys_group_shi');
			lib.translate.nsfzxys_group_shi = '师';
			lib.translate.nsfzxys_group_shi2 = '师';
			lib.groupnature.nsfzxys_group_shi = 'nsfzxys_group_shi';

			//function
			nsfzxys_getWeaponRange = function(card) {
				if (get.type(card) != 'equip') return;
				if (get.subtype(card) != 'equip1') return;
				var name = get.name(card);
				var info = lib.card[name];
				if (info && info.distance && info.distance.attackFrom) {
					return Math.abs(info.distance.attackFrom) + 1;
				}
				return 1;
			};
			nsfzxys_isPrime = function(num) {
				for (var i = 2; i < num; i++)
					if (num % i === 0) return false;
				return num > 1;
			};
			nsfzxys_findGCD = function(num1, num2) {
				var t = Math.min(Math.abs(num1), Math.abs(num2));
				for (var i = t; i > 1; i--)
					if (num1 % i === 0 && num2 % i === 0) return i;
				return 1;
			};

			nsfzxys_skillActionTag = function(name, tag) {
				if (typeof name !== 'string' || typeof tag !== 'string') return -5;
				var info = lib.skill[name];
				if (!info) return -4;
				if (!info.action_tag) return -3;
				if (!info.action_tag[tag]) return -1;

				if (typeof info.action_tag[tag] === 'number') {
					return info.action_tag[tag];
				} else if (typeof info.action_tag[tag] === 'boolean') {
					return 1;
				} else if (parseInt(info.action_tag[tag])) {
					return parseInt(info.action_tag[tag]);
				}
				return 0;
			};

			nsfzxys_grouprelation = function(str, reverse) {
				/*if (!lib.config.nsfzxysGroupReplace) {
					return str;
				}*/
				if (!reverse) {
					if (str == "wei") {
						return "nsfzxys_group_li";
					} else if (str == "wu") {
						return "nsfzxys_group_wen";
					} else if (str == "shu") {
						return "nsfzxys_group_ti";
					} else if (str == "qun") {
						return "nsfzxys_group_ta";
					} else if (str == "jin") {
						return "nsfzxys_group_shi";
					}
				}
				return str;
			};
			/*var characters = pack.character;
			if (characters) {
				characters = characters.character;
			} else {
				return;
			}*/
			var characters = pack.character.character;
			for (var i in characters) {
				//if (i.indexOf('nsfzxys') < 0) continue;
				if (i.indexOf('nsfzxys') < 0) continue;
				var info = characters[i];
				var cset = info[4];
				if (config.nsfzxysGroupShenChange && info[1] == 'shen') {
					if (cset.contains('group_jin')) {
						info[1] = 'jin';
					} else if (cset.contains('group_wei')) {
						info[1] = 'wei';
					} else if (cset.contains('group_shu')) {
						info[1] = 'shu';
					} else if (cset.contains('group_wu')) {
						info[1] = 'wu';
					} else if (cset.contains('group_qun')) {
						info[1] = 'qun';
					}
				}
				if (config.nsfzxysGroupShiChange && info[1] == 'jin') {
					if (cset.contains('group_wei')) {
						info[1] = 'wei';
					} else if (cset.contains('group_shu')) {
						info[1] = 'shu';
					} else if (cset.contains('group_wu')) {
						info[1] = 'wu';
					} else if (cset.contains('group_qun')) {
						info[1] = 'qun';
					}
				}
				characters[i][1] = nsfzxys_grouprelation(info[1], config.nsfzxysGroupTKChange); //lib.
			}
			if (config.nsfzxysSameCharacter) {
				pack.character.characterReplace = {
					swq: ['nsfzxys_m1904_swq', 'nsfzxys_g04_swq', 'nsfzxys_sp04_swq'],
					hlh: ['nsfzxys_m1906_hlh', 'nsfzxys_g06_hlh'],
					lhy: ['nsfzxys_m1911_lhy', 'nsfzxys_g07_lhy'],
					syf: ['nsfzxys_m1917_syf', 'nsfzxys_g02_syf', 'nsfzxys_sp01_syf'],
					zrh: ['nsfzxys_m1927_zrh', 'nsfzxys_g05_zrh'],
					xss: ['nsfzxys_m1936_xss', 'nsfzxys_g03_xss'],
					wjy: ['nsfzxys_m1921_wjy', 'nsfzxys_g08_wjy'],
					wl: ['nsfzxys_t01_wl', 'nsfzxys_g09_wl'],
				};
			}
			if (config.nsfzxysOnly) {
				for (var i in lib.character) {
					if (i.indexOf('nsfzxys') >= 0) continue;

					if (!lib.character[i][4]) lib.character[i].add([]);
					lib.character[i][4].push('unseen');
				}
			}

			// Skill
			lib.translate._nsfzxys_shengroupselect = "神选择势力";
			lib.translate._nsfzxys_shengroupselect_info = "游戏开始时，神势力角色选择势力。";
			lib.skill._nsfzxys_shengroupselect = {
				trigger: {
					global: ["gameStart"],
				},
				firstDo: true,
				forced: true,
				fixed: true,
				superCharlotte: true,
				charlotte: true,
				popup: false,
				priority: 999,
				filter: function(event, player) {
					if (!config.nsfzxysGroupShenChoose) return false;
					var name = player.name;
					if (name.indexOf('nsfzxys') < 0) return false;
					var info = lib.character[name];
					if (!info) {
						info = lib.character[player.name1];
						if (!info) {
							return false;
						}
					}
					if (info[1] != 'shen') return false;
					return true;
				},
				content: function() {
					'step 0'
					var group = [];
					var choices = [];
					var basic = ['wei', 'shu', 'wu', 'qun', 'jin', 'nsfzxys_group_wen', 'nsfzxys_group_li', 'nsfzxys_group_ti', 'nsfzxys_group_ta', 'nsfzxys_group_shi'];
					for (var i in lib.character) {
						if (Array.isArray(lib.character[i][4]) && (lib.character[i][4].contains('unseen') || lib.character[i][4].contains('forbidai'))) continue;
						group.add(lib.character[i][1]);
					}
					for (var i = 0; i < basic.length; i++) {
						if (group.contains(basic[i])) {
							choices.push(basic[i]);
							group.remove(basic[i]);
						}
					}
					choices.concat(group);
					choices.remove('shen');
					player.chooseControl(choices).set('prompt', '神势力：请选择变为一个势力').set('ai', function() {
						if (get.mode() == 'identity' && _status.mode != 'purple') {
							var zhu = get.zhu(player);
							if (zhu != player) return zhu.group;
						}
						var name = player.name;
						if (name.indexOf('nsfzxys') < 0) return choices.randomGet();
						var info = lib.character[name];
						if (!info) {
							info = lib.character[player.name1];
							if (!info) {
								return choices.randomGet();
							}
						}
						var cset = info[4];
						var str;
						if (cset.contains('group_jin') && !config.nsfzxysGroupShiChange) {
							str = 'jin';
						} else if (cset.contains('group_wei')) {
							str = 'wei';
						} else if (cset.contains('group_shu')) {
							str = 'shu';
						} else if (cset.contains('group_wu')) {
							str = 'wu';
						} else if (cset.contains('group_qun')) {
							str = 'qun';
						}
						if (str) return nsfzxys_grouprelation(str, lib.config['extension_校园杀_nsfzxysGroupTKChange']);

						return choices.randomGet();
					});
					'step 1'
					player.group = result.control;
				},
			};
			/*lib.skill._nsfzxys_guohe = {
				trigger: {
					player: ["useCardToPlayered"],
				},
				firstDo: true,
				forced: true,
				fixed: true,
				superCharlotte: true,
				charlotte: true,
				popup: false,
				filter: function(event, player) {
					return event.card.name = 'guohe'
				},
				content: function() {
					'step 0'
					player.addTempSkill('guohe_view', 'guoheEnd');
					if (!Array.isArray(player.storage.guohe_view)) {
						player.storage.guohe_view = [trigger.target];
					} else {
						player.storage.guohe_view.concat([trigger.target]);
					}
				},
			};
			lib.skill.guohe_view = {
				ai: {
					viewHandcard: true,
					skillTagFilter: function(player, tag, arg) {
						if (!player.storage.guohe_view.contains(arg)) return false;
					},
				},
			};*/
			lib.action_tag = ['damage', 'fire', 'thunder', 'ice', 'direct_defend', 'active_defend', 'loseHp_defend', 'damage_prevent', 'damage_react', 'deterrence',
				'draw', 'gain', 'discard', 'change', 'search', 'reuse', 'maxHand', 'rejudge', 'support', 'equip', 'sha_bonus', 'sha_viewAs', 'range', 'sha_multi', 'directHit',
				'shan', 'wuxie', 'save', 'recover', 'loseHp', 'forbid', 'skill', 'disable', 'turnOver', 'link', 'trick_viewAs',
				'demand_card', 'demand_sha', 'demand_basic', 'demand_trick', 'demand_equip', 'demand_heart', 'demand_spade', 'demand_diamond', 'demand_club', 'demand_special',
				'limited', 'negative', 'combo'
			];
			lib.skill._nsfzxys_tianshu_check = {
				trigger: {
					global: ['phaseBeginStart', 'useCardBefore', 'phaseAfter', 'phaseBegin', 'chooseToUseBegin', 'chooseToRespondBegin', 'chooseToDiscardBegin', 'chooseToCompareBegin',
						'chooseButtonBegin', 'chooseCardBegin', 'chooseTargetBegin', 'chooseCardTargetBegin', 'chooseControlBegin',
						'chooseBoolBegin', 'choosePlayerCardBegin', 'discardPlayerCardBegin', 'gainPlayerCardBegin', 'damageBegin2', 'damageBegin3', 'damageBegin4'
					]
				},
				forced: true,
				unique: true,
				popup: false,
				fixed: true,
				superCharlotte: true,
				charlotte: true,
				priority: Infinity,
				silent: true,
				filter: function(event, player) {
					if (!player.name && !player.name1 && !player.name2) return false;
					if (player.name) {
						if (!lib.character[player.name]) return false;
						if (!lib.character[player.name][3]) return false;
						if (lib.character[player.name][3].contains('nsfzxys_tianshu')) return true;
					}
					if (player.name1) {
						if (!lib.character[player.name1]) return false;
						if (!lib.character[player.name1][3]) return false;
						if (lib.character[player.name1][3].contains('nsfzxys_tianshu')) return true;
					}
					if (player.name2) {
						if (!lib.character[player.name2]) return false;
						if (!lib.character[player.name2][3]) return false;
						if (lib.character[player.name2][3].contains('nsfzxys_tianshu')) return true;
					}
					return false;
				},
				content: function() {
					"step 0"
					var skills = [];
					if (player.name && lib.character[player.name]) skills = skills.concat(lib.character[player.name][3]);
					if (player.name1 && lib.character[player.name1]) skills = skills.concat(lib.character[player.name1][3]);
					if (player.name2 && lib.character[player.name2]) skills = skills.concat(lib.character[player.name2][3]);

					for (var i = 0; i < skills.length; i++) {
						var info = lib.skill[skills[i]];
						if (!player.hasSkill(skills[i])) player.addSkill(skills[i]);
						if (player.disabledSkills[skills[i]]) delete player.disabledSkills[skills[i]];
					}
					for (var i in player.disabledSkills) {
						player.enableSkill(i);
					}
				}
			};
		},
		precontent: function() {},
		config: {
			"nsfzxysOnly": {
				name: '校园杀限定',
				intro: "开启后，只能使用校园杀角色。",
				init: true,
			},
			"nsfzxysGroupShiChange": {
				name: '师势力改变',
				intro: "开启后，师势力角色将变为其对应课程的势力。",
				init: false,
			},
			"nsfzxysGroupShenChange": {
				name: '神势力改变',
				intro: "开启后，神势力角色将变为其对应课程的势力。",
				init: false,
			},
			"nsfzxysGroupShenChoose": {
				name: '神势力角色选择势力',
				intro: "开启后，神势力角色在游戏开始时选择自己的势力（请关闭官方的神将选择势力）。",
				init: true,
			},
			"nsfzxysGroupTKChange": {
				name: '使用三国势力',
				intro: "开启后，所有角色的势力将变为其对应的三国势力。",
				init: false,
			},
			"nsfzxysSameCharacter": {
				name: '同一角色替换',
				intro: "开启后，同一角色的不同版本开启选将时替换。",
				init: true,
			},
		},
		help: {},
		package: {
			character: {
				characterSort: {
					"mode_extension_校园杀": {
						"nsfzxys_nineteen1": ["nsfzxys_m1901_cwh", "nsfzxys_m1902_chy", "nsfzxys_m1903_cqc", "nsfzxys_m1904_swq", "nsfzxys_m1905_fwj", "nsfzxys_m1906_hlh", "nsfzxys_m1907_hrz", "nsfzxys_m1908_lzx", "nsfzxys_m1909_lrm", "nsfzxys_m1910_lcy", "nsfzxys_m1911_lhy", "nsfzxys_m1912_lq", "nsfzxys_m1913_lry", "nsfzxys_m1914_lcs", "nsfzxys_m1915_mhr", "nsfzxys_m1916_mjh", "nsfzxys_m1917_syf", "nsfzxys_m1918_sy", "nsfzxys_m1919_tyf", "nsfzxys_m1920_wcy", "nsfzxys_m1921_wjy"],
						"nsfzxys_nineteen2": ["nsfzxys_m1922_wyx", "nsfzxys_m1923_xzj", "nsfzxys_m1924_ywq", "nsfzxys_m1925_zqy", "nsfzxys_m1926_zrb", "nsfzxys_m1927_zrh", "nsfzxys_m1928_zts", "nsfzxys_m1929_zyp", "nsfzxys_m1930_zzh", "nsfzxys_m1931_zzz", "nsfzxys_m1932_zyx", "nsfzxys_m1933_hy", "nsfzxys_m1934_jy", "nsfzxys_m1935_txy", "nsfzxys_m1936_xss", "nsfzxys_m1937_ysh", "nsfzxys_m1938_yyp", "nsfzxys_m1939_yhx", "nsfzxys_m1940_yyn", "nsfzxys_m1941_zjh", "nsfzxys_m1942_gsy"],
						"nsfzxys_teacher": ["nsfzxys_t01_wl", "nsfzxys_t03_ljf", "nsfzxys_t05_dr", "nsfzxys_t08_zjp", "nsfzxys_t10_jy", "nsfzxys_t11_sy", "nsfzxys_t12_ly", "nsfzxys_t16_thj", "nsfzxys_t19_zql", "nsfzxys_t23_wm", "nsfzxys_t30_zjb"],
						"nsfzxys_schoolmate": ["nsfzxys_m0501_cyx", "nsfzxys_m052x_hy", "nsfzxys_m0526_jta", "nsfzxys_m072x_lyx", "nsfzxys_m0729_qq", "nsfzxys_m1325_tyd", "nsfzxys_m171x_xyx", "nsfzxys_m1801_ctc", "nsfzxys_m1804_gyl", "nsfzxys_m1817_shn", "nsfzxys_m1818_tss", "nsfzxys_m1826_yy", "nsfzxys_m1828_yq", "nsfzxys_m1839_wzw"],
						"nsfzxys_high": ["nsfzxys_h01_gj", "nsfzxys_h02_zwl"],
						"nsfzxys_foreign": ["nsfzxys_f01_wxy", "nsfzxys_f02_txc", "nsfzxys_f03_zh"],
						"nsfzxys_sp": ["nsfzxys_sp01_syf", "nsfzxys_sp02_chy", "nsfzxys_sp03_mhr", "nsfzxys_sp04_swq"],
						"nsfzxys_xseries": ["nsfzxys_x02_dyb"],
						"nsfzxys_god": ["nsfzxys_g02_syf", "nsfzxys_g03_xss", "nsfzxys_g04_swq", "nsfzxys_g05_zrh", "nsfzxys_g06_hlh", "nsfzxys_g07_lhy", "nsfzxys_g08_wjy", "nsfzxys_g09_wl"],
					},
				},
				character: {
					// 19
					"nsfzxys_m1901_cwh": ["male", "qun", 4, ["nsfzxys_jiancha"],
						[]
					],
					"nsfzxys_m1902_chy": ["male", "shu", 4, ["nsfzxys_danda", "nsfzxys_fenqi"],
						[]
					],
					"nsfzxys_m1903_cqc": ["male", "qun", 4, [],
						['unseen']
					],
					"nsfzxys_m1904_swq": ["male", "wei", 3, ["nsfzxys_zhilun", "nsfzxys_bianliang"],
						[]
					],
					"nsfzxys_m1905_fwj": ["male", "qun", 3, ["nsfzxys_doudou", "nsfzxys_niangqiang"],
						[]
					],
					"nsfzxys_m1906_hlh": ["male", "shu", 4, ["nsfzxys_chiren"],
						[]
					],
					"nsfzxys_m1907_hrz": ["male", "qun", 4, [],
						['unseen']
					],
					"nsfzxys_m1908_lzx": ["male", "qun", 4, [],
						['unseen']
					],
					"nsfzxys_m1909_lrm": ["male", "shu", 4, ["nsfzxys_egao", "nsfzxys_tineng"],
						[]
					],
					"nsfzxys_m1910_lcy": ["male", "wei", 4, ["nsfzxys_youxue", "nsfzxys_tihai"],
						[]
					],
					"nsfzxys_m1911_lhy": ["male", "wei", 3, ["nsfzxys_kuaiyu", "nsfzxys_cedu"],
						[]
					],
					"nsfzxys_m1912_lq": ["male", "wu", 3, ["nsfzxys_heihua", "nsfzxys_zigong"],
						[]
					],
					"nsfzxys_m1913_lry": ["male", "shu", 4, ["nsfzxys_chaoyue", "nsfzxys_jueshi"],
						[]
					],
					"nsfzxys_m1914_lcs": ["male", "shu", 4, ["nsfzxys_lanban"],
						[]
					],
					"nsfzxys_m1915_mhr": ["male", "shu", 4, ["nsfzxys_baoshi", "nsfzxys_zaizhong"],
						[]
					],
					"nsfzxys_m1916_mjh": ["male", "wei", 3, ["nsfzxys_xiaoyan", "nsfzxys_jiangyou"],
						[]
					],
					"nsfzxys_m1917_syf": ["male", "wei", 3, ["nsfzxys_qiaozheng", "nsfzxys_jiexi"],
						[]
					],
					"nsfzxys_m1918_sy": ["male", "qun", 3, ["nsfzxys_duanxiao", "nsfzxys_zhuangda", "nsfzxys_gaoxiao"],
						[]
					],
					"nsfzxys_m1919_tyf": ["male", "shu", 4, ["nsfzxys_gaoda", "nsfzxys_nuhuo"],
						[]
					],
					"nsfzxys_m1920_wcy": ["male", "wei", 3, ["nsfzxys_zaojia", "nsfzxys_jiahuo"],
						[]
					],
					"nsfzxys_m1921_wjy": ["male", "wu", 3, ["nsfzxys_manpao", "nsfzxys_dunjia", "nsfzxys_gudong"],
						['zhu']
					],
					"nsfzxys_m1922_wyx": ["male", "wu", 3, ["nsfzxys_zhijian", "nsfzxys_gongdi"],
						[]
					],
					"nsfzxys_m1923_xzj": ["male", "qun", 4, ["nsfzxys_qiangying"],
						[]
					],
					"nsfzxys_m1924_ywq": ["male", "wei", 3, ["nsfzxys_qiangyuan", "nsfzxys_jingji"],
						[]
					],
					"nsfzxys_m1925_zqy": ["male", "wu", 4, ["nsfzxys_tangong", "nsfzxys_zhengbian"],
						[]
					],
					"nsfzxys_m1926_zrb": ["male", "wu", 4, ["nsfzxys_zhengqi", "nsfzxys_gengzhi"],
						[]
					],
					"nsfzxys_m1927_zrh": ["male", "shu", 3, ["nsfzxys_kuangben", "nsfzxys_huiguang"],
						[]
					],
					"nsfzxys_m1928_zts": ["male", "wei", 4, ["nsfzxys_shiguang", "nsfzxys_xuewei"],
						['zhu']
					],
					"nsfzxys_m1929_zyp": ["male", "qun", 3, ["nsfzxys_jingjian", "nsfzxys_manfen"],
						[]
					],
					"nsfzxys_m1930_zzh": ["male", "shu", 4, ["nsfzxys_wenzhong", "nsfzxys_jingxuan", "nsfzxys_lapiao"],
						["zhu"]
					],
					"nsfzxys_m1931_zzz": ["male", "wu", 3, ["nsfzxys_baimian", "nsfzxys_qingsao"],
						[]
					],
					"nsfzxys_m1932_zyx": ["male", "qun", 4, ["nsfzxys_dade", "nsfzxys_manzu"],
						[]
					],
					"nsfzxys_m1933_hy": ["female", "qun", 3, ["nsfzxys_huzhu", "nsfzxys_tuanjie", "nsfzxys_renwang"],
						['zhu']
					],
					"nsfzxys_m1934_jy": ["female", "shu", 4, [],
						['unseen']
					],
					"nsfzxys_m1935_txy": ["female", "shu", 4, ["nsfzxys_runiu", "nsfzxys_biaobing"],
						[]
					],
					"nsfzxys_m1936_xss": ["female", "wu", 3, ["nsfzxys_yanwu", "nsfzxys_renqi"],
						[]
					],
					"nsfzxys_m1937_ysh": ["female", "wei", 3, ["nsfzxys_banfei", "nsfzxys_suanjin"],
						[]
					],
					"nsfzxys_m1938_yyp": ["female", "wu", 4, ["nsfzxys_danluan", "nsfzxys_yuzhong"],
						[]
					],
					"nsfzxys_m1939_yhx": ["female", "qun", 3, [],
						['unseen']
					],
					"nsfzxys_m1940_yyn": ["female", "wu", 3, ["nsfzxys_zhanzuo", "nsfzxys_huhua"],
						[]
					],
					"nsfzxys_m1941_zjh": ["female", "wei", 3, [],
						["unseen"]
					],
					"nsfzxys_m1942_gsy": ["male", "shu", 4, ["nsfzxys_xuezhang", "nsfzxys_luanpao"],
						[]
					],

					// teacher
					"nsfzxys_t01_wl": ["male", "jin", 4, ["nsfzxys_wangdao", "nsfzxys_dingyi"],
						["group_wei"]
					],
					"nsfzxys_t03_ljf": ["female", "jin", "1/3", ["nsfzxys_chujuan", "nsfzxys_lizhi"],
						["group_wu"]
					],
					"nsfzxys_t05_dr": ["female", "jin", 3, ["nsfzxys_tuotang", "nsfzxys_zigai"],
						["group_wu"]
					],
					"nsfzxys_t07_wq": ["female", "jin", 3, ["nsfzxys_caichan", "nsfzxys_fuyou"],
						["group_wu", "unseen"]
					],
					"nsfzxys_t08_zjp": ["female", "jin", 3, ["nsfzxys_zhuren", "nsfzxys_fengci"],
						["group_qun"]
					],
					"nsfzxys_t10_jy": ["female", "jin", 3, ["nsfzxys_zhihui", "nsfzxys_gaoyin"],
						["group_qun"]
					],
					"nsfzxys_t11_sy": ["female", "jin", 3, ["nsfzxys_miaohui", "nsfzxys_sediao"],
						["group_qun"]
					],
					"nsfzxys_t12_ly": ["male", "jin", 3, ["nsfzxys_lianjie", "nsfzxys_qiongju"],
						["group_wei"]
					],
					"nsfzxys_t16_thj": ["female", "jin", 3, ["nsfzxys_chaitai", "nsfzxys_diangu"],
						["group_wu"]
					],
					"nsfzxys_t19_zql": ["female", "jin", 4, ["nsfzxys_heishao", "nsfzxys_liedui"],
						["group_shu"]
					],
					"nsfzxys_t23_wm": ["male", "jin", 4, ["nsfzxys_pufa", "nszxys_tiaosheng"],
						["group_qun"]
					],
					"nsfzxys_t30_zjb": ["male", "jin", 4, ["nsfzxys_yitong", "nsfzxys_dahui"],
						["zhu", "group_qun"]
					],


					// schoolmate
					"nsfzxys_m0501_cyx": ["male", "wei", 3, ["nsfzxys_saishu", "nsfzxys_zhitong"],
						[]
					],
					"nsfzxys_m052x_hy": ["female", "shu", 3, ["nsfzxys_bingjia", "nsfzxys_shengyuan"],
						['unseen']
					],
					"nsfzxys_m0526_jta": ["female", "wei", 3, [],
						['unseen']
					],
					"nsfzxys_m0729_qq": ["female", "wu", 3, ["nsfzxys_yiqing", "nsfzxys_fanglang"],
						[]
					],
					"nsfzxys_m1325_tyd": ["female", "qun", 4, ["nsfzxys_gaoda", "nsfzxys_zongdai"],
						[]
					],
					"nsfzxys_m072x_lyx": ["female", "wei", 3, ["nsfzxys_jiaoyan", "nsfzxys_fengzu"],
						[]
					],
					"nsfzxys_m171x_xyx": ["male", "wu", 4, ["nsfzxys_chixiang"],
						[]
					],
					"nsfzxys_m1801_ctc": ["male", "qun", 4, ["nsfzxys_fengzi"],
						[]
					],
					"nsfzxys_m1804_gyl": ["male", "qun", 4, ["nsfzxys_zhishuai"],
						[]
					],
					"nsfzxys_m1814_lym": ["male", "wei", 1, [],
						["unseen"]
					],
					"nsfzxys_m1818_tss": ["male", "shu", 3, ["nsfzxys_guaicai", "nsfzxys_duzhuan"],
						[]
					],
					"nsfzxys_m1826_yy": ["male", "qun", 4, ["nsfzxys_juao"],
						[]
					],
					"nsfzxys_m1828_yq": ["male", "wei", 4, ["nsfzxys_bingdu", "nsfzxys_ganran"],
						[]
					],
					"nsfzxys_m1839_wzw": ["female", "wu", 3, ["nsfzxys_biyao", "nsfzxys_yixiang"],
						[]
					],

					"nsfzxys_h01_gj": ["male", "jin", 3, ["nsfzxys_baojuan", "nsfzxys_gongshi"],
						["group_wei"]
					],
					"nsfzxys_h02_zwl": ["male", "jin", 3, ["nsfzxys_chuiniu", "nsfzxys_jianshang"],
						["group_wei"]
					],


					"nsfzxys_f01_wxy": ["female", "wu", 3, ["nsfzxys_moxie", "nsfzxys_jilei"],
						[]
					],
					"nsfzxys_f02_txc": ["female", "wu", 3, [],
						["unseen"]
					],
					"nsfzxys_f03_zh": ["female", "wu", 3, ["nsfzxys_zhouzhang", "nsfzxys_xiangrui", "nsfzxys_ninghan"],
						[]
					],

					// sp
					"nsfzxys_sp01_syf": ["male", "shu", 3, ["nsfzxys_chongci", "nsfzxys_jieli"],
						[]
					],
					"nsfzxys_sp02_chy": ["male", "qun", 4, [],
						["unseen"]
					],
					"nsfzxys_sp03_mhr": ["male", "wu", 4, [],
						["unseen"]
					],
					"nsfzxys_sp04_swq": ["male", "qun", 3, ["nsfzxys_chuangyi", "nsfzxys_nilin"],
						[]
					],

					// x
					"nsfzxys_x02_dyb": ["male", "wei", 3, ["nsfzxys_liangzi", "nsfzxus_yuanshi"],
						[]
					],

					// god
					"nsfzxys_g02_syf": ["male", "shen", 3, ["nsfzxys_shulun", "nsfzxys_tianji"],
						["group_wei"]
					],
					"nsfzxys_g03_xss": ["female", "shen", 3, ["nsfzxys_tianxuan", "nsfzxys_shenyin"],
						["group_wu"]
					],
					"nsfzxys_g04_swq": ["male", "shen", 3, ["nsfzxys_jianmo", "nsfzxys_tianshu"],
						["group_wei"]
					],
					"nsfzxys_g05_zrh": ["male", "shen", 3, ["nsfzxys_sanlian", "nsfzxys_yaoguang", "nsfzxys_chehuo"],
						["group_shu"]
					],
					"nsfzxys_g06_hlh": ["male", "shen", 2, ["nsfzxys_fuqi", "nsfzxys_yuheng", "nsfzxys_guwu"],
						["group_shu"]
					],
					"nsfzxys_g07_lhy": ["male", "shen", 4, ["nsfzxys_zeyou", "nsfzxys_fuxing", "nsfzxys_keyan"],
						["group_wei"]
					],
					"nsfzxys_g08_wjy": ["male", "shen", 3, ["nsfzxys_xuanwu", "nsfzxys_tianquan"],
						["group_wu"]
					],
					"nsfzxys_g09_wl": ["male", "shen", 3, ["nsfzxys_jixing", "nsfzxys_shuke", "nsfzxys_chaoxian"],
						["group_jin", "group_wei"]
					],

					"于惜凡3": ["male", "qun", 3, [],
						["unseen"]
					],
					"nsfzxys_m0816_tw": ["male", "shu", 4, [],
						["unseen"]
					],


				},
				characterTitle: {
					"nsfzxys_m1901_cwh": "伟大的曹总",
					"nsfzxys_m1902_chy": "个人能力",
					"nsfzxys_m1904_swq": "水天一色",
					"nsfzxys_m1906_hlh": "总书记",
					"nsfzxys_m1911_lhy": "数学之后",
					"nsfzxys_m1912_lq": "厂公",
					"nsfzxys_m1915_mhr": "肉弹战车",
					"nsfzxys_m1917_syf": "数学之王",
					"nsfzxys_m1920_wcy": "造假不成沦为笑柄",
					"nsfzxys_m1921_wjy": "大队长",
					"nsfzxys_m1923_xzj": "进击的矮子",
					"nsfzxys_m1924_ywq": "猿大神",
					"nsfzxys_m1927_zrh": "大中锋",
					"nsfzxys_m1928_zts": "好好学生",
					"nsfzxys_m1929_zyp": "大智若笨",
					"nsfzxys_m1931_zzz": "白面郎君",
					"nsfzxys_m1933_hy": "女班长",
					"nsfzxys_m1937_ysh": "财政大权",
					"nsfzxys_m1940_yyn": "郡主娘娘",

					"nsfzxys_t01_wl": "小黑蛋",
					"nsfzxys_t03_ljf": "离职的名师",
					"nsfzxys_t08_zjp": "教务处主任",
					"nsfzxys_t10_jy": "女高音",

					"nsfzxys_m0729_qq": "一枝红杏",
					"nsfzxys_m1818_tss": "天生怪才",
					"nsfzxys_m1828_yq": "卡巴杀手",

					"nsfzxys_g04_swq": "设计师",

				},
				translate: {
					"nsfzxys_nineteen1": "十九班①",
					"nsfzxys_nineteen2": "十九班②",
					"nsfzxys_teacher": "老师",
					"nsfzxys_schoolmate": "同校",
					"nsfzxys_high": "高中部",
					"nsfzxys_foreign": "外校",
					"nsfzxys_sp": "SP",
					"nsfzxys_xseries": "X系列",
					"nsfzxys_god": "神将",

					"nsfzxys_m1901_cwh": "曹苇航",
					"nsfzxys_m1902_chy": "陈浩宇",
					"nsfzxys_m1903_cqc": "陈强超",
					"nsfzxys_m1904_swq": "单文祺",
					"nsfzxys_m1905_fwj": "范文觉",
					"nsfzxys_m1906_hlh": "衡砺寒",
					"nsfzxys_m1907_hrz": "侯锐泽",
					"nsfzxys_m1908_lzx": "李峙轩",
					"nsfzxys_m1909_lrm": "林睿明",
					"nsfzxys_m1910_lcy": "刘成禹",
					"nsfzxys_m1911_lhy": "刘弘洋",
					"nsfzxys_m1912_lq": "刘强",
					"nsfzxys_m1913_lry": "陆润宇",
					"nsfzxys_m1914_lcs": "吕崇杉",
					"nsfzxys_m1915_mhr": "马恒瑞",
					"nsfzxys_m1916_mjh": "缪景昊",
					"nsfzxys_m1917_syf": "施亦凡",
					"nsfzxys_m1918_sy": "孙钰",
					"nsfzxys_m1919_tyf": "唐一凡",
					"nsfzxys_m1920_wcy": "王淳扬",
					"nsfzxys_m1921_wjy": "王靖禹",
					"nsfzxys_m1922_wyx": "王誉晓",
					"nsfzxys_m1923_xzj": "徐子介",
					"nsfzxys_m1924_ywq": "袁伟强",
					"nsfzxys_m1925_zqy": "臧全晔",
					"nsfzxys_m1926_zrb": "张瑞彬",
					"nsfzxys_m1927_zrh": "张瑞涵",
					"nsfzxys_m1928_zts": "张天石",
					"nsfzxys_m1929_zyp": "张钰朋",
					"nsfzxys_m1930_zzh": "张哲华",
					"nsfzxys_m1931_zzz": "张至正",
					"nsfzxys_m1932_zyx": "宗雨昕",
					"nsfzxys_m1933_hy": "黄玥",
					"nsfzxys_m1934_jy": "蒋元",
					"nsfzxys_m1935_txy": "唐小雅",
					"nsfzxys_m1936_xss": "徐舒舒",
					"nsfzxys_m1937_ysh": "杨舒桦",
					"nsfzxys_m1938_yyp": "叶雨培",
					"nsfzxys_m1939_yhx": "俞涵溪",
					"nsfzxys_m1940_yyn": "俞一诺",
					"nsfzxys_m1941_zjh": "张君慧",
					"nsfzxys_m1942_gsy": "郭松洋",

					"nsfzxys_t01_wl": "王磊",
					"nsfzxys_t03_ljf": "陆建芳",
					"nsfzxys_t05_dr": "丁荣",
					"nsfzxys_t08_zjp": "朱俊萍",
					"nsfzxys_t10_jy": "金艳",
					"nsfzxys_t11_sy": "孙音",
					"nsfzxys_t12_ly": "李岩",
					"nsfzxys_t16_thj": "汤海娟",
					"nsfzxys_t19_zql": "赵巧兰",
					"nsfzxys_t23_wm": "王猛",
					"nsfzxys_t30_zjb": "张建波",

					"nsfzxys_m0501_cyx": "曹钰鑫",
					"nsfzxys_m052x_hy": "贺烨",
					"nsfzxys_m0526_jta": "景天爱",
					"nsfzxys_m072x_lyx": "栗雨璇",
					"nsfzxys_m0729_qq": "秦琦",
					"nsfzxys_m0816_tw": "童伟",
					"nsfzxys_m1325_tyd": "唐艺丹",
					"nsfzxys_m171x_xyx": "徐宇翔",
					"nsfzxys_m1801_ctc": "常天丞",
					"nsfzxys_m1804_gyl": "高雨亮",
					"nsfzxys_m1811_lhy": "李航宇",
					"nsfzxys_m1814_lym": "刘一鸣",
					"nsfzxys_m1817_shn": "邵汉宁",
					"nsfzxys_m1818_tss": "屠世盛",
					"nsfzxys_m1826_yy": "杨旸",
					"nsfzxys_m1828_yq": "于谦",
					"nsfzxys_m1839_wzw": "王梓湾",

					"nsfzxys_h01_gj": "葛军",
					"nsfzxys_h02_zwl": "张文理",

					"nsfzxys_f01_wxy": "王笑弈",
					"nsfzxys_f02_txc": "谭晓宸",
					"nsfzxys_f03_zh": "周涵",

					"nsfzxys_sp01_syf": "施亦凡",
					"nsfzxys_sp03_mhr": "马恒瑞",
					"nsfzxys_sp04_swq": "单文祺",
					"nsfzxys_x02_dyb": "戴元本",

					"nsfzxys_g02_syf": "施亦凡",
					"nsfzxys_g03_xss": "徐舒舒",
					"nsfzxys_g04_swq": "单文祺",
					"nsfzxys_g05_zrh": "张瑞涵",
					"nsfzxys_g06_hlh": "衡砺寒",
					"nsfzxys_g07_lhy": "刘弘洋",
					"nsfzxys_g08_wjy": "王靖禹",
					"nsfzxys_g09_wl": "王磊",

				},
				dynamicTranslate: {
					nsfzxys_chaoyue: function(player) {
						if (player.storage.nsfzxys_jueshi == true) return '其他角色的出牌阶段开始时，你可以对该角色或其上下家使用一张【杀】。若如此做，你摸一张牌，不能使用手牌，<span class="bluetext">其他角色与你计算距离时+1，</span>直至回合结束。<span class="bluetext">你的出牌阶段开始时，你获得一张【杀】。</span>你使用【杀】时，<span class="bluetext">所有其他角色的防具和技能全部失效直至此【杀】结算完毕</span>。';
						return "其他角色的出牌阶段开始时，你可以对该角色或其上下家使用一张【杀】。若如此做，你摸一张牌，不能使用手牌，直至回合结束。你使用【杀】时无视目标角色的防具。";
					},
					nsfzxys_yixiang: function(player) {
						if (typeof player.storage.nsfzxys_yixiang == 'boolean') {
							if (player.storage.nsfzxys_yixiang) {
								return '锁定技，转换技，当你受到伤害时，若伤害来源为<span class="bluetext">女性</span>，你摸两张牌并取消此伤害；若不为，你也可以选择切换至另一项。';
							} else {
								return '锁定技，转换技，当你受到伤害时，若伤害来源为<span class="bluetext">男性</span>，你摸两张牌并取消此伤害；若不为，你也可以选择切换至另一项。';
							}
						}
						return "锁定技，转换技，当你受到伤害时，若伤害来源为男性/女性，你摸两张牌并取消此伤害；若不为，你也可以选择切换至另一项。";
					},
					nsfzxys_zeyou: function(player) {
						if (player.storage.nsfzxys_keyan == true) return '摸牌阶段，你可以放弃摸牌，改为从牌堆顶展示三张牌并获得。直至回合结束，若这些牌的点数和：不大于18，你获得技能【强援】；不小于27：你获得技能【巧证】；<span class="bluetext">否则你获得技能【质论】</span>。';
						return "摸牌阶段，你可以放弃摸牌，改为从牌堆顶展示三张牌并获得。直至回合结束，若这些牌的点数和：不大于18，你获得技能【强援】；不小于27：你获得技能【巧证】。";
					},
					nsfzxys_chaoxian: function(player) {
						if (player.hasSkill('nsfzxys_chaoxian_ready')) return '觉醒技，<span class="bluetext">以下两项满足一项：</span>1.【极星】没有可以使用的牌；2.【数科】没有可以获得的技能，<span class="bluetext">你的下一个回合开始时，你获得本局游戏胜利！。</span>';
						return "觉醒技，你的回合开始前，若以下两项满足任意一项：1.【极星】没有可以使用的牌；2.【数科】没有可以获得的技能，你获得本局游戏胜利。";
					},
				},
			},
			card: {
				card: {},
				translate: {},
				list: [],
			},
			skill: {
				skill: {
					"nsfzxys_losehp1": {
						trigger: {
							target: 'useCardToTargeted',
						},
						filter: function(event, player) {
							if (player == event.player) return false;
							if (player.hp < 1) return false;

							var card = event.card;
							if (get.type(card) == 'basic' || get.type(card) == 'trick') return true;
							return false;
						},
						prompt: function(event, player) {
							return '是否失去一点体力并无效【' + get.translation(event.card) + '】？';
						},
						check: function(event, player) {
							if (event.getParent().excluded.contains(player)) return false;
							if (get.tag(event.card, 'respondSha')) {
								if (player.countCards('h', {
										name: 'sha'
									}) == 0) {
									return true;
								}
							} else if (get.tag(event.card, 'respondShan')) {
								if (player.countCards('h', {
										name: 'shan'
									}) == 0) {
									return true;
								}
							} else if (get.tag(event.card, 'damage')) {
								if (player.countCards('h') < 2) return true;
							}
							return false;
						},
						content: function() {
							'step 0'
							player.loseHp(1);
							'step 1'
							trigger.getParent().excluded.add(player);
							game.delay();
						},
						ai: {
							threaten: 0.8,
						},
					},
					"nsfzxys_losehp2": {
						trigger: {
							target: 'useCardToTarget',
						},
						filter: function(event, player) {
							if (player == event.player) return false;
							if (player.hp < 1) return false;

							var card = event.card;
							if (get.type(card, 'trick') != 'equip') return true;
							return false;
						},
						prompt: function(event, player) {
							return '是否失去一点体力并取消【' + get.translation(event.card) + '】？';
						},
						check: function(event, player) {
							if (event.getParent().excluded.contains(player)) return false;
							if (get.tag(event.card, 'respondSha')) {
								if (player.countCards('h', {
										name: 'sha'
									}) == 0) {
									return true;
								}
							} else if (get.tag(event.card, 'respondShan')) {
								if (player.countCards('h', {
										name: 'shan'
									}) == 0) {
									return true;
								}
							} else if (get.tag(event.card, 'damage')) {
								if (player.countCards('h') < 2) return true;
							}
							return false;
						},
						content: function() {
							'step 0'
							player.loseHp(1);
							'step 1'
							if (!event.isMine()) game.delayx();
							trigger.getParent().targets.remove(player);
							trigger.getParent().triggeredTargets2.remove(player);
							'step 2'
							game.delay();
						},
						ai: {
							threaten: 0.8,
						},
					},
					"nsfzxys_losehp3": {
						trigger: {
							player: "damageBefore",
						},
						prompt: function(event, player) {
							return '是否失去一点体力并取消此伤害？';
						},
						frequent: true,
						content: function() {
							'step 0'
							trigger.cancel();
							'step 1'
							player.loseHp();
						},
						ai: {
							threaten: 0.6,
						},
					},
					"nsfzxys_forbid": {
						charlotte: true,
						forced: true,
						mark: true,
						debuff: true,
						marktext: "禁",
						mod: {
							cardEnabled2: function(card) {
								return false;
							},
						},
						intro: {
							name: "禁牌",
							content: "不能使用或打出牌",
						},
						ai: {
							neg: true,
							threaten: 8,
						},
					},

					// 19
					"nsfzxys_jiancha": {
						trigger: {
							global: ['phaseJieshuBegin'],
						},
						init: function(player) {
							if (!player.storage.nsfzxys_jiancha) player.storage.nsfzxys_jiancha = [];
							if (!player.storage.nsfzxys_jiancha_unused) player.storage.nsfzxys_jiancha_unused = true;
						},
						marktext: "检",
						intro: {
							mark: function(dialog, content, player, storage, skill) {
								if (!player.storage.nsfzxys_jiancha_unused || !player.storage.nsfzxys_jiancha) return '【检查】不可使用';
								dialog.addAuto(player.storage.nsfzxys_jiancha);
							},
							onunmark: function(storage, player) {
								if (storage && storage.length) {
									player.$throw(storage, 1000);
									game.cardsDiscard(storage);
									game.log(storage, '被置入了弃牌堆');
									storage.length = 0;
								}
							},
						},
						ondisable: true,
						onremove: function(player) {
							if (player.storage.nsfzxys_jiancha.length) {
								player.$throw(player.storage.nsfzxys_jiancha, 1000);
								game.log(player.storage.nsfzxys_jiancha, '被置入了弃牌堆');
								game.cardsDiscard(player.storage.nsfzxys_jiancha);
								player.storage.nsfzxys_jiancha = [];
								player.unmarkSkill('nsfzxys_jiancha');
							}
							//player.storage.nsfzxys_jiancha_unused = true;
						},
						filter: function(event, player) {
							if (event.player == player) return false;
							return player.storage.nsfzxys_jiancha_unused;
						},
						check: function(event, player) {
							if (player.storage.nsfzxys_jiancha.length > 2) {
								if (get.attitude(player, event.player) > 0 && (event.player.hp > 2 || event.player.hasSkill('nodamage'))) return true;
							}
							return get.attitude(player, event.player) < 0 && !event.player.hasSkill('nodamage');
						},
						prompt2: function(event, player) {
							var suits = [];
							for (var i = 0; i < player.storage.nsfzxys_jiancha.length; i++) {
								suits.add(get.suit(player.storage.nsfzxys_jiancha[i]));
							}
							return '令' + get.translation(event.player) + '将一张花色不为' + get.translation(suits) + '的手牌置于' + get.translation(player) + '的武将牌上';
						},
						content: function() {
							'step 0'
							var suits = [];
							for (var i = 0; i < player.storage.nsfzxys_jiancha.length; i++) {
								suits.add(get.suit(player.storage.nsfzxys_jiancha[i]));
							}
							trigger.player.chooseCard(1, 'h', '将一张花色不为' + get.translation(suits) + '的手牌置于' + get.translation(player) + '的武将牌上', function(card) {
								return !_status.event.suits.contains(get.suit(card));
							}).set('ai', function(card) {
								if (trigger.player.hasSkillTag('nodamage')) return 0;
								if (player.storage.nsfzxys_jiancha.length > 2 && trigger.player.hp > 2 && _status.event.att > 0) return 0;
								if (trigger.player.hp < 2) {
									return 8.1 - get.value(card)
								}
								return 6.1 - get.value(card);
							}).set('suits', suits).set('att', get.attitude(trigger.player, player));
							'step 1'
							if (result.bool && result.cards.length) {
								trigger.player.$give(result.cards, player, false);
								trigger.player.lose(result.cards, ui.special, 'toStorage');
								player.storage.nsfzxys_jiancha = player.storage.nsfzxys_jiancha.concat(result.cards);
								player.syncStorage('nsfzxys_jiancha');
								player.markSkill('nsfzxys_jiancha');
								game.log(player, '将', result.cards, '置于武将牌上');
								event.finish();
							} else {
								if (player.storage.nsfzxys_jiancha.length > 0) {
									trigger.player.gain(player.storage.nsfzxys_jiancha, 'giveAuto', 'log', 'fromStorage', player);
									player.storage.nsfzxys_jiancha = [];
									player.syncStorage('nsfzxys_jiancha');
									player.unmarkSkill('nsfzxys_jiancha');
								}
								player.storage.nsfzxys_jiancha_unused = false;
							}
							'step 2'
							trigger.player.damage();
						},
						group: ["nsfzxys_jiancha_reset"],
						subSkill: {
							reset: {
								trigger: {
									player: 'phaseZhunbeiBegin'
								},
								forced: true,
								sub: true,
								silent: true,
								content: function() {
									player.unmarkSkill('nsfzxys_jiancha');
									player.storage.nsfzxys_jiancha_unused = true;
								}
							},
						},
						ai: {
							expose: 0.3,
						},
						action_tag: {
							overall: 4,
							damage: 1,
							discard: 1.5,
						},
					},
					"nsfzxys_danda": {
						trigger: {
							global: 'useCardToTargeted'
						},
						filter: function(event, player) {
							return event.card.name == 'sha' && player.hasCard(function(card) {
								return get.type(card) == 'basic';
							}, 'h') && event.player.inRange(player) && player != _status.currentPhase;
						},
						check: function(event, player) {
							return get.attitude(player, event.target) >= 1 && get.attitude(player, event.player) <= 0 && player.countCards('h', function(card) {
								return get.value(card) < (event.target == player ? 8 : 6);
							});
						},
						logTarget: "player",
						content: function() {
							'step 0'
							//var evt = 
							event.source = trigger.player;
							player.chooseToDiscard('h', "单打：请选择要弃置的牌", 1, true, function(card) {
								return get.type(card) == 'basic';
							}).set('ai', function(card) {
								if (trigger.target == player) return 8 - get.value(card);
								return 6 - get.value(card);
							});
							'step 1'
							if (result.bool && result.cards.length > 0) {
								event.card = result.cards[0];
								event.type = 2;
								switch (get.name(event.card)) {
									case 'sha':
										{
											event.type = 1;
											break;
										}
									case 'shan':
										{
											event.type = 3;
											break;
										}
									default:
										{
											event.type = 2;
											break;
										}
								};
								event.source.chooseToRespond({
									name: 'shan'
								}).set('ai', function(card) {
									if (get.attitude(_status.currentPhase, _status.event.source < 1)) return 0;
									if (_status.event.type == 1 && _status.event.source.hp <= 2) {
										return 9 - get.value(card);
									} else if (_status.event.type == 3 && _status.event.source.hasCard(function(card2) {
											return get.value(card2) > 5.9;
										}, 'he')) {
										return 7 - get.value(card);
									} else if (_status.event.type == 2 && _status.event.cplayer.countCards('h') < 3) {
										return 8 - get.value(card);
									}
									return 0;
								}).set('autochoose', lib.filter.autoRespondShan).set('source', event.source).set('type', event.type).set('cplayer', player);
							} else {
								event.finish();
							}
							'step 2'
							if (result.bool) {
								trigger.getParent().excluded.add(trigger.target);
							} else {
								if (event.type == 1) {
									trigger.player.damage(2).set('card', event.card).set('cards', [event.card]).set('nature', get.nature(event.card));
								} else if (event.type == 2) {
									trigger.target.draw(2);
									player.draw(2);
								} else {
									player.gainPlayerCard(trigger.player, 'he', 1);
									var sha = trigger.cards.filterInD('od');
									if (sha) player.gain(sha, 'gain2');
								}
							}
						},
						ai: {
							threaten: 1.1,
							expose: 0.4,
						},
						action_tag: {
							overall: 3,
							demand_sha: 2,
							active_defend: 2,
						}
					},
					"nsfzxys_fenqi": {
						unique: true,
						enable: 'phaseUse',
						mark: true,
						skillAnimation: true,
						limited: true,
						animationColor: 'orange',
						intro: {
							content: 'limited'
						},
						init: function(player) {
							if (typeof player.storage.nsfzxys_fenqi != 'boolean') player.storage.nsfzxys_fenqi = false;
						},
						filter: function(event, player) {
							return (!player.storage.nsfzxys_fenqi);
						},
						content: function() {
							'step 0'
							player.awakenSkill('nsfzxys_fenqi');
							'step 1'
							event.cards = get.cards(5);
							game.cardsGotoOrdering(event.cards);
							event.ongoing = true;
							player.showCards(event.cards);
							for (var i = 0; i < 5; i++) {
								if (get.name(event.cards[i]) == 'sha') event.ongoing = false;
							}
							'step 2'
							if (event.ongoing) {
								var card2 = get.cards(1)[0];
								event.cards.add(card2);
								player.showCards(event.cards);
								game.cardsGotoOrdering(card2);
								if (get.name(card2) == 'sha') {
									event.ongoing = false;
								} else {
									game.delay(1);
									event.redo();
								}
							}
							'step 3'
							player.gain(event.cards, 'gain2');
							player.storage.nsfzxys_fenqi_af = event.cards;
							player.addTempSkill('nsfzxys_fenqi_af');
						},
						ai: {
							order: function(item, player) {
								if (player.hp < 2) return 99;
								if (player.hp == 2 && player.countCards('h') <= 2) return 8;
								return 4;
							},
							result: {
								player: function(player) {
									if (player.hp <= 2 || player.countCards('h') <= 2) return 10;
									return 0;
								}
							},
						},
						action_tag: {
							overall: 15,
							limited: 1,
							draw: 6,
						},
					},
					"nsfzxys_fenqi_af": {
						mark: true,
						intro: {
							mark: function(dialog, storage, player, skill) {
								if (!player.storage.nsfzxys_fenqi_af) return;
								dialog.add('获得的牌（点击【奋起】按钮查看手牌中剩余的牌）');
								dialog.addSmall(player.storage.nsfzxys_fenqi_af);
								return;
							},
						},
						mod: {
							targetInRange: function(card, player, target) {
								if (card.name == 'sha' && target != player) {
									return true;
								}
							},
							ignoredHandcard: function(card, player) {
								if (player.storage.nsfzxys_fenqi_af && player.storage.nsfzxys_fenqi_af.contains(card)) {
									return true;
								}
							},
							cardDiscardable: function(card, player, name) {
								if (name == 'phaseDiscard' && player.storage.nsfzxys_fenqi_af && player.storage.nsfzxys_fenqi_af.contains(card)) {
									return false;
								}
							},
						},
						onremove: function(player, skill) {
							delete player.storage.nsfzxys_fenqi_af;
						},
						enable: 'phaseUse',
						filter: function(event, player) {
							if (!Array.isArray(player.storage.nsfzxys_fenqi_af)) return false;
							return player.countCards('h', function(card) {
								return player.storage.nsfzxys_fenqi_af.contains(card);
							}) > 0;
						},
						filterCard: function(card, player) {
							if (!Array.isArray(player.storage.nsfzxys_fenqi_af)) return false;
							return player.storage.nsfzxys_fenqi_af.contains(card);
						},
						prompt: '手牌中剩余的牌',
						selectCard: 99,
						discard: false,
						lose: false,
						delay: false,
						pop: false,
						silent: true,
						complexSelect: true,
						complexCard: true,
						charlotte: true,
						locked: true,
						content: function() {
							game.delay(1);
						},
					},
					"nsfzxys_zhilun": {
						enable: "phaseUse",
						usable: 1,
						filterTarget: function(card, player, target) {
							return player != target;
						},
						content: function() {
							event.num = 0
							var cards = get.cards(Math.max(1, player.getDamagedHp()));
							game.cardsGotoOrdering(cards);
							player.showCards(cards, '质论');
							var cardsx = [];
							for (var i = 0; i < cards.length; i++) {
								var num2 = get.number(cards[i])
								if (nsfzxys_isPrime(num2)) {
									cardsx.push(cards[i]);
								} else {
									event.num++;
								}
							}
							if (cardsx.length > 0) player.gain(cardsx, 'gain2');
							if (event.num > 0) target.damage(event.num);
						},
						ai: {
							order: 10,
							result: {
								target: function(player, target) {
									var eff = get.damageEffect(target, player);
									if (target.hasSkillTag('nodamage')) return eff * 0.3;
									return eff;
								}
							},
							threaten: 0.8,
						},
						action_tag: {
							overall: 4,
							damage: 0.75,
							draw: 0.75,
							deterrence: 1,
						},
					},
					"nsfzxys_bianliang": {
						trigger: {
							target: 'useCardToTarget',
						},
						filter: function(event, player) {
							if (player == event.player) return false;
							if (player.hp < 1) return false;

							if (!event.target) return false;
							if (!game.hasPlayer(function(current) {
									return !(event.targets.contains(current));
								})) return false;

							var card = event.card;
							if (get.type(card, 'trick') != 'equip') return true;
							return false;
						},
						direct: true,
						content: function() {
							'step 0'
							player.chooseTarget(get.prompt('nsfzxys_bianliang'), '改变' + get.translation(trigger.card) + '的目标', function(card, player, target) {
								var trigger = _status.event.getTrigger();
								return !trigger.targets.contains(target);
							}).set('ai', function(target) {
								if (trigger.excluded.contains(player)) return 0;
								if (get.effect(player, _status.event.card, trigger.player, player) >= 0) return 0;

								var check = 1 - get.attitude(player, target);
								if (check <= 0) return 0;

								var card1 = _status.event.card;
								var eff = get.effect(target, card1, trigger.player, player);

								if (get.tag(card1, 'respondSha')) {
									if (player.countCards('h', {
											name: 'sha'
										}) == 0) {
										return Math.max(0, eff) + check;
									}
								} else if (get.tag(card1, 'respondShan')) {
									if (player.countCards('h', {
											name: 'shan'
										}) == 0) {
										return Math.max(0, eff) + check;;
									}
								} else if (get.tag(card1, 'damage') && get.name(card1) != 'huogong') {
									return Math.max(0, eff);
								} else if (!get.tag(card1, 'damage') && !player.isDamaged) {
									return eff;
								}
								return 0;
							}).set('card', trigger.card);
							'step 1'
							if (result.bool) {
								player.loseHp(1);
								if (!event.isMine()) game.delayx();
								event.target = result.targets[0];
								trigger.getParent().targets.remove(player);
								trigger.getParent().triggeredTargets2.remove(player);
								trigger.getParent().targets.push(event.target);
								player.line(event.target);
								player.logSkill('nsfzxys_bianliang', event.target);
							} else {
								event.finish();
							}
							game.delay();
						},
						ai: {
							threaten: 0.6,
						},
						action_tag: {
							overall: 4,
							loseHp_defend: 1,
							deterrence: 1,
						},
					},
					"nsfzxys_doudou": {
						trigger: {
							player: 'useCard',
							target: 'useCardToTargeted',
						},
						usable: 1,
						filter: function(event, player) {
							if (player.hasSkill('nsfzxys_doudou_db')) return false;
							if (event.name == 'useCard') return true;
							return (event.player != player);
						},
						prompt: function(event, player) {
							var num = 1;
							if (Array.isArray(player.storage.nsfzxys_niangqiang) && player.storage.nsfzxys_niangqiang.length > 0) num += 1;
							if (event.name == 'useCard') return '豆豆：使用了牌，是否摸' + get.cnNumber(num) + '张牌？';
							num += 1;
							return '豆豆：成为了' + get.translation(event.card) + '的目标，是否摸' + get.cnNumber(num) + '张牌？';
						},
						content: function() {
							'step 0'
							var num = 1;
							if (trigger.name != 'useCard') num += 1;
							if (Array.isArray(player.storage.nsfzxys_niangqiang) && player.storage.nsfzxys_niangqiang.length > 0) num += 1;
							player.draw(num);

							'step 1'
							if (player != _status.currentPhase) {
								player.addTempSkill('nsfzxys_doudou_db');
								trigger.isdou = true;
							}
						},
						action_tag: {
							overall: 5,
							draw: 2.5,
							deterrence: 0.5,
						},
					},
					"nsfzxys_doudou_db": {
						trigger: {
							target: 'useCardToTargeted',
						},
						forced: true,
						silent: true,
						charlotte: true,
						filter: function(event, player) {
							if (event.isdou) return false;
							return player.countCards('h') > 0;
						},
						content: function() {
							player.chooseToDiscard(1, 'h', true);
						},
						ai: {
							neg: true,
							threaten: 8,
						}
					},
					"nsfzxys_niangqiang": {
						unique: true,
						enable: 'phaseUse',
						animationColor: 'key',
						skillAnimation: true,
						limited: true,
						filterCard: function(card) {
							/*var suit = get.suit(card);
							for (var i = 0; i < ui.selected.cards.length; i++) {
								if (get.suit(ui.selected.cards[i]) == suit) return false;
							}*/
							return true;
						},
						intro: {
							content: 'cards',
							onunmark: function(storage, player) {
								if (storage && storage.length) {
									player.$throw(storage, 1000);
									game.cardsDiscard(storage);
									game.log(storage, '被置入了弃牌堆');
									storage.length = 0;
								}
								if (player.storage.nsfzxys_niangqiang_sex) {
									player.sex = player.storage.nsfzxys_niangqiang_sex;
									game.log(player, '的性别变为了', player.sex);
								}
							},
						},
						selectCard: [1, 2],
						discard: false,
						lose: false,
						delay: 0,
						check: function(card) {
							return 10 - get.value(card);
						},
						init: function(player) {
							if (!player.storage.nsfzxys_niangqiang) player.storage.nsfzxys_niangqiang = [];
							var name = player.name;
							if (!lib.character[name]) {
								name = player.name1;
							}
							if (!player.storage.nsfzxys_niangqiang_sex) {
								if (lib.character[name] && lib.character[name][0] && ['female', 'male', 'none'].contains(lib.character[name][0])) {
									player.storage.nsfzxys_niangqiang_sex = lib.character[name][0];
								} else {
									player.storage.nsfzxys_niangqiang_sex = 'male';
								}
							}
						},
						content: function() {
							'step 0'
							player.lose(cards, ui.special, 'toStorage');
							player.storage.nsfzxys_niangqiang = player.storage.nsfzxys_niangqiang.concat(cards);
							player.syncStorage('nsfzxys_niangqiang');
							player.markSkill('nsfzxys_niangqiang');
							player.sex = 'female';
							game.log(player, '将', cards, '置于武将牌上');
							'step 1'
							game.log(player, '的性别变为了', player.sex);
							player.awakenSkill('nsfzxys_niangqiang', true);
							player.addSkill('nsfzxys_niangqiang_af');
						},
						ai: {
							order: 15,
							result: {
								player: function(player) {
									return 10;
								}
							}
						},
						action_tag: {
							combo: 1,
							limited: 1,
						},
					},
					"nsfzxys_niangqiang_af": {
						trigger: {
							player: 'phaseZhunbeiBegin'
						},
						charlotte: true,
						forced: true,
						filter: function(event, player) {
							return (Array.isArray(player.storage.nsfzxys_niangqiang) && player.storage.nsfzxys_niangqiang.length > 0);
						},
						content: function() {
							var cards = player.storage.nsfzxys_niangqiang;
							var card = cards.randomGet();
							player.$throw(card, 1000);
							player.storage.nsfzxys_niangqiang.remove(card);
							game.cardsDiscard(card);
							player.syncStorage('nsfzxys_niangqiang');

							if (player.storage.nsfzxys_niangqiang.length < 1) {
								player.unmarkSkill('nsfzxys_niangqiang');
								player.removeSkill('nsfzxys_niangqiang_af');
								//delete player.storage.nsfzxys_niangqiang;
							} else {
								player.markSkill('nsfzxys_niangqiang');
							}
						},
						ondisable: true,
						onremove: function(player) {
							if (player.storage.nsfzxys_niangqiang.length) {
								game.log(player.storage.nsfzxys_niangqiang, '被置入了弃牌堆');
								game.cardsDiscard(player.storage.nsfzxys_niangqiang);
								player.storage.nsfzxys_niangqiang = [];
								player.unmarkSkill('nsfzxys_niangqiang');
							}
						},
					},
					"nsfzxys_chiren": {
						trigger: {
							player: "phaseUseBegin",
						},
						init: function(player) {
							if (!player.storage.nsfzxys_chiren) player.storage.nsfzxys_chiren = [];
						},
						marktext: "仁",
						intro: {
							content: "cards",
						},
						direct: true,
						filter: function(event, player) {
							return player.countCards('h', function(card) {
								return get.tag(card, 'damage');
							}) > 0;
						},
						content: function() {
							'step 0'
							player.storage.nsfzxys_chiren = [];
							player.chooseCard([0, 4], function(card, player) {
								return get.tag(card, 'damage');
							}).set('ai', function(card) {
								if (ui.selected.cards.length < 2) return true;
								if (player.countCards('h') > 4 && ui.selected.cards.length >= 2) return false;
								if (game.hasPlayer(function(current) {
										if (get.attitude(player, current) >= 0) return false;
										var base = player.countCards('h', function(card) {
											return (get.tag(card, 'damage') && player.canUse(card, current));
										});
										return (current.hp <= Math.min(base, 2));
									})) return false;
								return true;
							}).set('prompt', '选择至多四张伤害牌并展示');
							'step 1'
							if (result.bool && result.cards.length > 0) {
								player.showCards(result.cards);
								player.draw(result.cards.length);
								player.markSkill('nsfzxys_chiren');
								if (result.cards.length > 2) {
									player.addTempSkill('nsfzxys_chiren_db', 'phaseUseEnd');
								}
								for (var i = 0; i < result.cards.length; i++) {
									if (!player.storage.nsfzxys_chiren.contains(result.cards[i])) {
										player.storage.nsfzxys_chiren.push(result.cards[i]);
									}
								}
							} else {
								player.storage.nsfzxys_chiren = [];
							}
						},
						mod: {
							ignoredHandcard: function(card, player) {
								if (player.storage.nsfzxys_chiren) {
									if (player.storage.nsfzxys_chiren.contains(card)) return true;
									for (var i = 0; i < player.storage.nsfzxys_chiren.length; i++) {
										var card2 = player.storage.nsfzxys_chiren[i];
										if (get.number(card) == get.number(card2) && get.suit(card) == get.suit(card2) && get.name(card) == get.name(card2) && get.nature(card) == get.nature(card2)) {
											return true;
										}
									}
								}
							},
							cardDiscardable: function(card, player, name) {
								if (name == 'phaseDiscard' && player.storage.nsfzxys_chiren) {
									if (player.storage.nsfzxys_chiren.contains(card)) return false;
									for (var i = 0; i < player.storage.nsfzxys_chiren.length; i++) {
										var card2 = player.storage.nsfzxys_chiren[i];
										if (get.number(card) == get.number(card2) && get.suit(card) == get.suit(card2) && get.name(card) == get.name(card2) && get.nature(card) == get.nature(card2)) {
											return false;
										}
									}
								}
							},
						},
						group: ["nsfzxys_chiren_reset"],
						subSkill: {
							reset: {
								trigger: {
									player: "phaseAfter",
								},
								silent: true,
								content: function() {
									player.storage.nsfzxys_chiren = [];
									player.unmarkSkill('nsfzxys_chiren');
								},
								sub: true,
								forced: true,
								popup: false,
							},
						},
						action_tag: {
							overall: 5,
							draw: 3,
							negative: 0.5,
						},
					},
					"nsfzxys_chiren_db": {
						charlotte: true,
						debuff: true,
						mod: {
							cardEnabled: function(card) {
								if (card.name == 'sha') return false;
							},
						},
						ai: {
							neg: true,
						},
					},
					"nsfzxys_egao": {
						trigger: {
							player: 'phaseDrawEnd'
						},
						filter: function(event, player) {
							return player.countCards('h', 'sha') == 0;
						},
						content: function() {
							'step 0'
							player.showHandcards();
							//player.showCards(player.getCards('h'));
							'step 1'
							player.draw(1);
						},
						action_tag: {
							overall: 1,
							draw: 1,
						},
					},
					"nsfzxys_tineng": {
						trigger: {
							player: 'useCardToTargeted',
						},
						init: function(player) {
							player.storage.nsfzxys_tineng = 0
						},
						intro: {
							content: '可以额外使用#张【杀】'
						},
						logTarget: 'target',
						check: function(event, player) {
							return get.attitude(player, event.target) <= 0;
						},
						filter: function(event, player) {
							if (event.card.name != 'sha') return false;
							return true;
						},
						content: function() {
							'step 0'
							var next = trigger.target.chooseToRespond({
								name: 'sha'
							});
							next.set('ai', function(card) {
								var evt = _status.event.triggername;
								if (evt.target.hasSkillTag('nodamage')) return 0;
								return 11 - get.value(card);
							});
							next.autochoose = lib.filter.autoRespondSha;
							next.set('triggername', trigger);
							'step 1'
							if (result.bool) {
								player.draw();
								trigger.getParent().excluded.add(trigger.target);
								player.storage.nsfzxys_tineng++;
								player.markSkill('nsfzxys_tineng');
							} else {
								trigger.target.damage();
							}
						},
						group: "nsfzxys_tineng_end",
						subSkill: {
							end: {
								trigger: {
									global: 'phaseJieshuBegin'
								},
								forced: true,
								sub: true,
								popup: false,
								silent: true,
								filter: function(event, player) {
									return player.storage.nsfzxys_tineng > 0;
								},
								content: function() {
									'step 0'
									player.storage.nsfzxys_tineng = 0;
									player.unmarkSkill('nsfzxys_tineng');
								},
							},
						},
						mod: {
							cardUsable: function(card, player, num) {
								if (card.name == 'sha') return num + player.storage.nsfzxys_tineng;
							},
						},
						action_tag: {
							overall: 4,
							sha_bonus: 2,
							change: 0.5,
						}
					},
					"nsfzxys_youxue": {
						mod: {
							targetEnabled: function(card, player, target) {
								if (['shandian', 'nanman', 'wanjian'].contains(get.name(card))) return false;
							},
						},
						trigger: {
							global: ['useCardAfter'],
						},
						filter: function(event, player) {
							if (!player.isDamaged()) return false;
							return ['nanman', 'wanjian'].contains(get.name(event.card));
						},
						forced: true,
						content: function() {
							player.recover();
						},
						action_tag: {
							overall: 2,
							direct_defend: 1,
							recover: 0.5,
						}
					},
					"nsfzxys_tihai": {
						enable: "phaseUse",
						usable: 1,
						chooseButton: {
							dialog: function(event, player) {
								var list = [
									'体力值小于你的角色',
									'体力值大于你的角色',
								];
								var choiceList = ui.create.dialog('题海：请选择一项', 'forcebutton', 'hidden');
								for (var i = 0; i < list.length; i++) {
									var str = '<div class="popup text" style="width:calc(100% - 10px);display:inline-block">';
									var bool = lib.skill.nsfzxys_tihai.chooseButton.filter({
										link: i
									}, player);
									if (!bool) str += '<div style="opacity:0.5">';
									str += list[i];
									if (!bool) str += '</div>';
									str += '</div>';
									var next = choiceList.add(str);
									next.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
									next.firstChild.link = i;
									for (var j in lib.element.button) {
										next[j] = lib.element.button[i];
									}
									choiceList.buttons.add(next.firstChild);
								}
								return choiceList;
							},
							filter: function(button, player) {
								var choices = [
									function(card, player, target) {
										return player != target && player.hp > target.hp;
									},
									function(card, player, target) {
										return player != target && player.hp < target.hp;
									},
								];
								return game.hasPlayer(function(current) {
									return choices[button.link](null, player, current)
								});
							},
							check: function(button) {
								var player = _status.currentPhase;
								var choices = [
									function(card, player, target) {
										return player != target && player.hp > target.hp;
									},
									function(card, player, target) {
										return player != target && player.hp < target.hp;
									},
								];
								var eff = 0;
								game.countPlayer(function(current) {
									if (choices[button.link](null, player, current)) {
										eff += get.damageEffect(current, player, player);
										return true;
									}
									return false;
								});
								return eff; // Math.random();
							},
							backup: function(links) {
								lib.skill.nsfzxys_tihai_2.link = links[0];
								return lib.skill.nsfzxys_tihai_2;
							},
						},
						ai: {
							order: 7,
							result: {
								player: function(player) {
									var choices = [
										function(card, player, target) {
											return player != target && player.hp > target.hp;
										},
										function(card, player, target) {
											return player != target && player.hp < target.hp;
										},
									];
									var eff1 = 0;
									var eff2 = 0;
									game.countPlayer(function(current) {
										if (choices[0](null, player, current)) {
											eff1 += get.damageEffect(current, player, player);
											return true;
										}
										if (choices[1](null, player, current)) {
											eff2 += get.damageEffect(current, player, player);
											return true;
										}
										return false;
									});
									if (player.hp > 3 || player.countCards('h', 'tao')) return Math.max(eff1, eff2);
									if (player.hp < 2 && player.countCards('h', 'jiu')) return Math.max(eff1, eff2) - 2;
									return 0;
								},
							},
						},
						action_tag: {
							overall: 5,
							loseHp: 7,
							negative: 1,
						}
					},
					"nsfzxys_tihai_2": {
						filterTarget: function(card, player, target) {
							if (target == player) return true;
							var choices = [
								function(card, player, target) {
									return player != target && player.hp > target.hp;
								},
								function(card, player, target) {
									return player != target && player.hp < target.hp;
								},
							];
							return choices[lib.skill.nsfzxys_tihai_backup.link](card, player, target);
						},
						selectTarget: -1,
						popup: false,
						content: function() {
							'step 0'
							target.loseHp();
						},
						ai: {
							order: 7,
							result: {
								target: -2,
								player: function(player, target) {
									if (player.hp > 3 || player.countCards('h', 'tao')) return 2;
									if (player.hp < 2 && player.countCards('h', 'jiu')) return 1;
									return 0;
								},
							},
						},
					},
					"nsfzxys_kuaiyu": {
						enable: "phaseUse",
						usable: 1,
						filterTarget: function(card, player, target) {
							if (player == target) return false;
							return true;
						},
						filterCard: true,
						selectCard: [1, Infinity],
						position: "h",
						filter: function(event, player) {
							return player.countCards('h') > 0;
						},
						check: function(card) {
							if (!ui.selected.cards.length) return 7 - get.value(card);
							return 5 - get.value(card);
						},
						content: function() {
							'step 0'
							event.num2 = cards.length;
							target.chooseToDiscard('h', '弃置' + get.cnNumber(event.num2 + 1) + '张牌，或受到一点伤害并令' + get.translation(player) + '摸' + get.cnNumber(event.num2 - 1) + '张牌', event.num2 + 1).set('ai', function(card) {
								if (!target.hasSkillTag('nodamage')) return 7 - get.value(card);
								return 0;
							});
							'step 1'
							if (!result.bool) {
								target.damage();
								if (event.num2 > 1) player.draw(event.num2 - 1);
							}
						},
						ai: {
							order: 13,
							result: {
								target: function(player, target) {
									if (target.hasSkillTag('nodamage')) return 0;
									var cs = ui.selected.cards.length;
									var hs = target.countCards('h');

									if (hs > cs) {
										return Math.min(get.damageEffect(target, player) + hs - cs, -1);
									} else {
										return get.damageEffect(target, player);
									}
									return 0;
								},
							},
						},
						action_tag: {
							overall: 5,
							damage: 1,
							change: 1,
							discard: 0.5,
						}
					},
					"nsfzxys_cedu": {
						trigger: {
							target: 'useCardToTarget',
						},
						filter: function(event, player) {
							if (player.hp < 1) return false;

							var card = event.card;
							//if (get.type(card, 'trick') != 'equip' && get.tag(card, 'damage')) return true;
							return (get.name(card) == 'sha');
						},
						prompt: function(event, player) {
							return '是否失去一点体力并取消【' + get.translation(event.card) + '】？';
						},
						check: function(event, player) {
							if (event.getParent().excluded.contains(player)) return false;
							if (player.hp > 1 && get.attitude(player, event.player) > 0) return true;
							if (get.tag(event.card, 'respondSha')) {
								if (player.countCards('h', {
										name: 'sha'
									}) == 0) {
									return true;
								}
							} else if (get.tag(event.card, 'respondShan')) {
								if (player.countCards('h', {
										name: 'shan'
									}) == 0) {
									return true;
								}
							}
							return false;
						},
						content: function() {
							'step 0'
							player.loseHp(1);
							'step 1'
							game.delay();
							if (!event.isMine()) game.delayx();
							trigger.getParent().targets.remove(player);
							trigger.getParent().triggeredTargets2.remove(player);
							'step 2'
							event.cards = get.cards(2);
							game.cardsGotoOrdering(event.cards);
							player.showCards(event.cards, '测度');
							'step 3'
							var max = Math.max(get.number(event.cards[0]), get.number(event.cards[1]));
							var min = Math.min(get.number(event.cards[0]), get.number(event.cards[1]));
							var str = (max == min) ? '弃置一张点数与' + min + '相同的牌' : '弃置一张点数在[' + min + ', ' + max + ']之间的牌';
							str += '，或令' + get.translation(player) + '回复一点体力';
							trigger.player.chooseToDiscard('h', str, 1, function(card) {
								var num = get.number(card);
								return num <= max && num >= min;
							}).set('ai', function(card) {
								if (get.attitude(trigger.player, player) >= 0) return 0;
								if (get.tag(event.cards[1], 'recover') || get.tag(event.cards[0], 'recover')) return 0;
								return 7.1 - get.value(card);
							});
							'step 4'
							if (result.bool) {
								player.gain(event.cards, 'gain2');
							} else {
								player.recover();
							}
						},
						ai: {
							threaten: 1.6,
							effect: {
								target: function(card, player, target, current) {
									if (get.name(card) != 'sha') return 1; //if (!get.tag(card, 'damage')) return 1;
									if (target.hp > 1 && get.attitude(player, target) > 0) return 0;
									return Math.min(0.5, player.countCards('h') / 10);
								}
							}
						},
						action_tag: {
							overall: 5,
							loseHp_defend: 3,
						}
					},
					"nsfzxys_heihua": {
						trigger: {
							target: 'useCardToTarget',
						},
						filter: function(event, player) {
							if (!event.player) return false;
							if (player == event.player) return false;
							if (player.countCards('he') < 1) return false;

							var card = event.card;
							if (get.type(card) == 'trick' || get.name(card) == 'sha') return true;
							return false;
						},
						init: function(player) {
							if (!player.storage.nsfzxys_heihua) player.storage.nsfzxys_heihua = [];
						},
						check: function(event, player) {
							//if (get.attitude(player, event.player) > 0) return 0;
							var card1 = event.card;
							if (get.effect(player, card1, event.player, player) >= 0) return false;

							var bool1 = false;
							if (get.tag(event.card, 'respondSha')) {
								if (player.countCards('h', {
										name: 'sha'
									}) == 0) {
									bool1 = true;
								}
							} else if (get.tag(event.card, 'respondShan')) {
								if (player.countCards('h', {
										name: 'shan'
									}) == 0) {
									bool1 = true;
								}
							} else if (get.tag(event.card, 'damage')) {
								bool1 = true;
							} else if (event.card.name == 'shunshou' || event.card.name == 'guohe') {
								return (get.attitude(player, event.player) < 0);
							}

							var range = event.player.getAttackRange();
							var distance = get.distance(event.player, player);
							if (get.attitude(player, event.player) > 0 && range - 1 >= distance) return false;
							return bool1;
						},
						content: function() {
							'step 0'
							event.source = trigger.player;
							event.source.discardPlayerCard(player, 'he', true);
							'step 1'
							if (result.links.length) {
								event.num = get.type(result.links[0]) == 'equip' ? 2 : 1;
								if (typeof event.source.storage.nsfzxys_heihua_db == 'number') {
									event.source.storage.nsfzxys_heihua_db += event.num;
								} else {
									event.source.storage.nsfzxys_heihua_db = event.num;
								}
								if (!event.source.hasSkill('nsfzxys_heihua_db')) event.source.addTempSkill('nsfzxys_heihua_db');
								player.storage.nsfzxys_heihua.push(trigger.card);
							} else {
								event.finish();
							}
							'step 2'
							if (!event.source.inRange(player)) {
								if (!event.isMine()) game.delayx();
								trigger.getParent().targets.remove(player);
								trigger.getParent().triggeredTargets2.remove(player);
							}
						},
						group: ['nsfzxys_heihua_damage', 'nsfzxys_heihua_clear'],
						subSkill: {
							damage: {
								trigger: {
									player: 'damageEnd'
								},
								logTarget: 'source',
								forced: true,
								sub: true,
								popup: false,
								filter: function(event, player) {
									if (!event.card) return false;
									if (!player.storage.nsfzxys_heihua.contains(event.card)) return false;
									return (event.source && event.source.isIn() && event.source.countCards('he') > 0);
								},
								content: function() {
									'step 0'
									player.gainPlayerCard('获得' + get.translation(trigger.source) + '区域内的一张牌', trigger.source);
								},
							},
							clear: {
								trigger: {
									global: 'useCardAfter'
								},
								forced: true,
								sub: true,
								popup: false,
								silent: true,
								filter: function(event, player) {
									if (!event.card) return false;
									return (player.storage.nsfzxys_heihua.contains(event.card));
								},
								content: function() {
									'step 0'
									player.storage.nsfzxys_heihua.remove(trigger.card);
								},
							},
						},
						action_tag: {
							overall: 4,
							active_defend: 1,
							range: 1,
						}
					},
					"nsfzxys_heihua_db": {
						mod: {
							globalFrom: function(from, to, current) {
								if (from.storage.nsfzxys_heihua_db) return current + from.storage.nsfzxys_heihua_db;
							},
						},
						mark: true,
						marktext: "黑",
						locked: true,
						charlotte: true,
						debuff: true,
						intro: {
							content: "与其他角色的距离+# ",
						},
						onremove: function(player, skill) {
							player.storage.nsfzxys_heihua_db = 0;
						},
						ai: {
							neg: true,
						},
					},
					"nsfzxys_zigong": {
						enable: "phaseUse",
						usable: 1,
						marktext: "宫",
						intro: {
							mark: function(dialog, content, player) {
								if (player.sex != 'none') return '当前性别为' + get.translation(player.sex);
								return "当前无性别";
							},
						},
						content: function() {
							'step 0'
							var weapon = player.getEquip(1);
							event.num = 1;
							if (weapon) {
								event.num = nsfzxys_getWeaponRange(weapon);
							}
							player.draw(event.num);
							'step 1'
							event.cards = result;
							player.storage.nsfzxys_zigong_af = event.cards;
							player.addTempSkill('nsfzxys_zigong_af');

							if (event.num > 2) {
								player.sex = 'none';
								player.discard(player.getEquip(1));
								player.storage.nsfzxys_zigong = event.num;
								player.markSkill('nsfzxys_zigong');
							}
						},
						mod: {
							aiValue: function(player, card, num) {
								if (nsfzxys_getWeaponRange(card) && nsfzxys_getWeaponRange(card) > 1) {
									return num + 2 * nsfzxys_getWeaponRange(card);
								}
							},
							aiOrder: function(player, card, num) {
								if (nsfzxys_getWeaponRange(card) && nsfzxys_getWeaponRange(card) > 1) {
									return num + 2 * nsfzxys_getWeaponRange(card);
								}
							},
						},
						ai: {
							order: function(item, player) {
								var list = player.getCards('h', function(card) {
									return (nsfzxys_getWeaponRange(card) && nsfzxys_getWeaponRange(card) > 1);
								});
								var max = 0;
								for (var i = 0; i < list.length; i++) {
									var card = list[i];
									var temp = get.order({
										name: name
									});
									if (temp > max) max = temp;
								}
								var weapon = player.getEquip(1);
								if (weapon && get.order(weapon) > max) {
									return 15;
								} else if (max > 0) return max - 0.5;
								return 15;
							},
							result: {
								player: function(player) {
									return player.getAttackRange(false);
								},
							},
						},
						action_tag: {
							overall: 4,
							limited: 0.5,
							draw: 3,
							demand_equip: 1,
						}
					},
					"nsfzxys_zigong_af": {
						charlotte: true,
						locked: true,
						mod: {
							targetInRange: function(card, player, target) {
								if (card.name == 'sha' && player.storage.nsfzxys_zigong) {
									if (get.distance(player, target) <= player.storage.nsfzxys_zigong) return true;
								}
							},
							ignoredHandcard: function(card, player) {
								if (player.storage.nsfzxys_zigong_af && player.storage.nsfzxys_zigong_af.contains(card)) {
									return true;
								}
							},
							cardDiscardable: function(card, player, name) {
								if (name == 'phaseDiscard' && player.storage.nsfzxys_zigong_af && player.storage.nsfzxys_zigong_af.contains(card)) {
									return false;
								}
							},
						},
						onremove: function(player, skill) {
							delete player.storage.nsfzxys_zigong;
							delete player.storage.nsfzxys_zigong_af;
						},
					},
					"nsfzxys_chaoyue": {
						trigger: {
							global: "phaseUseBegin",
						},
						filter: function(event, player) {
							if (event.player == player && player.storage.nsfzxys_jueshi == true) return true;
							if (!player.hasSkillTag('respondSha') && player.countCards('h', 'sha') < 1) return false;
							return event.player != player;
						},
						direct: true,
						locked: true,
						firstDo: true,
						priority: 999,
						content: function() {
							'step 0'
							if (trigger.player == player && player.storage.nsfzxys_jueshi == true) {
								player.logSkill('nsfzxys_chaoyue');
								player.gain(get.cardPile(function(card) {
									return get.name(card) == 'sha';
								}), 'gain2');
								event.finish();
							}
							'step 1'
							player.chooseToUse({
								name: 'sha'
							}, '超越：对' + get.translation(trigger.player) + '或他的上下家使用一张【杀】').set('targetRequired', true).set('complexSelect', true).set('filterTarget', function(card, player, target) {
								if (target != trigger.player && target != trigger.player.getNext() && target != trigger.player.getPrevious()) return false;
								return player.canUse({
									name: 'sha'
								}, target, false);
							});
							'step 2'
							if (result.bool) {
								player.logSkill('nsfzxys_chaoyue');
								player.draw();
								player.addTempSkill('nsfzxys_chaoyue_af');
								event.finish();
							}
						},
						group: 'nsfzxys_chaoyue_sha',
						subSkill: {
							sha: {
								trigger: {
									player: ['useCard1'],
								},
								filter: function(event, player) {
									return get.name(event.card) === 'sha' && player.storage.nsfzxys_jueshi === true;
								},
								forced: true,
								silent: true,
								firstDo: true,
								priority: 600,
								content: function() {
									if (player.storage.nsfzxys_jueshi === true) {
										game.countPlayer(function(current) {
											if (current != player && !current.hasSkill('nsfzxys_chaoyue_sha_db')) {
												current.addTempSkill('nsfzxys_chaoyue_sha_db', 'shaEnd');
											}
										});
									}
									/*else {
										trigger.target.addTempSkill('qinggang2');
										trigger.target.storage.qinggang2.add(trigger.card);
									}*/
								},
							},
						},
						ai: {
							unequip_ai: true,
							unequip: true,
							skillTagFilter: function(player, tag, arg) {
								if (arg && arg.name == 'sha') return true;
								return false;
							}
						},
						action_tag: {
							overall: 6,
							sha_multi: 3,
							draw: 1,
						},
					},
					"nsfzxys_chaoyue_af": {
						charlotte: true,
						forced: true,
						mark: true,
						marktext: "超",
						mod: {
							cardEnabled2: function(card) {
								if (get.position(card) == 'h') return false;
							},
							globalTo: function(from, to, distance) {
								if (to.storage.nsfzxys_jueshi === true) return distance + 1;
							},
						},
						intro: {
							content: "不能使用或打出手牌",
						},
						ai: {
							neg: true,
						},
					},
					"nsfzxys_chaoyue_sha_db": {
						inherit: 'baiban',
						mark: false,
						charlotte: true,
						debuff: true,
						ai: {
							neg: true,
							unequip2: true,
						},
					},
					"nsfzxys_jueshi": {
						trigger: {
							global: "dyingBegin",
						},
						firstDo: true,
						priority: 1000,
						unique: true,
						mark: true,
						skillAnimation: 'epic',
						limited: true,
						animationColor: 'fire',
						intro: {
							content: 'limited'
						},
						marktext: "绝",
						init: function(player) {
							if (typeof player.storage.nsfzxys_jueshi != 'boolean') player.storage.nsfzxys_jueshi = false;
						},
						filter: function(event, player) {
							//if (event.player == player) return false;
							return (!player.storage.nsfzxys_jueshi);
						},
						logTarget: 'player',
						check: function(event, player) {
							if (event.player.hp < 0) return false;
							return get.attitude(player, event.player) < 0;
						},
						content: function() {
							'step 0'
							player.draw(2);
							player.awakenSkill('nsfzxys_jueshi');
							'step 1'
							trigger.player.hp = trigger.player.hp - 1;
							trigger.player.update();
						},
						ai: {
							expose: 0.5,
						},
						action_tag: {
							overall: 4,
							limited: 1,
							combo: 1,
							draw: 2,
							loseHp: 1,
						},
					},
					"nsfzxys_lanban": {
						trigger: {
							global: 'shaMiss'
						},
						direct: true,
						filter: function(event, player) {
							return event.cards || event.responded; // && get.itemtype(event.responded.cards) == 'cards';
						},
						mark: true,
						intro: {
							mark: function(dialog, storage, player, skill) {
								var bool1 = true;
								var bool2 = true;
								if (player.hasSkill('nsfzxys_lanban_shaed')) bool1 = false;
								if (player.hasSkill('nsfzxys_lanban_shaned')) bool2 = false;
								if (bool1 && bool2) {
									return "获得【杀】、【闪】的效果均可以发动";
								} else if (bool1) {
									return "可以发动获得【杀】的效果";
								} else if (bool2) {
									return "可以发动获得【闪】的效果";
								}
								return "两个效果本轮均已发动";
							},
						},
						onremove: function(player) {
							player.removeSkill('nsfzxys_lanban_shaed');
							player.removeSkill('nsfzxys_lanban_shaned');
						},
						content: function() {
							'step 0'
							var choices = [];
							var choice_info = [];
							if (trigger.cards && trigger.cards.filterInD('od').length > 0 && !player.hasSkill('nsfzxys_lanban_shaed')) { //&& player != trigger.player
								event.sha = trigger.cards.filterInD('od');
								choices.push("获得杀");
								choice_info.push("将此次被闪避的【杀】交给一名角色，你摸一张牌");
							}
							if (trigger.responded.cards && get.itemtype(trigger.responded.cards) == 'cards' && trigger.responded.cards.filterInD('od').length > 0 && !player.hasSkill('nsfzxys_lanban_shaned')) { // && player != trigger.target
								event.shan = trigger.responded.cards.filterInD('od');
								choices.push("获得闪");
								choice_info.push("将此次使用的【闪】交给一名角色");
							}
							if (choices.length < 1) {
								event.finish();
							} else {
								choices.push('cancel2');
								player.chooseControl(choices, function() {
									if (choices.contains('获得闪')) {
										if (game.countPlayer(function(current) {
												return get.attitude(player, current) >= 1 && (!current.hasCard('h', 'shan') || current.hp < 3);
											}) > 0) return '获得闪';
									}
									if (choices.contains('获得杀')) {
										if (game.countPlayer(function(current) {
												return get.attitude(player, current) >= 1 && (!current.hasCard('h', 'sha') || current.needsToDiscard(1) < 1);
											}) > 0) {
											return '获得杀';
										}
										if (!player.needsToDiscard(2)) return '获得杀';
									}
									return choices[0];
								}).set('prompt', get.prompt("nsfzxys_lanban")).set('choiceList', choice_info);
							}
							'step 1'
							if (result.control != 'cancel2') {
								event.choice = result.control;
								event.cards = event.choice == '获得杀' ? event.sha : event.shan;
								player.chooseTarget('将' + get.translation(event.cards) + '交给一名角色', true, function(card, player, target) {
									return true;
								}).set('ai', function(target) {
									var base = 4;
									var att = get.attitude(player, target);
									if (event.choice == '获得闪') {
										if (target.countCards('h', 'shan') < 1) {
											base -= 2;
										}
										if (target.countCards('h', 'shan') < 2) {
											base -= 2;
										}
										base += Math.max(target.hp, 1);
									} else {
										if (target.countCards('h', 'sha') < 1) {
											base -= 3;
										}
										base += target.countCards('h');
									}
									if (base > 1 && target == player) base -= 1;
									return att / base;
								});
							} else {
								event.finish();
							}
							'step 2'
							if (result.bool) {
								player.logSkill('nsfzxys_lanban', result.targets[0]);
								result.targets[0].gain(event.cards, 'gain2');
								if (event.choice == '获得杀') {
									player.draw();
									player.addTempSkill('nsfzxys_lanban_shaed', 'roundStart');
								} else {
									player.addTempSkill('nsfzxys_lanban_shaned', 'roundStart');
								}
							}
						},
						subSkill: {
							shaed: {
								charlotte: true,
							},
							shaned: {
								charlotte: true,
							},
						},
						action_tag: {
							overall: 4,
							sha_bonus: 1,
							search: 2,
							draw: 0.5,
						}
					},
					"nsfzxys_baoshi": {
						marktext: '脂',
						trigger: {
							player: ['damageBegin4', 'phaseJieshuBegin'],
							global: 'gameDrawAfter',
						},
						forced: true,
						filter: function(event, player) {
							if (event.name == 'phaseJieshu') return player.countMark("nsfzxys_baoshi") > 1;
							return event.name != 'damage' || event.num > 0;
						},
						content: function() {
							'step 0'
							if (trigger.name == 'damage') {
								player.addMark('nsfzxys_baoshi', trigger.num);
								trigger.cancel();
								event.finish();
							} else if (trigger.name == 'phaseJieshu') {
								event.num = player.countMark("nsfzxys_baoshi") - 1;
							} else {
								player.addMark('nsfzxys_baoshi', 1);
								event.finish();
							}
							'step 1'
							player.removeMark('nsfzxys_baoshi', event.num);
							player.loseHp(event.num);
							'step 2'
							if (event.num > 0) {
								player.gain(get.cardPile(function(card) {
									return get.name(card) == 'sha';
								}), 'gain2');
								event.num--;
								event.redo();
							}
							'step 3'
							game.updateRoundNumber();
						},
						intro: {
							name: "脂",
							content: 'mark'
						},
						mod: {
							cardUsable: function(card, player, num) {
								if (card.name == 'sha') return num + player.countMark("nsfzxys_baoshi");
							},
						},
						ai: {
							combo: 'nsfzxys_zaizhong',
						},
						action_tag: {
							combo: 1,
							damage_prevent: 9,
							sha_multi: 2,
							search: 1,
						},
					},
					"nsfzxys_zaizhong": {
						shaRelated: true,
						mod: {
							targetInRange: function(card, player, target) {
								if (card.name == 'sha' && get.suit(card) == 'club' && player.hasMark("nsfzxys_baoshi")) {
									var num = player.getAttackRange(true) + player.countMark("nsfzxys_baoshi");
									if (get.distance(player, target) <= num) return true;
								}
							},
						},
						trigger: {
							player: 'useCardToPlayered'
						},
						frequent: true,
						prompt: function(event, player) {
							if (event.card.suit == 'diamond') return '是否发动【载重】，摸' + get.cnNumber(player.countMark("nsfzxys_baoshi")) + '张牌？';
							return '是否发动【载重】，令' + get.translation(event.target) + '额外使用一张【闪】？';
						},
						filter: function(event, player) {
							if (event.card.name != 'sha' || !['diamond', 'club'].contains(event.card.suit)) return false;
							return player.hasMark("nsfzxys_baoshi");
						},
						content: function() {
							var num = player.countMark("nsfzxys_baoshi");
							if (trigger.card.suit == 'diamond') {
								player.draw(num);
							} else {
								var id = trigger.target.playerid;
								var map = trigger.getParent().customArgs;
								if (!map[id]) map[id] = {};
								if (typeof map[id].shanRequired == 'number') {
									map[id].shanRequired += num;
								} else {
									map[id].shanRequired = num + 1;
								}
							}
						},
						group: "nsfzxys_zaizhong_after",
						subfrequent: ['after'],
						subSkill: {
							after: {
								trigger: {
									source: 'damageBegin1'
								},
								filter: function(event, player) {
									if (player.countMark("nsfzxys_baoshi") < 1) return false;
									return event.card && event.card.name == 'sha' && ['spade', 'heart'].contains(get.suit(event.card)) && event.notLink();
								},
								prompt: function(event, player) {
									var suit = get.suit(event.card);
									if (suit == 'spade') return '是否发动【载重】，移除一个“脂”标记？';
									return '是否发动【载重】，令此伤害+' + player.countMark("nsfzxys_baoshi") + '？';
								},
								content: function() {
									var suit = get.suit(trigger.card);
									if (suit == 'spade') {
										player.removeMark("nsfzxys_baoshi", 1);
									} else {
										trigger.num += player.countMark("nsfzxys_baoshi");
									}
								},
							}
						},
						ai: {
							combo: 'nsfzxys_baoshi',
						},
						action_tag: {
							combo: 1,
							sha_bonus: 2,
							draw: 0.5,
							range: 0.5,
							directHit: 0.5,
							demand_sha: 1,
						},
					},
					"nsfzxys_xiaoyan": {
						trigger: {
							global: "phaseUseBegin",
						},
						intro: {
							content: "笑颜还可以使用#次",
						},
						filter: function(event, player) {
							if (player.countMark('nsfzxys_xiaoyan') < 1) return false;
							return event.player != player && player.hp > 0; //!target.hasSkill('nsfzxys_bingdu_db');
						},
						check: function(event, player) {
							if (event.player.hasSkill('nsfzxys_bingdu_db')) return false;
							if (player.hp < 2) return false;
							return get.attitude(player, event.player) > 1 && event.player.getCards('h', function(card) {
								return get.tag(card, 'damage');
							}) > player.getDamagedHp() && event.player.phaseNumber > 1;
						},
						logTarget: 'player',
						content: function() {
							'step 0'
							player.loseHp();
							player.removeMark('nsfzxys_xiaoyan', 1);
							'step 1'
							//game.asyncDraw([player, trigger.player]);
							trigger.player.draw();
							player.storage.nsfzxys_xiaoyan_target = trigger.player;
							player.addTempSkill('nsfzxys_xiaoyan_af');
						},
						ai: {
							expose: 0.1,
						},
						group: ["nsfzxys_xiaoyan_reset"],
						subSkill: {
							reset: {
								trigger: {
									player: "phaseZhunbeiBegin",
								},
								silent: true,
								content: function() {
									if (player.countMark('nsfzxys_xiaoyan') < 1) {
										player.addMark('nsfzxys_xiaoyan', 1);
									} else if (player.countMark('nsfzxys_xiaoyan') > 1) {
										player.removeMark('nsfzxys_xiaoyan', player.countMark('nsfzxys_xiaoyan') - 1)
									}
								},
								sub: true,
								forced: true,
								popup: false,
							},
						},
					},
					"nsfzxys_xiaoyan_af": {
						trigger: {
							global: 'damageSource'
						},
						filter: function(event, player) {
							if (!player.storage.nsfzxys_xiaoyan_target) return false;
							return event.source == player.storage.nsfzxys_xiaoyan_target;
						},
						forced: true,
						content: function() {
							'step 0'
							if (player.isDamaged()) {
								player.recover();
							} else {
								player.draw();
							}
						},
						onremove: function(player) {
							var bool2 = game.hasPlayer2(function(current) {
								return current.getHistory('damage', function(evt) {
									return evt.source == player.storage.nsfzxys_xiaoyan_target;
								}).length > 0
							});
							if (!bool2) player.draw();
							delete player.storage.nsfzxys_xiaoyan_target;
						},
						ai: {
							effect: {
								target: function(card, player, target) {
									if (get.tag(card, 'damage')) {
										if (target.storage.nsfzxys_xiaoyan_target && target.storage.nsfzxys_xiaoyan_target == player) return 0;
									}
								}
							},
						},
						action_tag: {
							overall: 3,
							draw: 0.5,
							recover: 1,
							negative: 0.5,
						},
					},
					"nsfzxys_jiangyou": {
						init: function(player) {
							if (!player.storage.nsfzxys_jiangyou_type) player.storage.nsfzxys_jiangyou_type = [];
						},
						enable: 'phaseUse',
						usable: 3,
						filterCard: function(card, player) {
							if (!player.storage.nsfzxys_jiangyou_type) return true;
							return !player.storage.nsfzxys_jiangyou_type.contains(get.type2(card));
						},
						selectCard: 1,
						position: "he",
						check: function(card) {
							return 5.1 - get.value(card);
						},
						content: function() {
							'step 0'
							player.draw();
							player.addMark('nsfzxys_xiaoyan', 1);
							player.storage.nsfzxys_jiangyou_type.add(get.type2(cards[0]));
						},
						ai: {
							order: function(item, player) {
								return 1;
							},
							result: {
								player: function(player) {
									return 1;
								},
							},
						},
						group: ["nsfzxys_jiangyou_reset"],
						subSkill: {
							reset: {
								trigger: {
									player: "phaseAfter",
								},
								silent: true,
								content: function() {
									player.storage.nsfzxys_jiangyou_type = [];
								},
								sub: true,
								forced: true,
								popup: false,
							},
						},
						action_tag: {
							overall: 2,
							change: 3,
						},
					},
					"nsfzxys_qiaozheng": {
						trigger: {
							player: 'phaseUseBegin'
						},
						direct: true,
						filter: function(event, player) {
							return player.countCards('h') > 0;
						},
						content: function() {
							'step 0'
							player.chooseTarget(get.prompt2('nsfzxys_qiaozheng'), function(card, player, target) {
								return player.canCompare(target);
							}).set('ai', function(target) {
								return -get.attitude(_status.event.player, target) / target.countCards('h');
							});
							'step 1'
							if (result.bool) {
								player.logSkill('nsfzxys_qiaozheng', result.targets[0]);
								player.chooseToCompare(result.targets[0]);
							} else {
								event.finish();
							}
							'step 2'
							if (result.bool) {
								event.insert(lib.skill.nsfzxys_qiaozheng.content_use, {
									target: target,
									player: player
								});
							} else {
								player.addTempSkill('nsfzxys_qiaozheng_db');
							}
						},
						content_use: function() {
							'step 0'
							var list = [];
							for (var i = 0; i < lib.inpile.length; i++) {
								var name = lib.inpile[i];
								if (get.type(name) == 'trick') list.push(['锦囊', '', name]);
							}
							if (list.length == 0) {
								return ui.create.dialog('巧证无可用牌');
								event.finish();
							}
							list.sort();
							var dialog = ui.create.dialog('巧证', [list, 'vcard']);
							player.chooseButton(dialog, true).ai = function(button) {
								if (button.link[2] == 'wugu') return;
								var effect = player.getUseValue(button.link[2]);
								if (effect > 0) return effect;
								return 0;
							};
							'step 1'
							if (result.bool) {
								player.chooseUseTarget({
									name: result.links[0][2]
								}, false, 'nodistance').set('forced', true).set('logSkill', 'nsfzxys_qiaozheng');
							}
						},
						mod: {
							ignoredHandcard: function(card, player) {
								if (get.type(card, 'trick', player) == 'trick') {
									return true;
								}
							},
							cardDiscardable: function(card, player, name) {
								if (name == 'phaseDiscard' && get.type(card, 'trick', player) == 'trick') {
									return false;
								}
							},
						},
						action_tag: {
							overall: 6,
							discard: 1,
							trick_viewAs: 2,
							maxHand: 0.5,
							negative: 0.5,
						},
					},
					"nsfzxys_qiaozheng_db": {
						charlotte: true,
						forced: true,
						debuff: true,
						mod: {
							cardEnabled2: function(card, player) {
								if (get.type(card, 'trick', player) == 'trick') {
									return false;
								}
							},
						},
						ai: {
							neg: true,
						},
					},
					"nsfzxys_jiexi": {
						inherit: 'nsfzxys_losehp1',
						group: ['nsfzxys_jiexi_2'],
						action_tag: {
							overall: 3,
							loseHp_defend: 0.5,
							search: 1,
						},
					},
					"nsfzxys_jiexi_2": {
						direct: true,
						trigger: {
							player: "loseHpAfter",
						},
						filter: function(event, player) {
							return player.countCards('he') > 0;
						},
						content: function() {
							'step 0'
							event.count = trigger.num;
							'step 1'
							player.chooseCard('he', '将一张牌置于弃牌堆，然后获得一张其点数的倍数或因数的牌').set('ai', function(card) {
								var num2 = get.number(card);
								var count = 0;
								for (var i = 1; i < 14; i++) {
									if (num2 % i == 0 || i % num2 == 0) count++;
								}
								return count;
							});
							'step 2'
							if (result.bool) {
								player.lose(result.cards, ui.discardPile, 'visible');
								player.$throw(result.cards, 1000);
								game.log(player, '将', result.cards, '置入了弃牌堆');
								event.num2 = get.number(result.cards[0]);
								event.card = result.cards[0];
								event.count -= 1;
								game.updateRoundNumber();
							} else {
								event.finish();
							}
							'step 3'
							event.togain = [];
							for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
								var current = ui.discardPile.childNodes[i];
								if (get.number(current) % event.num2 === 0 || event.num2 % get.number(current) === 0) event.togain.push(current);
								//if ((!trigger.cards.contains(current)) && get.number(current) == number) event.togain.push(current);
							}
							if (!event.togain.contains(event.card)) event.togain.push(event.card);
							//if (!event.togain.length) event.goto(6);
							'step 4'
							player.chooseButton(['是否获得其中的一张牌？', event.togain]).ai = function(button) {
								return get.value(button.link);
							};
							'step 5'
							if (result.bool) {
								player.gain(result.links[0], 'gain2');
							}
							'step 6'
							if (event.count > 0) event.goto(1);
						},
					},
					"nsfzxys_duanxiao": {
						trigger: {
							player: 'die'
						},
						forced: true,
						forceDie: true,
						skillAnimation: true,
						animationColor: 'thunder',
						filter: function(event) {
							return event.source && event.source.isIn();
						},
						content: function() {
							trigger.source.addSkill('nsfzxys_duanxiao');
						},
						logTarget: 'source',
						mod: {
							attackFrom: function(from, to, current) {
								if (current < -1) return current + 1;
							},
							targetInRange: function(card, player, target) {
								if (card.name == 'sha' && get.distance(player, target) <= 1) return true;
							},
						},
					},
					"nsfzxys_zhuangda": {
						trigger: {
							global: ["loseAfter", "cardsDiscardAfter", "gameDrawAfter"],
						},
						frequent: true,
						filter: function(event, player) {
							if (event.name == 'gameDraw') return true;

							var cards = (event.cards2 || event.cards);
							if (!cards) return false;
							if (event.name == 'lose') {
								if ((event.type != 'discard' && event.type != 'equip') || event.player == player) return false;
							} else {
								var evt = event.getParent();
								if (evt.name != 'orderingDiscard' || !evt.relatedEvent || evt.relatedEvent.player == player) return false;
							}

							for (var i = 0; i < cards.length; i++) {
								if (get.type(cards[i]) == 'equip' && get.subtype(cards[i]) == 'equip1' && get.position(cards[i], true) == 'd') return true;
							}
							return false;
						},
						content: function() {
							'step 0'
							if (trigger.name == 'gameDraw') {
								var card = get.cardPile(function(card) {
									return get.type(card) == 'equip' && get.subtype(card) == 'equip1';
								});
								if (card) {
									player.$gain(card, 'gain2');
									player.equip(card);
								}
								event.finish();
							}
							'step 1'
							event.cards = [];
							var cards = trigger.cards2 || trigger.cards;
							for (var i = 0; i < cards.length; i++) {
								if (get.type(cards[i]) == 'equip' && get.subtype(cards[i]) == 'equip1' && get.position(cards[i], true) == 'd') event.cards.push(cards[i]);
							}
							'step 2'
							player.gain(event.cards, 'gain2');
						},
					},
					"nsfzxys_gaoxiao": {
						enable: "phaseUse",
						usable: 3,
						filterTarget: function(card, player, target) {
							return player != target || !player.hasSkill('nsfzxys_gaoxiao_h');
						},
						filterCard: function(card, player) {
							return get.type(card) == 'equip' && get.subtype(card) == 'equip1';
						},
						selectCard: 1,
						position: 'he',
						discard: false,
						lose: false,
						delay: 0,
						filter: function(event, player) {
							return player.countCards('he', function(card) {
								return get.type(card) == 'equip' && get.subtype(card) == 'equip1';
							}) > 0 && !(player.hasSkill('nsfzxys_gaoxiao_u') && player.hasSkill('nsfzxys_gaoxiao_h') && player.hasSkill('nsfzxys_gaoxiao_d'));
						},
						check: function(card) {
							return 8.5 - get.value(card);
						},
						content: function() {
							'step 0'
							event.cardx = cards[0];
							var choices = [];
							if (!player.hasSkill('nsfzxys_gaoxiao_d')) choices.push("伤害");
							if (!player.hasSkill('nsfzxys_gaoxiao_h')) choices.push("回复");
							if (!player.hasSkill('nsfzxys_gaoxiao_u')) choices.push("使用");
							player.chooseControl(choices).set('prompt', "令" + get.translation(target) + "在" + get.translation(choices) + "中选择一项").set('ai', function() {
								if (get.attitude(player, target) < 0 && choices.contains("伤害")) {
									return "伤害";
								}
								if (get.attitude(player, target) > 0) {
									if (target.hp < 3 && target.isDamaged() && choices.contains("")) {
										return "回复";
									} else if (!target.getEquip(1)) {
										return "使用";
									}
								}
								return "回复";
							});
							'step 1'
							if (result.control == "伤害") {
								player.discard(event.cardx);
								target.damage();
								player.addTempSkill('nsfzxys_gaoxiao_d', 'phaseUseEnd');
							} else if (result.control == "回复") {
								player.discard(event.cardx);
								target.recover();
								player.addTempSkill('nsfzxys_gaoxiao_h', 'phaseUseEnd');
							} else if (result.control == "使用") {
								player.$give(event.cardx, target, true);
								target.equip(event.cardx);
								player.addTempSkill('nsfzxys_gaoxiao_u', 'phaseUseEnd');
							}
						},
						mod: {
							aiValue: function(player, card, num) {
								if (get.type(card) == 'equip' && get.subtype(card) == 'equip1') {
									return num * 1.2;
								}
							},
							aiOrder: function(player, card, num) {
								if (get.type(card) == 'equip' && get.subtype(card) == 'equip1') {
									if (player.getEquip(1) && !(player.hasSkill('nsfzxys_gaoxiao_d' && player.hasSkill('nsfzxys_gaoxiao_h') && player.hasSkill('nsfzxys_gaoxiao_u')))) {
										return 0.5;
									}
								}
							},
						},
						ai: {
							order: 7,
							result: {
								target: function(player, target) {
									if (!player.hasSkill('nsfzxys_gaoxiao_d') && target.hp < 2 && !target.hasSkillTag('nodamage')) {
										return -10;
									}
									if (!player.hasSkill('nsfzxys_gaoxiao_h') && target.isDamaged()) {
										return 3 + target.getDamagedHp();
									}
									if (!player.hasSkill('nsfzxys_gaoxiao_u') && !target.getEquip(1)) {
										return 3;
									}
									if (!player.hasSkill('nsfzxys_gaoxiao_d') && !target.hasSkillTag('nodamage')) {
										return get.damageEffect(target, player, target);
									}
									return 0;
								},
							},
						},
						subSkill: {
							d: {
								charlotte: true,
							},
							h: {
								charlotte: true,
							},
							u: {
								charlotte: true,
							},
						}
					},
					"nsfzxys_gaoda": {
						trigger: {
							player: 'phaseDrawBegin2'
						},
						forced: true,
						filter: function(event, player) {
							return !event.numFixed;
						},
						content: function() {
							trigger.num += 1;
						},
						mod: {
							attackFrom: function(from, to, current) {
								return current - 1;
							},
							maxHandcardBase: function(player, num) {
								return num + 1;
							},
						},
					},
					"nsfzxys_nuhuo": {
						//usable: 1,
						unique: true,
						enable: 'phaseUse',
						mark: true,
						skillAnimation: 'epic',
						limited: true,
						animationColor: 'soil',
						intro: {
							content: 'limited'
						},
						init: function(player) {
							if (typeof player.storage.nsfzxys_nuhuo != 'boolean') player.storage.nsfzxys_nuhuo = false;
						},
						filter: function(event, player) {
							return (!player.storage.nsfzxys_nuhuo);
						},
						content: function() {
							'step 0'
							player.loseHp(1);
							event.num = 3;
							player.addTempSkill('nsfzxys_nuhuo_af', 'phaseUseEnd');
							'step 1'
							if (event.num > 0) {
								player.gain(get.cardPile(function(card) {
									return get.name(card) == 'sha';
								}), 'gain2');
								event.num--;
								event.redo();
							}
							'step 2'
							player.awakenSkill('nsfzxys_nuhuo');
						},
						ai: {
							threaten: 10,
							order: 10,
							result: {
								player: function(player) {
									if (player.hp < 2 || player.phaseNumber < 2) return 0;
									/*var targets = game.filterPlayer(function(current) {
										if (current != player && player.canUse('sha', current) && get.effect(current, 'sha', player, player) > 0) return true;
										return false;
									});
									if (targets.length < 1) return 0;

									var ta, tao, base;
									for (var i = 0; i < targets.length; i++) {
										ta = targets[i];
										tao = game.countPlayer(function(current) {
											if (current.countCards('h', 'tao') > 0 && get.effect(ta, 'tao', current, current) > 0) return true;
											if ((current.countCards('h', 'jiu') > 0 || current.countCards('h', 'shan') > 1) && current == ta) return true;
											return false;
										});
										base = Math.min(2, tao);
										if (ta.hp <= 2 - base + player.countCards('h', 'sha')) return 10;
									}*/
									return 10;
								},
							},
						},
					},
					"nsfzxys_nuhuo_af": {
						trigger: {
							player: 'useCardToPlayered',
						},
						filter: function(event) {
							return event.card.name == 'sha';
						},
						forced: true,
						silent: true,
						content: function() {
							trigger.target.addTempSkill('qinggang2');
							trigger.target.storage.qinggang2.add(trigger.card);

							var id = trigger.target.playerid;
							var map = trigger.getParent().customArgs;
							if (!map[id]) map[id] = {};
							if (typeof map[id].shanRequired == 'number') {
								map[id].shanRequired += 1;
							} else {
								map[id].shanRequired = 2;
							}
						},
						ai: {
							unequip_ai: true,
							unequip: true,
							skillTagFilter: function(player, tag, arg) {
								if (arg && arg.name == 'sha') return true;
								return false;
							}
						},
						mod: {
							cardUsable: function(card, player, num) {
								if (card.name == 'sha') return Infinity;
							}
						},
					},
					"nsfzxys_zaojia": {
						enable: ['chooseToUse', 'chooseToRespond'],
						derivation: ['nsfzxys_xiaobing'],
						filter: function(event, player) {
							if (player.countCards('h') > 0) return true;
							return false;
						},
						marktext: "假",
						intro: {
							content: 'mark',
						},
						ondisable: true,
						onremove: function(player) {
							player.storage.nsfzxys_zaojia = 0;
						},
						chooseButton: {
							dialog: function(event, player) {
								var list = [];
								for (var i = 0; i < lib.inpile.length; i++) {
									var name = lib.inpile[i];
									if (name == 'sha') {
										list.push(['基本', '', 'sha']);
										list.push(['基本', '', 'sha', 'fire']);
										list.push(['基本', '', 'sha', 'thunder']);
										list.push(['基本', '', 'sha', 'ice']);
									} else if (name == 'shan') list.push(['基本', '', name]);
									else if (name == 'wuxie') list.push(['锦囊', '', name]);
								}
								return ui.create.dialog('造假', [list, 'vcard']);
							},
							filter: function(button, player) {
								var evt = _status.event.getParent();
								//if (evt.type == 'wuxie') return true;
								return evt.filterCard({
									name: button.link[2]
								}, player, evt);
							},
							check: function(button) {
								var player = _status.event.player;
								if (player.countCards('h', button.link[2]) > 0) return 0;
								var effect = player.getUseValue(button.link[2]);
								if (effect > 0) return effect;
								return 0;
							},
							backup: function(links, player) {
								return {
									filterCard: function(card, player) {
										return true;
									},
									selectCard: 1,
									popname: true,
									check: function(card) {
										return 7.1 - get.value(card);
									},
									position: 'h',
									viewAs: {
										name: links[0][2],
										nature: links[0][3]
									},
									onuse: function(result, player) {
										player.addAdditionalSkill("nsfzxys_xiaobing", "nsfzxys_xiaobing");
										player.addMark('nsfzxys_zaojia', 1, true);
									},
									onrespond: function(result, player) {
										player.addAdditionalSkill("nsfzxys_xiaobing", "nsfzxys_xiaobing");
										player.addMark('nsfzxys_zaojia', 1, true);
									},
								}
							},
							hiddenCard: function(player, name) {
								if (player.countCards('h') < 1) return false;
								return name == 'wuxie';
							},
							prompt: function(links, player) {
								return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用或打出';
							}
						},
						hiddenCard: function(player, name) {
							if (player.countCards('h') < 1) return false;
							return name == 'wuxie';
						},
						ai: {
							respondSha: true,
							respondShan: true,
							skillTagFilter: function(player) {
								if (player.countCards('h') < 1) return false;
							},
							order: 4,
							result: {
								player: function(player) {
									var allshown = true,
										players = game.filterPlayer();
									for (var i = 0; i < players.length; i++) {
										if (players[i].ai.shown == 0) {
											allshown = false;
										}
										if (players[i] != player && players[i].countCards('h') && get.attitude(player, players[i]) > 0) {
											return 1;
										}
									}
									if (allshown) return 1;
									return 0;
								}
							},
							threaten: 1.9,
						},
					},
					"nsfzxys_jiahuo": {
						trigger: {
							player: "damageEnd",
						},
						filter: function(event, player) {
							return event.source && event.source.isIn() && event.source != player && event.num > 0 && player.hasMark('nsfzxys_zaojia');
						},
						logTarget: "source",
						check: function(event, player) {
							return get.attitude(player, event.source) < player.countMark('nsfzxys_zaojia');
						},
						content: function() {
							'step 0'
							var num = Math.min(player.countMark('nsfzxys_zaojia'), trigger.num);
							player.removeMark('nsfzxys_zaojia', num);
							trigger.source.addMark('nsfzxys_zaojia', num, true);
							trigger.source.addAdditionalSkill("nsfzxys_xiaobing", "nsfzxys_xiaobing");
							'step 1'
							if (player.countMark('nsfzxys_zaojia') < 1) player.removeAdditionalSkill('nsfzxys_xiaobing');
						},
						ai: {
							combo: 'nsfzxys_zaojia'
						}
					},
					"nsfzxys_xiaobing": {
						trigger: {
							player: 'phaseJieshuBegin',
						},
						filter: function(event, player) {
							var num = player.hasSkill('nsfzxys_zaojia') ? 4 : 2;
							return player.countMark('nsfzxys_zaojia') >= num;
						},
						forced: true,
						content: function() {
							player.removeMark('nsfzxys_zaojia', player.countMark('nsfzxys_zaojia'), true);
							player.removeAdditionalSkill('nsfzxys_xiaobing');
							player.loseHp(1);
						},
					},
					"nsfzxys_manpao": {
						trigger: {
							player: 'phaseJieshuBegin'
						},
						direct: true,
						content: function() {
							'step 0'
							player.chooseTarget([1, 3], get.prompt2('nsfzxys_manpao'), lib.filter.notMe).set('ai', function(target) {
								if (get.attitude(player, target) > 0) return 0.5;
								return (-get.attitude(player, target));
							});
							'step 1'
							if (result.bool && result.targets.length) {
								event.targets = result.targets;
								event.targets.sort(lib.sort.seat);
								player.line(event.targets);
								player.logSkill('nsfzxys_manpao', event.targets);
								event.count = 0;
								event.num = 0;
								event.turn = false;
							} else {
								event.finish();
							}
							'step 2'
							if (event.count < event.targets.length) {
								event.current = event.targets[event.count];
								event.current.chooseCard('he', '选择一张牌弃置').set('ai', function(card) {
									if (get.attitude(event.current, player) > 0) return 0;
									if (event.num >= 1) return 0;
									var base = get.type(card) == 'basic' ? 5.1 : 7.1;
									return base - get.value(card);
								});
							} else {
								event.goto(5);
							}
							'step 3'
							if (result.cards && result.cards.length) {
								var card = result.cards[0];
								event.current.discard(card);
								if (get.type(card) == 'basic') {
									event.num += 1;
								}
							} else {
								event.num += 2;
							}
							'step 4'
							event.count++;
							if (event.num > 2) event.turn = true;
							if (event.count < event.targets.length) event.goto(2);
							'step 5'
							if (event.num < 2 || !player.isDamaged()) {
								event.goto(7);
							} else {
								player.chooseDrawRecover(1, true, function(event, player) {
									if (player.hp < 3 && player.isDamaged()) return 'recover_hp';
									return 'draw_card';
								});
							}
							'step 6'
							if (result.control == 'recover_hp') {
								event.num -= 2;
							} else {
								event.num -= 1;
							}
							event.goto(5);
							'step 7'
							if (event.num > 0) player.draw(event.num);
							if (event.turn) player.turnOver();
						},
						ai: {
							effect: {
								target: function(card, player, target) {
									if (card.name == 'guiyoujie') return [0, 1];
								}
							}
						},
					},
					"nsfzxys_dunjia": {
						trigger: {
							target: 'useCardToTargeted'
						},
						frequent: true,
						filter: function(event, player) {
							if (event.card.name != 'sha') return false;
							if (event.player.countCards('e') >= player.countCards('e')) return !player.getEquip(2);
							return false;
						},
						content: function() {
							var card = get.cardPile(function(card) {
								return get.type(card) == 'equip' && get.subtype(card) == 'equip2';
							});
							if (card) {
								player.equip(card);
								game.updateRoundNumber();
							}
						},
						ai: {
							threaten: 1.6,
							effect: {
								target: function(card, player, target, current) {
									if (card.name == 'sha' && !player.getEquip(2)) return 0.6;
								},
							}
						},
					},
					"nsfzxys_gudong": {
						unique: true,
						zhuSkill: true,
						trigger: {
							player: 'damageBegin4'
						},
						filter: function(event, player) {
							if (!player.hasZhuSkill('nsfzxys_gudong')) return false;
							if (event.num < 1) return false;
							return game.hasPlayer(function(current) {
								return current != player && current.group == player.group;
							});
						},
						content: function() {
							'step 0'
							if (event.current == undefined) event.current = player.next;
							if (event.current == player) {
								event.finish();
							} else if (event.current.group == player.group) {
								event.current.chooseBool('是否代替' + get.translation(player) + '承受' + get.cnNumber(trigger.num) + '点伤害？').set('ai', function(card) {
									if (get.attitude(event.current, player) <= 0) return false;

									if (event.current.hasSkillTag('maixie') || event.current.hasSkillTag('maixie_hp')) return (event.current.hp > 1);
									if (player.isTurnedOver() && event.current.hp > 1) return true;
									if (player.hp > 1 + trigger.num) return false;
									if (player.hp < event.current.hp - 1) return true;
									return (player.hp <= 1);
								});
							}
							'step 1'
							if (result.bool) {
								event.current.draw();
								if (player.isTurnedOver()) {
									player.turnOver();
								}
								trigger.player = event.current;
								event.current.addExpose(0.5);
								event.finish();
							} else {
								event.current = event.current.next;
								event.goto(0);
							}
						},
						ai: {
							noturn: true,
							skillTagFilter: function(player, tag) {
								if (tag == 'noturn') {
									return game.hasPlayer(function(current) {
										return current != player && current.group == player.group;
									});
								}
							}
						},
					},
					"nsfzxys_zhijian": {
						mark: true,
						intro: {
							mark: function(dialog, storage, player, skill) {
								var list = game.filterPlayer();
								var str = '所有角色当前所需的牌数：\n';
								for (var i = 0; i < list.length; i++) {
									var name = list[i].name;
									var num;
									if (typeof player.storage.nsfzxys_zhijian[name] != 'number') {
										num = 1;
									} else {
										num = player.storage.nsfzxys_zhijian[name];
									}
									str += get.translation(name) + '：' + num + '\n';
								}
								return str;
							},
						},
						init: function(player) {
							if (!player.storage.nsfzxys_zhijian) player.storage.nsfzxys_zhijian = {};
						},
						enable: "phaseUse",
						filterCard: true,
						position: "he",
						filter: function(event, player) {
							if (player.hasSkill('nsfzxys_zhijian_used')) return false;
							if (!game.hasPlayer(function(current) {
									return current.isDamaged();
								})) return false;
							return player.countCards('he') > 0;
						},
						check: function(card) {
							var player = _status.event.player;
							var base = 0;
							var targets = game.filterPlayer();
							for (var i = 0; i < targets.length; i++) {
								if (get.attitude(player, targets[i]) <= 0 || !targets[i].isDamaged()) continue;
								var name = targets[i].name;
								if (typeof player.storage.nsfzxys_zhijian[name] != 'number') {
									base = Math.max(base, 1);
								} else {
									base = Math.max(player.storage.nsfzxys_zhijian[name], base);
								}
							}

							if (ui.selected.cards.length >= Math.min(base, 2)) {
								return 0;
							}
							if (player.needsToDiscard()) {
								return 8 - player.getUseValue(card);
							}
							return 6 - player.getUseValue(card);
						},
						selectCard: [1, Infinity],
						//complexSelect: true,
						//complexCard: true,
						prompt: '选择一名角色回复一点体力',
						filterTarget: function(card, player, target) {
							if (!target.isDamaged()) return false;
							var length = ui.selected.cards.length;
							var name = target.name;
							var num;
							if (typeof player.storage.nsfzxys_zhijian[name] != 'number') {
								num = 1;
							} else {
								num = player.storage.nsfzxys_zhijian[name];
							}
							return length == num;
						},
						content: function() {
							'step 0'
							target.recover();
							'step 1'
							player.judge(function(card) {
								if (get.suit(card) == 'heart') return 6;
								if (get.color(card) == 'black') return -1;
								return 0;
							});
							'step 2'
							var name = target.name;
							if (result.judge <= 0) {
								if (typeof player.storage.nsfzxys_zhijian[name] != 'number') {
									player.storage.nsfzxys_zhijian[name] = 2;
								} else {
									player.storage.nsfzxys_zhijian[name]++;
								}
								if (result.judge < 0) {
									player.addTempSkill('nsfzxys_zhijian_used');
								}
							}
						},
						ai: {
							order: function(item, player) {
								var num = player.getStat().skill.nsfzxys_zhijian;
								if (!num) {
									return 7;
								} else if (num == 1) {
									return 3;
								} else if (num == 2) {
									return 1.5
								}
								return 1;
							},
							result: {
								player: 0.5,
								target: function(player, target) {
									return 3 + target.getDamagedHp();
								},
							},
							threaten: 1.5,
						},
						group: 'nsfzxys_zhijian_reduce',
						subSkill: {
							used: {},
							reduce: {
								trigger: {
									global: 'dyingBegin'
								},
								filter: function(event, player) {
									var name = event.player.name;
									return (typeof player.storage.nsfzxys_zhijian[name] == 'number');
								},
								forced: true,
								content: function() {
									var name = trigger.player.name;
									player.storage.nsfzxys_zhijian[name] -= 1;
								},
							},
						},
					},
					"nsfzxys_gongdi": {
						trigger: {
							player: 'judgeAfter'
						},
						frequent: true,
						content: function() {
							var num = 1;
							if (trigger.result.suit == 'spade') num = 2;
							player.draw(num);
						},
					},
					"nsfzxys_qiangying": {
						init: function(player) {
							if (!player.storage.nsfzxys_qiangying) player.storage.nsfzxys_qiangying = [];
						},
						enable: "phaseUse",
						filterTarget: function(card, player, target) {
							if (player == target) return false;
							return !target.hasSkill('baiban');
						},
						filterCard: function(card, player) {
							if (player.storage.nsfzxys_qiangying.length < 1) return get.color(card) == 'black';
							return player.storage.nsfzxys_qiangying.contains(get.suit(card));
						},
						selectCard: 1,
						position: "h",
						check: function(card) {
							var player = _status.event.player;
							if (player.storage.nsfzxys_qiangying && player.storage.nsfzxys_qiangying.length < 1) return 7.1 - get.value(card);
							return 5.1 - get.value(card);
						},
						content: function() {
							'step 0'
							target.addTempSkill('baiban', {
								player: 'phaseAfter'
							});
							player.storage.nsfzxys_qiangying.add(get.suit(cards[0]));
						},
						ai: {
							order: function(item, player) {
								var num = player.getStat().skill.nsfzxys_qiangying;
								if (!num || num < 1) {
									return 99;
								}
								return 4.1;
							},
							result: {
								target: function(player, target) {
									if (target.hasSkill('baiban')) return 0;
									var skills = target.getSkills(true, false);
									if (skills.length < 1) return 0;
									var base = -10;
									for (var i = 0; i < skills.length; i++) {
										var info = lib.skill[skills[i]];
										if (info && info.zero) base += 3;
									}
									return Math.min(base, 0);
								},
							},
							threaten: 2.1,
						},
						group: ["nsfzxys_qiangying_reset"],
						subSkill: {
							reset: {
								trigger: {
									player: "phaseAfter",
								},
								silent: true,
								content: function() {
									player.storage.nsfzxys_qiangying = [];
								},
								sub: true,
								forced: true,
								popup: false,
							},
						},
					},
					"nsfzxys_qiangyuan": {
						enable: 'phaseUse',
						usable: 1,
						filter: function(event, player) {
							return player.countCards('h') > 0;
						},
						filterTarget: lib.filter.notMe,
						filterCard: true,
						position: 'h',
						selectCard: [1, 1],
						discard: false,
						lose: false,
						delay: 0,
						content: function() {
							'step 0'
							event.card = cards[0];
							target.gain(event.card, player, 'give');
							'step 1'
							target.chooseUseTarget(event.card, game.filterPlayer(function(current) {
								return current != player && current != target;
							}), '使用得到的牌并令' + get.translation(player) + '摸一张牌，或者失去一点体力且不能使用牌');
							'step 2'
							if (result.bool) {
								player.draw();
								event.finish();
							} else {
								target.addTempSkill('nsfzxys_forbid');
							}
							'step 3'
							target.loseHp();
							game.delay();
						},
						ai: {
							order: function(item, player) {
								var hs = player.getCards('h');
								for (var i = 0; i < hs.length; i++) {
									var card = hs[i];
									var info = get.info(card);
									if (!info.filterTarget) {
										if (get.value(card) < 6.1) return 10;
									} else if (info.selectTarget == -1) {
										return game.hasPlayer(function(current) {
											if (current == player) return false;
											var eff = 0;
											game.countPlayer(function(current2) {
												if (current2 != player && current.canUse(card, current2)) eff += get.effect(current2, card, current, player);
											});
											if (eff > 0 || get.value(card) < 4.1) return Math.min(eff, 9);
										})

									} else if (game.hasPlayer(function(current) {
											if (current == player) return false;
											return game.hasPlayer(function(current2) {
												return current2 != player && current.canUse(card, current2) && get.effect(current2, card, current, player) > 0
											})
										})) {
										return 6;
									} else if (get.value(card) < 3) {
										return 4;
									}
								}
								return 1;
							},
							result: {
								target: function(player, target) {
									var card = ui.selected.cards[0];
									if (!card) return 0;

									var info = get.info(card);
									if (!info.filterTarget) {
										if (get.value(card) < 6.1) return -10;
									} else if (info.selectTarget == -1) {
										var eff = 0;
										game.countPlayer(function(current) {
											if (current != player && target.canUse(card, current)) eff += get.effect(current, card, target, player);
										});
										if (eff > 0 || get.value(card) < 4.1) return eff;
										return 0;
									} else if (game.hasPlayer(function(current) {
											return current != player && target.canUse(card, current) && get.effect(current, card, target, player) > 0
										})) {
										return 1.5;
									} else if (get.value(card) < 3) {
										return -1;
									}
									return 0;
								},
							},
						},
					},
					"nsfzxys_jingji": {
						inherit: 'nsfzxys_losehp3',
						group: ["nsfzxys_jingji_discard"],
						action_tag: {
							overall: 5,
							loseHp_defend: 1,
							discard: 2,
							draw: 0.5,
						},
						subSkill: {
							discard: {
								trigger: {
									player: "loseHpAfter",
								},
								direct: true,
								sub: true,
								filter: function(event, player) {
									//if (player == _status.currentPhase) return false;
									return true;
								},
								content: function() {
									'step 0'
									event.target = _status.currentPhase;
									event.num = 1; //event.target.countCards('h');
									if (event.target == player || event.target.countCards('h') == 0) {
										event.goto(3);
									}
									'step 1'
									var chooseButton = player.chooseButton([1, 3], ["弃置" + get.translation(event.target) + '的手牌', event.target.getCards('h')]);
									chooseButton.set('target', event.target);
									chooseButton.set('ai', function(button) {
										if (get.attitude(player, _status.event.target) > 0) return 0;
										return get.value(button.link) || 1;
									});
									chooseButton.set('filterButton', function(button) {
										if (ui.selected.buttons.length < 1) return true;
										var num = get.number(button.link);
										for (var i = 0; i < ui.selected.buttons.length; i++) {
											num = nsfzxys_findGCD(num, get.number(ui.selected.buttons[i]));
										};
										return num > 1;
									});
									'step 2'
									if (result.bool && result.links.length > 0) {
										target.discard(result.links).set('source', player);
										//event.num = result.links.length;
									} else {
										event.finish();
									}
									'step 3'
									if (event.target.countCards('h') >= player.countCards('h')) {
										player.draw(Math.max(event.num, 1));
									}
								},
							},
						},
						ai: {
							threaten: 0.6,
						},
					},
					"nsfzxys_tangong": {
						trigger: {
							player: 'useCardToPlayered'
						},
						filter: function(event, player) {
							return event.card.name == 'sha';
						},
						usable: 3,
						check: function(event, player) {
							if (player.hasSkill('nsfzxys_tangong_db')) return 1;
							var evt = _status.event.getTrigger();
							var target = evt.target;
							var base = target.countCards('h') * 0.2;
							if (target.hasSkillTag('respondShan')) base += 0.2;
							/*if (player.hp > 2) {
								base += 1;
							} else if (player.hp == 2) {
								base += 0.4;
							} else {
								base += 0.1;
							}
							if (target.hasSkillTag('respondShan') || target.countCards('h', 'shan') > 0) base -= 1;
							if (target.countCards('h') == 0) {
								base += 1.5;
							} else if (target.countCards('h') < 3) {
								base += 0.4;
							}
							if (target.getEquip(2) && get.name(target.getEquip(2) == 'bagua') && !(player.getEquip(1) && get.name(player.getEquip(1) == 'qinggang'))) {
								base *= 0.7;
							}*/
							return Math.max(1 - Math.random() - base, 0);
						},
						content: function() {
							'step 0'
							player.draw(2);
							player.addTempSkill('nsfzxys_tangong_db', 'shaEnd');
						},
						mod: {
							cardUsable: function(card, player, num) {
								if (card.name == 'sha') return num + 1;
							},
						},
					},
					"nsfzxys_tangong_db": {
						trigger: {
							player: 'shaMiss'
						},
						forced: true,
						charlotte: true,
						lastDo: true,
						content: function() {
							player.loseHp(1);
							player.removeSkill('nsfzxys_tangong_db');
						},
					},
					"nsfzxys_zhengbian": {
						trigger: {
							player: "phaseEnd",
						},
						unique: true,
						mark: true,
						skillAnimation: true,
						limited: true,
						animationColor: 'wood',
						intro: {
							content: 'limited'
						},
						marktext: "变",
						init: function(player) {
							if (typeof player.storage.nsfzxys_zhengbian != 'boolean') player.storage.nsfzxys_zhengbian = false;
						},
						filter: function(event, player) {
							return (!player.storage.nsfzxys_zhengbian);
						},
						check: function(event, player) {
							return (game.hasPlayer(function(current) {
								return current != player && ((current.isTurnedOver() && get.attitude(player, current) > 1) || (!current.isTurnedOver() && get.attitude(player, current) < 0));
							}));
						},
						direct: true,
						content: function() {
							'step 0'
							player.chooseTarget('是否对一名角色发动【政变】？', function(card, player, target) {
								return player != target;
							}).ai = function(target) {
								if (target.isTurnedOver() && get.attitude(player, target) > 1) return 10;
								if (target.isTurnedOver() && get.attitude(player, target) < 0) return -10;
								return 1 - get.attitude(player, target);
							}
							'step 1'
							if (result.bool) {
								player.awakenSkill('nsfzxys_zhengbian');
								player.logSkill('nsfzxys_zhengbian', result.targets);
								result.targets[0].turnOver();
							} else {
								event.finish();
							}
							'step 2'
							player.insertPhase();
						},
					},
					"nsfzxys_zhengqi": {
						trigger: {
							global: ['dyingAfter']
						},
						frequent: true,
						filter: function(event, player) {
							return event.player.isIn();
						},
						content: function() {
							player.draw();
						}
					},
					"nsfzxys_gengzhi": {
						trigger: {
							player: "phaseUseBegin",
						},
						locked: true,
						popup: false,
						filter: function(event, player) {
							return player.countCards('h', function(card) {
								return get.color(card) == 'black';
							}) > 0;
						},
						content: function() {
							'step 0'
							player.chooseToDiscard('he', get.prompt2("nsfzxys_gengzhi"), 1, function(card) {
								return get.color(card) == 'black';
							}).set('ai', function(card) {
								var hs = player.getCards('h', function(card2) {
									return card2 != card && card2.name == 'sha';
								});

								var count = 0;
								if (player.hasCard('sha')) count += 1;
								for (var i = 0; i < hs.length; i++) {
									var card2 = hs[i];
									if (game.hasPlayer(function(current) {
											return current != player && player.canUse(card2, current) && get.effect(player, card2, current) > 0;
										})) {
										count += 1;
									}
								}

								if (player.needsToDiscard(1 - count) > 0) return 6 - get.value(card);
								return 0;
							});
							'step 1'
							if (result.bool) {
								player.logSkill('nsfzxys_gengzhi');
								var targets = game.filterPlayer(function(current) {
									return current != player;
								});
								targets.sort(lib.sort.seat);
								event.targets = targets;
								event.num = 0;
								player.line(targets, 'green');
							} else {
								event.finish();
							}
							'step 2'
							if (num < event.targets.length) {
								event.targets[num].addTempSkill('nsfzxys_gengzhi_db');
								event.num++;
								event.redo();
							}
						},
					},
					"nsfzxys_gengzhi_db": {
						inherit: "fengyin",
						trigger: {
							player: 'gainBefore'
						},
						content: function() {
							trigger.cancel();
							var cards = trigger.result || trigger.cards;
							if (cards && !get.owner(cards[0])) {
								player.$throw(cards, 1000);
								game.log(player, '将', cards, '置入了弃牌堆');
								game.delay(2);
							}
						},
						charlotte: true,
						forced: true,
						marktext: "直",
						debuff: true,
						popup: false,
						mod: {
							cardEnabled2: function(card) {
								return false;
							},
						},
						intro: {
							name: '耿直',
							content: function(storage, player, skill) {
								var list = [];
								var str = "不能使用或打出牌，";
								for (var i in player.disabledSkills) {
									if (player.disabledSkills[i].contains(skill)) {
										list.push(i)
									}
								}
								if (list.length) {
									str = '以下技能失效：';
									for (var i = 0; i < list.length; i++) {
										if (lib.translate[list[i] + '_info']) {
											str += get.translation(list[i]) + '、';
										}
									}
								}
								return str.slice(0, str.length - 1);
							},
						},
						ai: {
							neg: true,
						},
					},
					"nsfzxys_kuangben": {
						trigger: {
							player: 'damageEnd',
							source: 'damageSource',
						},
						filter: function(event) {
							return event.num > 0;
						},
						init: function(player) {
							if (!player.storage.nsfzxys_kuangben) player.storage.nsfzxys_kuangben = 0;
						},
						marktext: "奔",
						intro: {
							content: '与其他角色计算距离时-#，可以额外使用#张【杀】'
						},
						direct: true,
						content: function() {
							'step 0'
							if (!event.count) event.count = trigger.num;
							event.count--;
							player.chooseControl(['选项一', '选项二', 'cancel2'], function() {
								if (player != _status.currentPhase) return '选项一';
								if (player.countUsed('sha', true) > 0 && player.hasCard('sha', 'h')) return '选项二';

								if (player.needsToDiscard() < 2) return '选项一';
								return '选项二';
							}).set('prompt', get.prompt("nsfzxys_kuangben")).set('choiceList', [
								'摸一张牌',
								'结束阶段摸一张牌，与其他角色计算距离时-1，可以额外使用一张【杀】',
							]);
							'step 1'
							if (result.control == '选项一') {
								player.logSkill('nsfzxys_kuangben');
								player.draw();
							} else if (result.control == '选项二') {
								player.logSkill('nsfzxys_kuangben');
								player.storage.nsfzxys_kuangben++;
								player.markSkill('nsfzxys_kuangben');
							} else {
								event.finish();
							}
							'step 2'
							if (event.count > 0) event.goto(0);
						},
						group: "nsfzxys_kuangben_end",
						subSkill: {
							end: {
								trigger: {
									global: 'phaseJieshuBegin'
								},
								forced: true,
								sub: true,
								popup: false,
								silent: true,
								filter: function(event, player) {
									return player.storage.nsfzxys_kuangben > 0;
								},
								content: function() {
									'step 0'
									player.logSkill('nsfzxys_kuangben');
									player.draw(player.storage.nsfzxys_kuangben);
									'step 1'
									player.storage.nsfzxys_kuangben = 0;
									player.unmarkSkill('nsfzxys_kuangben');
								},
							},
						},
						mod: {
							cardUsable: function(card, player, num) {
								if (card.name == 'sha') return num + player.storage.nsfzxys_kuangben;
							},
							globalFrom: function(from, to, current) {
								return current - from.storage.nsfzxys_kuangben;
							},
						},
					},
					"nsfzxys_huiguang": {
						trigger: {
							player: 'die'
						},
						forced: true,
						forceDie: true,
						skillAnimation: true,
						animationColor: 'thunder',
						filter: function(event) {
							return event.source && event.source.isIn();
						},
						content: function() {
							trigger.source.addSkill('nsfzxys_huiguang_db');
							if (!trigger.source.hasJudge('shandian')) {
								var card = game.createCard('shandian', 'heart', 12);
								trigger.source.addJudge(card);
								trigger.source.$draw(card);
								game.delay();
							}
						},
						logTarget: 'source',
						ai: {
							threaten: function(player, target) {
								if (target.hp == 1) return 0.2;
								return 1.5;
							},
							effect: {
								target: function(card, player, target, current) {
									if (!target.hasFriend()) return;
									if (target.hp <= 1 && get.tag(card, 'damage')) return [1, 0, 0, -2];
								}
							}
						}
					},
					"nsfzxys_huiguang_db": {
						charlotte: true,
						debuff: true,
						mark: true,
						marktext: '回',
						intro: {
							name: '回光',
							content: '本局游戏内【闪电】的效果必中',
						},
						mod: {
							judge: function(player, result) {
								if (_status.event.cardname == 'shandian') {
									result.bool = false;
									result.judge = -6;
								}
							}
						},
						ai: {
							neg: true,
						}
					},
					"nsfzxys_shiguang": {
						init: function(player) {
							if (!player.storage.nsfzxys_shiguang) player.storage.nsfzxys_shiguang = [];
						},
						intro: {
							content: 'cards',
							onunmark: function(storage, player) {
								if (storage && storage.length) {
									player.$throw(storage, 1000);
									game.cardsDiscard(storage);
									game.log(storage, '被置入了弃牌堆');
									storage.length = 0;
								}
							},
						},
						trigger: {
							global: 'useCard',
						},
						filter: function(event, player) {
							if (player == event.player) return false;

							var card = event.card;
							if (get.type(card, 'trick') == 'equip') return false;
							for (var i = 0; i < player.storage.nsfzxys_shiguang.length; i++) {
								if (get.suit(event.card) == get.suit(player.storage.nsfzxys_shiguang[i])) return true;
							}
							return false;
						},
						direct: true,
						content: function() {
							'step 0'
							player.chooseCardButton(player.storage.nsfzxys_shiguang, '选择一张与' + get.translation(trigger.card) + '花色相同的牌来取消该牌的所有目标', 1).set('filterButton', function(button) {
								var card = button.link;
								return get.suit(card) == get.suit(trigger.card);
							}).set('ai', function(button) {
								//if (trigger.getParent().excluded.contains(player)) return false;

								var effect = 0;
								if (trigger.card.name == 'wuxie' || trigger.card.name == 'shan') {
									if (get.attitude(player, trigger.player) < -1) {
										effect = -1;
									}
								} else if (trigger.targets && trigger.targets.length) {
									for (var i = 0; i < trigger.targets.length; i++) {
										effect += get.effect(trigger.targets[i], trigger.card, trigger.player, player);
									}
								}

								var bool = false;
								if (effect < 0) {
									if (player.storage.nsfzxys_shiguang.length && player.storage.nsfzxys_shiguang.length > 3) bool = true;
									if (trigger.card.name == 'sha') {
										if (trigger.targets.contains(player)) {
											if (player.countCards('h', 'shan') == 0) {
												bool = true;
											}
										} else {
											var target = trigger.targets[0];
											bool = (target.hp == 1 || (target.countCards('h') <= 2 && target.hp <= 2));
										}
									} else if (get.tag(trigger.card, 'respondSha')) {
										if (player.countCards('h', 'sha') == 0) {
											bool = true;
										}
									} else if (get.tag(trigger.card, 'respondShan')) {
										if (player.countCards('h', 'shan') == 0) {
											bool = true;
										}
									} else if (get.tag(trigger.card, 'damage')) {
										if (player.getDamagedHp() > 1) bool = true;
									} else if (get.name(trigger.card) == 'shunshou') {
										bool = true;
									} else if (get.tag(trigger.card, 'recover')) {
										bool = true;
									} else if (trigger.card.name == 'wuxie' || trigger.card.name == 'shan') {
										bool = true;
									}
								}

								if (!bool) return 0;

								var val = get.value(button.link);
								if (val < 0) return 100;
								return 20 - val;
							});
							'step 1'
							if (result.bool) {
								player.logSkill('nsfzxys_shiguang');
								game.log(player, '将', result.links, '置于弃牌堆');
								player.$throw(result.links, 1000);
								player.storage.nsfzxys_shiguang.remove(result.links[0]);
								game.cardsDiscard(result.links[0]);
								player.syncStorage('nsfzxys_shiguang');

								if (player.storage.nsfzxys_shiguang.length < 1) {
									player.unmarkSkill('nsfzxys_shiguang');
								} else {
									player.markSkill('nsfzxys_shiguang');
								}

								if (!event.isMine()) game.delayx();
								trigger.targets = [];
								trigger.triggeredTargets2 = [];
								trigger.all_excluded = true;
								game.delay();
							}
						},
						ai: {
							threaten: 0.6,
						},
						//ondisable: true,
						onremove: function(player) {
							if (player.storage.nsfzxys_shiguang.length) {
								player.$throw(player.storage.nsfzxys_shiguang, 1000);
								game.log(player.storage.nsfzxys_shiguang, '被置入了弃牌堆');
								game.cardsDiscard(player.storage.nsfzxys_shiguang);
								player.storage.nsfzxys_shiguang = [];
								player.unmarkSkill('nsfzxys_shiguang');
							}
						},
						group: 'nsfzxys_shiguang_gain',
						subfrequent: ['gain'],
						subSkill: {
							gain: {
								trigger: {
									player: ['phaseZhunbeiBegin', 'damageAfter', 'loseHpAfter'],
								},
								frequent: true,
								sub: true,
								usable: 1,
								content: function() {
									'step 0'
									if (!player.storage.nsfzxys_shiguang || player.storage.nsfzxys_shiguang.length < 5) {
										var card1 = get.cards(1);
										game.cardsGotoSpecial(card1);
										//var card1 = get.cards(1)[0];
										//player.showCards([card1]);
										player.storage.nsfzxys_shiguang = player.storage.nsfzxys_shiguang.addArray(card1);
										player.$gain2(card1);
										player.syncStorage('nsfzxys_shiguang');
										player.markSkill('nsfzxys_shiguang');
										game.log(player, '将', card1, '置于武将牌上');
										game.delay();
									}
									'step 1'
									if (player.countCards('h') > 0) {
										var dialog = ['请选择要交换的手牌和「识广」牌', '<div class="text center">识广</div>', player.storage.nsfzxys_shiguang, '<div class="text center">手牌</div>', player.getCards('h')];
										var next = player.chooseButton(dialog);
										next.set('filterButton', function(button) {
											var ss = _status.event.player.storage.nsfzxys_shiguang;
											var hs = _status.event.player.getCards('h');
											var sn = 0;
											var hn = 0;
											var ub = ui.selected.buttons;
											for (var i = 0; i < ub.length; i++) {
												if (ss.contains(ub[i].link)) sn++;
												else hn++;
											}
											return !(sn >= hs.length && ss.contains(button.link) || hn >= ss.length && hs.contains(button.link));
										});
										next.set('selectButton', function() {
											if (ui.selected.buttons.length == 0) return 2;
											var ss = _status.event.player.storage.nsfzxys_shiguang;
											var hs = _status.event.player.getCards('h');
											var sn = 0;
											var hn = 0;
											var ub = ui.selected.buttons;
											for (var i = 0; i < ub.length; i++) {
												if (ss.contains(ub[i].link)) sn++;
												else hn++;
											}
											if (sn != hn) return 2 * Math.max(sn, hn);
											else {
												if (sn == ss.length || hn == hs.length || sn == hs.length || hn == ss.length) return ub.length;
												return [ub.length, ub.length + 1];
											}
										});
										next.set('ai', function(button) {
											/*var ss = _status.event.player.storage.nsfzxys_shiguang;
											var hs = _status.event.player.getCards('h');
											if (ss.contains(button.link)) {
												return player.getUseValue(button.link) - 4;
											} else {
												return 20 - get.value(button.link);
											}*/
											return 0;
										});

									} else {
										event.finish();
									}
									'step 2'
									if (result.bool) {
										var gains = [];
										var pushs = [];
										for (var i = 0; i < result.links.length; i++) {
											var card = result.links[i];
											if (player.storage.nsfzxys_shiguang.contains(card)) gains.push(card);
											else pushs.push(card);
										}
										player.lose(pushs, ui.special, 'toStorage');
										game.log(player, '将', pushs, '放在了武将牌上');
										player.gain(gains, 'gain2', 'log', 'fromStorage');
										player.storage.nsfzxys_shiguang.addArray(pushs);
										player.storage.nsfzxys_shiguang.removeArray(gains);
										player.markSkill('nsfzxys_shiguang');
									}
								},
							},
						},
					},
					"nsfzxys_xuewei": {
						trigger: {
							global: "loseHpAfter",
						},
						filter: function(event, player) {
							if (!player.hasZhuSkill('nsfzxys_xuewei', event.player) || player.hasSkill('nsfzxys_xuewei_used')) return false;
							if (event.num < 1 || !event.player.isIn()) return false;
							return event.player != player && event.player.group == player.group;
						},
						zhuSkill: true,
						direct: true,
						content: function() {
							'step 0'
							trigger.player.chooseBool('学委：是否令' + get.translation(player) + '摸一张牌？').set('ai', function() {
								return get.attitude(trigger.player, player) >= 1;
							});
							'step 1'
							if (result.bool) {
								player.draw();
								trigger.player.line(player);
								trigger.player.addExpose(0.1);
								trigger.player.popup('nsfzxys_xuewei');
								player.addTempSkill('nsfzxys_xuewei_used');
							}
						},
						subSkill: {
							used: {
								charlotte: true,
							},
						},
					},
					"nsfzxys_jingjian": {
						trigger: {
							global: "gainEnd",
						},
						marktext: "简",
						intro: {
							content: 'players',
						},
						usable: 1,
						init: function(player) {
							if (!player.storage.nsfzxys_jingjian) player.storage.nsfzxys_jingjian = [];
						},
						filter: function(event, player) {
							if (event.player == player || player.storage.nsfzxys_jingjian.contains(event.player)) return false;
							return !(event.getParent().name == 'draw' && event.getParent(2).name == 'phaseDraw') && event.player.countCards('he') > 0;
						},
						logTarget: "player",
						check: function(event, player) {
							return get.attitude(player, event.player) < 0;
						},
						content: function() {
							var hs = trigger.player.getCards('he');
							if (hs.length) {
								//player.gainPlayerCard(trigger.player, true, 'he', 1);
								trigger.player.chooseToDiscard('he', 1, true);
								player.storage.nsfzxys_jingjian.push(trigger.player);
								player.markSkill('nsfzxys_jingjian');
							}
						},
						ai: {
							threaten: 2.6,
							expose: 0.5,
						},
						group: 'nsfzxys_jingjian_reset',
						subSkill: {
							reset: {
								trigger: {
									global: 'roundStart',
								},
								forced: true,
								silent: true,
								charlotte: true,
								popup: false,
								sub: true,
								content: function() {
									player.storage.nsfzxys_jingjian = [];
									player.unmarkSkill('nsfzxys_jingjian');
								}
							},
						},
					},
					"nsfzxys_manfen": {
						inherit: "nsfzxys_losehp1",
						group: 'nsfzxys_manfen_draw',
						subfrequent: ['draw'],
						action_tag: {
							overall: 3.6,
							loseHp_defend: 1,
							draw: 1,
							rejudge: 0.4
						},
						subSkill: {
							draw: {
								trigger: {
									player: ["loseHpAfter", "phaseZhunbeiBegin"],
								},
								filter: function(event, player) {
									return true;
								},
								frequent: true,
								sub: true,
								content: function() {
									'step 0'
									event.count = trigger.num || 1;
									'step 1'
									event.count--;
									player.draw(3);
									event.count2 = 2;
									'step 2'
									player.chooseCard('he', '将一张牌置于牌堆顶，还需处理' + get.cnNumber(event.count2) + '张', 1).set('ai', function(card) {
										return 0;
									});
									'step 3'
									if (result.bool && result.cards) {
										event.count2 -= 1;
										event.card = result.cards[0];
										player.lose(result.cards, ui.special);
										game.log(player, '将', (get.position(event.card) == 'h' ? '一张牌' : event.card), '置于牌堆顶');
										game.broadcastAll(function(player) {
											var cardx = ui.create.card();
											cardx.classList.add('infohidden');
											cardx.classList.add('infoflip');
											player.$throw(cardx, 1000, 'nobroadcast');
										}, player);
										game.updateRoundNumber();
									} else {
										event.goto(5);
									}
									'step 4'
									event.card.fix();
									ui.cardPile.insertBefore(event.card, ui.cardPile.firstChild);
									game.updateRoundNumber();
									if (event.count2 > 0) {
										event.goto(2);
									} else {
										event.goto(7);
									}
									'step 5'
									player.chooseCard('he', '将一张牌置于牌堆底，还需处理' + get.cnNumber(event.count2) + '张', 1).set('ai', function(card) {
										return 0;
									});
									'step 6'
									if (result.bool && result.cards) {
										event.count2 -= 1;
										event.card = result.cards[0];
										player.lose(result.cards, ui.special);
										game.log(player, '将', (get.position(event.card) == 'h' ? '一张牌' : event.card), '置于牌堆底');
										game.broadcastAll(function(player) {
											var cardx = ui.create.card();
											cardx.classList.add('infohidden');
											cardx.classList.add('infoflip');
											player.$throw(cardx, 1000, 'nobroadcast');
										}, player);
										game.updateRoundNumber();
									} else {
										event.goto(8);
									}
									'step 7'
									event.card.fix();
									ui.cardPile.insertBefore(event.card, ui.cardPile.firstChild);
									game.updateRoundNumber();
									if (event.count2 > 0) {
										event.goto(2);
									} else {
										event.goto(9);
									}
									'step 8'
									player.chooseToDiscard(1, true, 'he', '将一张牌弃置，还需处理' + get.cnNumber(event.count2) + '张');
									event.count2--;
									if (event.count2 > 0) {
										event.goto(2);
									}
									'step 9'
									if (event.count > 0) event.goto(1);
								},
							},
						},
					},
					"nsfzxys_wenzhong": {
						trigger: {
							global: ['respond', 'useCard'],
						},
						filter: function(event, player) {
							if (!event.respondTo) return false;
							if (get.name(event.card) != 'wuxie') return false;
							if (event.player == player && player == event.respondTo[0]) return false;
							//if (player != event.respondTo[0]) return false;

							var cards = []
							if (get.itemtype(event.respondTo[1]) == 'card') {
								cards.push(event.respondTo[1]);
							} else if (event.respondTo[1].cards) {
								cards.addArray(event.respondTo[1].cards);
							}
							for (var i = 0; i < cards.length; i++) {
								if (get.name(cards[i]) == 'wuxie') {
									cards.splice(i--, 1);
								}
							}
							return cards.filterInD('o').length > 0;
						},
						frequent: true,
						content: function() {
							'step 0'
							var cards = [];
							if (get.itemtype(trigger.respondTo[1]) == 'card') {
								cards.push(trigger.respondTo[1]);
							} else if (trigger.respondTo[1].cards) {
								cards.addArray(trigger.respondTo[1].cards);
							}
							for (var i = 0; i < cards.length; i++) {
								if (get.name(cards[i]) == 'wuxie') {
									cards.splice(i--, 1);
								}
							}
							cards = cards.filterInD('o');
							player.gain(cards, 'gain2', 'log');
						},
						group: "nsfzxys_wenzhong_wuxie",
						subSkill: {
							wuxie: {
								trigger: {
									player: 'useCard1'
								},
								forced: true,
								firstDo: true,
								sub: true,
								silent: true,
								filter: function(event) {
									return get.type(event.card) == 'trick';
								},
								content: function() {
									trigger.nowuxie = true;
								},
							},
						},
					},
					"nsfzxys_jingxuan_bg": {
						intro: {
							name: "竞选",
							content: 'mark',
						},
						marktext: "竞",

					},
					"nsfzxys_jingxuan": {
						unique: true,
						enable: 'phaseUse',
						mark: true,
						skillAnimation: true,
						limited: true,
						animationColor: 'orange',
						intro: {
							content: 'limited'
						},
						marktext: "竞",
						init: function(player) {
							if (typeof player.storage.nsfzxys_jingxuan != 'boolean') player.storage.nsfzxys_jingxuan = false;
						},
						filter: function(event, player) {
							return (!player.storage.nsfzxys_jingxuan);
						},
						content: function() {
							'step 0'
							player.awakenSkill('nsfzxys_jingxuan');
							//player.storage.nsfzxys_jingxuan = true;
							//player.unmarkSkill('nsfzxys_jingxuan');
							'step 1'
							var num = Math.max(2, player.getDamagedHp());
							player.addMark('nsfzxys_jingxuan_bg', num);
							player.draw(num);
							player.addSkill('nsfzxys_jingxuan_sha');
							player.addSkill('nsfzxys_jingxuan_damage');
						},
						ai: {
							order: function(item, player) {
								if (player.hp < 2) return 99;
								if (player.hp == 2 && player.countCards('h') <= 2) return 8;
								return 4;
							},
							result: {
								player: function(player) {
									if (player.getDamagedHp() > 2) return 10;
									if (player.hp <= 2 && player.countCards('h') <= 2) return 10;
									return 0;
								}
							},
						},
					},
					"nsfzxys_jingxuan_sha": {
						enable: ['chooseToUse', 'chooseToRespond'],
						viewAs: {
							name: 'sha',
						},
						filterCard: function() {
							return false;
						},
						viewAsFilter: function(player) {
							return player.hasMark('nsfzxys_jingxuan_bg');
						},
						selectCard: -1,
						precontent: function() {
							player.removeMark('nsfzxys_jingxuan_bg', 1);
						},
						prompt: '移除一个“竞”标记，视为使用或打出一张【杀】',
						ai: {
							order: function() {
								var player = _status.event.player;
								if (player.hp <= 2 && !game.hasPlayer(function(current) {
										return player.canUse('sha', current) && current.hp == 1 && get.effect(current, {
											name: 'sha'
										}, player, player) > 0;
									})) {
									return 0;
								}
								return 2.95;
							},
							skillTagFilter: function(player, tag, arg) {
								if (!player.hasMark('nsfzxys_jingxuan_bg')) return false;
							},
							respondSha: true,
						},
					},
					"nsfzxys_jingxuan_damage": {
						trigger: {
							player: ['damageBegin3'],
						},
						prompt: '移除一个“竞”标记，令此伤害-1',
						filter: function(event, player) {
							return event.player.hasMark('nsfzxys_jingxuan_bg') && event.num > 0;
						},
						content: function() {
							trigger.num--;
							player.removeMark('nsfzxys_jingxuan_bg', 1);
						},
					},
					"nsfzxys_lapiao": {
						trigger: {
							global: 'damageSource'
						},
						filter: function(event, player) {
							if (player == event.source || !event.source || event.source.group != player.group) return false;
							if (!event.card || get.name(event.card) != 'sha') return false;
							return player.hasZhuSkill('nsfzxys_lapiao', event.source);
						},
						direct: true,
						zhuSkill: true,
						content: function() {
							'step 0'
							trigger.source.chooseBool('是否对' + get.translation(player) + '发动【拉票】？').set('choice', get.attitude(trigger.source, player) > 1);
							'step 1'
							if (result.bool) {
								trigger.source.logSkill('nsfzxys_lapiao', player);
								//trigger.source.line(player, 'green')
								trigger.source.judge(function(card) {
									if (get.color(card) == 'red') return 4;
									return 0;
								});
							} else {
								event.finish();
							}
							'step 2'
							if (result.bool) {
								player.addMark('nsfzxys_jingxuan_bg', 1);
								player.addSkill('nsfzxys_jingxuan_sha');
								player.addSkill('nsfzxys_jingxuan_damage');
							}
						}
					},
					"nsfzxys_baimian": {
						trigger: {
							target: "useCardToTargeted",
						},
						filter: function(event, player) {
							return get.tag(event.card, 'damage') && event.player && event.player != player && player.countCards('he', function(card) {
								return get.type(card) == 'equip';
							});
						},
						direct: true,
						content: function() {
							"step 0"
							var next = player.chooseToDiscard('he', '白面：是否弃置一张装备牌令' + get.translation(trigger.card) + '对你无效？', function(card, player) {
								return get.type(card) == 'equip';
							});
							next.set('ai', function(card) {
								if (_status.event.danger) {
									return 15 - get.value(card);
								}
								if (_status.event.goon2) {
									return 9.5 - get.value(card);
								}
								return 0;
							});
							next.set('goon2', get.effect(player, trigger.card, trigger.player, player) < 0 && get.attitude(player, trigger.player) < 1);
							next.set('danger', player.hp < 2 && get.tag(trigger.card, 'damage'));
							next.logSkill = 'nsfzxys_baimian';
							"step 1"
							if (result.bool) {
								trigger.player.damage('nosource');
								trigger.excluded.push(player);
							}
						},
						mod: {
							aiValue: function(player, card, num) {
								if (get.type(card) == 'equip') {
									return num * 1.3;
								}
							},
							aiOrder: function(player, card, num) {
								if (get.type(card) == 'equip') {
									if (player.getEquip(get.subtype(card)) && !player.needsToDiscard()) {
										return 0;
									}
								}
							},
						},
					},
					"nsfzxys_qingsao": {
						trigger: {
							player: "phaseDrawBegin1",
						},
						filter: function(event, player) {
							if (event.numFixed) return false;
							return game.hasPlayer(function(current) {
								return current != player && current.countCards('he');
							});
						},
						check: function(event, player) {
							var enemies = game.countPlayer(function(current) {
								if ((current.countCards('he') > 1 || current.countCards('e') > 0) && current != player && get.attitude(player, current) < 0) {
									return true;
								}
								return false;
							});
							return enemies > 0 && player.countCards('he', {
								type: 'equip'
							}) < 3;
						},
						content: function() {
							'step 0'
							trigger.changeToZero();
							var card2 = get.cards(2);
							game.cardsGotoOrdering(card2);
							event.cards = [];
							event.num = 0;
							player.showCards(card2, '【清扫】展示的牌');
							for (var i = 0; i < 2; i++) {
								if (get.color(card2[i]) == 'black') {
									event.num++;
								} else {
									event.cards.push(card2[i]);
								}
							}
							'step 1'
							if (event.cards.length) player.gain(event.cards, 'gain2');
							if (event.num > 0) {
								player.chooseTarget([1, event.num], get.prompt2('nsfzxys_qingsao'), lib.filter.notMe, true).set('ai', function(target) {
									if (get.attitude(player, target) >= 1) return 0.1 * target.countCards('e');
									return (1 - get.attitude(player, target)) * (target.countCards('he'));
								});
							} else {
								event.finish();
							}
							'step 2'
							if (result.bool && result.targets.length) {
								event.targets = result.targets;
								event.targets.sort(lib.sort.seat);
								player.line(event.targets);
								event.count = 0;
							} else {
								event.finish();
							}
							'step 3'
							event.current = event.targets[event.count];
							player.logSkill('nsfzxys_qingsao', event.current);
							event.current.chooseCard('he', '选择一张装备牌交给' + get.translation(player), function(card) {
								return get.type(card) == 'equip';
							}).set('ai', function(card) {
								var base = get.attitude(event.current, player) > 0 ? 9 : 6;
								return base - get.value(card);
							});
							'step 4'
							if (result.cards && result.cards.length > 0) {
								var card = result.cards[0];
								event.current.showCards([card]);
								player.gain(card, 'giveAuto', event.current);
							} else {
								player.discardPlayerCard(event.current, 2, true, 'he');
							}
							'step 5'
							event.count++;
							game.delay(1);
							if (event.count < event.targets.length) event.goto(3);
						},
					},
					"nsfzxys_dade": {
						shaRelated: true,
						trigger: {
							global: 'shaMiss'
						},
						filter: function(event, player) {
							return player.canCompare(event.target);
						},
						check: function(event, player) {
							if (!player.hasCard(function(card) {
									return get.value(card) < 6.1;
								})) return false;
							return get.attitude(player, event.target) < 0;
						},
						logTarget: 'target',
						content: function() {
							'step 0'
							player.chooseToCompare(trigger.target);
							'step 1'
							if (result.bool) {
								trigger.untrigger();
								trigger.trigger('shaHit');
								trigger._result.bool = false;
								trigger._result.result = null;
							}
						},
						ai: {
							expose: 0.3,
						},
					},
					"nsfzxys_manzu": {
						trigger: {
							player: 'compare',
							target: 'compare'
						},
						forced: true,
						locked: false,
						filter: function(event, player) {
							var num2 = 0;
							if (player == event.player) {
								num2 = event.target.getAttackRange(); // || event.targets[0].getAttackRange();
							} else {
								num2 = event.player.getAttackRange();
							}
							return player.getAttackRange() > num2;
						},
						content: function() {
							'step 0'
							game.log(player, '拼点视为赢');
							if (player == trigger.player) {
								trigger.num1 = 14;
							} else {
								trigger.num2 = 14;
							}
						},
						group: 'nsfzxys_manzu_draw',
						subfrequent: ['draw'],
						subSkill: {
							draw: {
								trigger: {
									global: 'chooseToCompareBegin',
								},
								usable: 1,
								filter: function(event, player) {
									if (player == event.player) return true;
									if (event.targets) return event.targets.contains(player);
									return player == event.target;
								},
								frequent: true,
								content: function() {
									player.draw();
								},
								sub: true,
							},
						},
					},
					"nsfzxys_huzhu": {
						enable: 'phaseUse',
						usable: 1,
						filterTarget: function(card, player, target) {
							return true;
						},
						selectTarget: -1,
						content: function() {
							'step 0'
							var target2 = target;
							target2.chooseCardTarget({
								filterCard: true,
								filterTarget: function(card, player, target) {
									return target != _status.event.target2;
								},
								selectCard: 1,
								ai1: function(card) {
									var player = _status.event.target2;
									if (_status.event.du) return -get.value(card, player, 'raw');
									return 7 - get.value(card, player, 'raw');
								},
								ai2: function(target) {
									var att = get.attitude(_status.event.target2, target);
									if (_status.event.du) return 0.5 - att;
									if (att < 0) return 0;
									var nh2 = target.countCards('h');
									var num = Math.sqrt(1 + nh2);
									return att / num;
								},
								du: target2.hasCard(function(card) {
									return get.value(card, player, 'raw') < 0;
								}),
								target2: target2,
								prompt: "将一张手牌交给其他角色，然后摸一张牌",
							});
							'step 1'
							if (result.bool) {
								target.give(result.cards, result.targets[0]);
								target.draw();
							}
						},
						ai: {
							order: 5,
							result: {
								player: function(player) {
									if (get.mode() == 'identity' && _status.mode != 'purple') {
										var zhu = get.zhu(player);
										if (zhu && zhu.isZhu && player == zhu && zhu.phaseNumber < 2) return 0;
									}
									var friends = game.countPlayer(function(current) {
										return get.attitude(player, current) > 0;
									});
									var enemies = game.countPlayer(function(current) {
										return get.attitude(player, current) < 0;
									});
									return friends - enemies + 0.5;
								},
							},
						},
					},
					"nsfzxys_tuanjie": {
						trigger: {
							player: 'damageEnd'
						},
						direct: true,
						filter: function(event) {
							return (event.num > 0);
						},
						content: function() {
							'step 0'
							player.chooseTarget([1, trigger.num], '令至多' + get.cnNumber(trigger.num) + '名角色各摸三张牌').set('ai', function(target) {
								var att = get.attitude(player, target);
								return att / (target.hp * 2 + target.countCards('h') + 0.1);
							});
							'step 1'
							if (result.targets.length) {
								player.logSkill('nsfzxys_tuanjie', result.targets);
								for (var i = 0; i < result.targets.length; i++) {
									result.targets[i].draw(3);
								}
							} else {
								event.finish();
							}
							'step 2'
							if (trigger.source !== undefined && trigger.source.isIn()) {
								trigger.source.draw(1);
							}
						},
						ai: {
							maixie: true,
							maixie_hp: true,
							skillTagFilter: function(player, tag) {
								if (tag == 'maixie' || tag == 'maixie_hp') {
									if (player.hp < 3) return false;
								}
							},
						},
					},
					"nsfzxys_renwang": {
						unique: true,
						zhuSkill: true,
						trigger: {
							player: 'phaseDiscardBefore'
						},
						filter: function(event, player) {
							if (!player.hasZhuSkill('nsfzxys_renwang')) return false;
							if (player.needsToDiscard() < 1) return false;
							return game.hasPlayer(function(current) {
								return current != player && current.group == player.group;
							});
						},
						check: function() {
							return true;
						},
						content: function() {
							'step 0'
							if (event.current === undefined) event.current = player.next;
							if (event.current == player) {
								event.finish();
							} else if (event.current.group == player.group && event.current.countCards('h') > 0) {
								event.current.chooseToDiscard('是否弃置一张手牌令' + get.translation(player) + '的弃牌阶段跳过？').set('ai', function(card) {
									if (get.attitude(event.current, player) < 0) return 0;
									return 5 - get.value(card);
								});
							}
							'step 1'
							if (result.bool) {
								trigger.cancel();
								event.current.addExpose(0.5);
								event.finish();
							} else {
								event.current = event.current.next;
								event.goto(0);
							}
						},
					},
					"nsfzxys_runiu": {
						trigger: {
							global: 'damageBegin1',
						},
						filter: function(event, player) {
							return event.player != player && event.card && (get.name(event.card) == 'sha' || get.name(event.card) == 'juedou') && event.source && event.source == player && player.isIn() && event.notLink();
						},
						check: function(event, player) {
							return get.attitude(player, event.player) < 0;
						},
						logTarget: 'player',
						content: function() {
							'step 0'
							player.judge(function(card) {
								if (get.color(card) == 'black') return 1;
								return -1;
							});
							'step 1'
							if (result.bool) {
								trigger.num++;
								event.finish();
							} else {
								player.chooseBool('是否失去一点体力，令此伤害+1？').set('choice', player.hp > 1 && trigger.player.hp <= player);
							}
							'step 2'
							if (result.bool) {
								trigger.num++;
								player.loseHp();
							}
						},
					},
					"nsfzxys_biaobing": {
						trigger: {
							player: 'drawBegin',
						},
						filter: function(event, player) {
							return event.num > 0;
						},
						frequent: true,
						content: function() {
							'step 0'
							event.num = trigger.num;
							player.chooseControl(['spade', 'heart', 'club', 'diamond']).set('prompt', '标兵：请声明一个花色').set('ai', function() {
								return [0, 1, 2, 3].randomGet();
							})
							'step 1'
							game.log(player, '声明了', result.control, '牌');
							event.bool = false;
							for (var i = 0; i < Math.min(event.num, ui.cardPile.childNodes.length); i++) {
								var currentcard = ui.cardPile.childNodes[i];
								if (get.suit(currentcard) == result.control) {
									event.bool = true;
									break;
								}
							}
							'step 2'
							if (event.bool) {
								game.log('牌堆顶的', get.cnNumber(event.num), '张牌中有', result.control, '牌');
								trigger.num++;
							}
						},
					},
					"nsfzxys_yanwu": {
						enable: "phaseUse",
						usable: 2,
						init: function(player) {
							if (!player.storage.nsfzxys_yanwu_suit) player.storage.nsfzxys_yanwu_suit = ['spade', 'club', 'diamond', 'heart'];
						},
						filterTarget: function(card, player, target) {
							return player != target;
						},
						filterCard: function(card, player) {
							var ub = ui.selected.cards;
							var suit = get.suit(card);
							for (var i = 0; i < ub.length; i++) {
								if (get.suit(ub[i]) == suit) return false;
							}
							return true; //player.storage.nsfzxys_yanwu_suit.contains(suit);
						},
						selectCard: function() {
							var player = _status.currentPhase;
							var num1 = 1,
								num2 = 2;
							if (player.hasSkill('nsfzxys_yanwu_u1')) num1 = 2;
							if (player.hasSkill('nsfzxys_yanwu_u2')) num2 = 1;
							if (num1 > num2) return 99;
							return [num1, num2];
						},
						complexCard: true,
						position: 'h',
						discard: false,
						lose: false,
						delay: 0,
						filter: function(event, player) {
							return player.countCards('h') > 0 && (!player.hasSkill('nsfzxys_yanwu_u1') || !player.hasSkill('nsfzxys_yanwu_u2'));
						},
						check: function(card) {
							if (!ui.selected.cards.length) return 6.1 - get.value(card);
							return 5.1 - get.value(card);
						},
						content: function() {
							'step 0'
							event.num2 = cards.length;
							target.gain(cards, player, 'give');
							if (event.num2 < 2) {
								player.addTempSkill('nsfzxys_yanwu_u1', 'phaseUseEnd');
								target.loseHp();
							} else {
								player.addTempSkill('nsfzxys_yanwu_u2', 'phaseUseEnd');
								target.turnOver();
							}
						},
						ai: {
							order: 3.9,
							result: {
								target: function(player, target) {
									var cs = ui.selected.cards.length;
									if (cs == 2) {
										if (target.hasSkillTag('noturn')) return 0;
										if (target.isTurnedOver()) return 10;
										return -10;
									} else {
										if (target.hasSkillTag('maihp')) return 2;
										if (target.hp <= 1) return -10;
										if (player.needsToDiscard() > 0) return -10;
									}
									return 0;
								},
							},
						},
						group: ['nsfzxys_yanwu_suit', 'nsfzxys_yanwu_suit2'],
						subSkill: {
							suit: {
								trigger: {
									player: 'phaseBegin'
								},
								silent: true,
								forced: true,
								sub: true,
								content: function() {
									player.storage.nsfzxys_yanwu_suit = ['spade', 'club', 'diamond', 'heart'];
								}
							},
							suit2: {
								trigger: {
									player: 'useCard'
								},
								silent: true,
								forced: true,
								filter: function(event, player) {
									return Array.isArray(player.storage.nsfzxys_yanwu_suit) && _status.currentPhase == player;
								},
								content: function() {
									player.storage.nsfzxys_yanwu_suit.remove(get.suit(trigger.card));
								}
							},
							u1: {
								charlotte: true,
							},
							u2: {
								charlotte: true,
							},
						},
					},
					"nsfzxys_renqi": {
						trigger: {
							global: ["damageEnd"],
						},
						frequent: true,
						filter: function(event, player) {
							return event.nsfzxys_renqi && event.num > 0;
						},
						content: function() {
							player.draw(1);
						},
						group: 'nsfzxys_renqi_mark',
						subSkill: {
							mark: {
								trigger: {
									global: 'damageBefore'
								},
								forced: true,
								silent: true,
								popup: false,
								sub: true,
								filter: function(event, player) {
									return !event.player.isDamaged() && event.num > 0;
								},
								content: function() {
									trigger.nsfzxys_renqi = true;
								}
							},
						},
					},
					"nsfzxys_banfei": {
						trigger: {
							player: "phaseDrawBegin1",
						},
						filter: function(event, player) {
							return game.hasPlayer(function(current) {
								return current != player && current.countCards('h');
							});
						},
						check: function(event, player) {
							var enemies = game.countPlayer(function(current) {
								if (current.countCards('h') > 0 && current != player && get.attitude(player, current) <= 0) {
									return true;
								}
								return false;
							});
							var friends = game.countPlayer(function(current) {
								if (current.countCards('h') == 1 && current != player && get.attitude(player, current) > 1) {
									return true;
								}
								return false;
							});
							return enemies * 2 - friends * 0.5 - player.hp >= 2;
						},
						content: function() {
							'step 0'
							var targets = game.filterPlayer(function(current) {
								return current != player && current.countCards('h') > 0;
							});
							targets.sort(lib.sort.seat);
							event.targets = targets;
							event.num = 0;
							if (!trigger.numFixed) trigger.num = 0;
							player.line(targets, 'green');
							'step 1'
							if (num < event.targets.length) {
								if (event.targets[num].countCards('h')) {
									player.gainPlayerCard(event.targets[num], 'h', true);
								}
								event.num++;
								event.redo();
							}
							'step 2'
							player.chooseToDiscard('h', player.hp, true);
						},
						ai: {
							threaten: 3,
						},
					},
					"nsfzxys_danluan": {
						usable: 1,
						trigger: {
							source: 'damageSource',
						},
						filter: function(event, player) {
							return event.num > 0;
						},
						check: function(event, player) {
							return true;
						},
						content: function() {
							'step 0'
							if (trigger.player == player) {
								player.draw(4);
								event.finish();
							} else {
								trigger.player.chooseControl("额外摸牌", "获得牌").set('ai', function() {
									if (get.attitude(_status.event.player, player) > 0 && _status.event.player.countCards('j') > 0) return 1;
									return 0;
								}).set('choiceList', [
									"你摸一张牌，然后" + get.translation(player) + "摸三张牌",
									"你与" + get.translation(player) + "各摸一张牌，然后其获得你一张牌"
								]).set('prompt', "耽乱：请选择一项");
							}
							'step 1'
							if (result.index == 0) {
								trigger.player.draw();
								player.draw(3);
								event.finish();
							} else {
								game.asyncDraw([trigger.player, trigger.source]);
								player.gainPlayerCard(trigger.player, 'hej', 1, true);
							}
						}
					},
					"nsfzxys_yuzhong": {
						locked: true,
						mod: {
							maxHandcard: function(player, num) {
								return num + player.countCards('e');
							},
							cardUsable: function(card, player, num) {
								if (card.name == 'sha') return num + player.countCards('e');
							},
						},
					},
					"nsfzxys_suanjin": {
						trigger: {
							player: 'loseAfter',
							global: ['equipAfter', 'addJudgeAfter', 'gainAfter'],
						},
						forced: true,
						filter: function(event, player) {
							//if (player.countCards('h')) return false;
							var evt = event.getl(player);
							return evt && evt.player == player && ((evt.hs && evt.hs.length > 0 && player.countCards('h') == 0) || (evt.es && evt.es.length > 0 && player.countCards('e') == 0));
						},
						content: function() {
							if (player.isDamaged()) {
								player.recover();
							} else {
								player.loseHp();
							}
						},
						ai: {
							threaten: 0.8,
							noh: true,
							noe: true,
							skillTagFilter: function(player, tag) {
								if (tag == 'noh' || tag == 'noe') {
									if (!player.isDamaged()) return false;
								}
							}
						}
					},
					"nsfzxys_zhanzuo_bkup": {
						trigger: {
							global: ["loseAfter", "cardsDiscardAfter"],
						},
						filter: function(event, player) {
							if (player.hasSkill('nsfzxys_zhanzuo_used')) return false;
							if (event.player == player) return false;
							var evt = event.getParent('useCard');
							if (evt && evt.player && evt.player == player) return false;

							var togain = [];
							var cards = event.cards.slice(0);
							for (var i = 0; i < cards.length; i++) {
								if (get.type(cards[i]) == 'equip' || get.name(cards[i]) == 'tao') togain.add(cards[i]);
							}
							return togain.filterInD('d').length > 0;
						},
						direct: true,
						content: function() {
							'step 0'
							event.togain = [];
							var cards = trigger.cards.filterInD('d');
							for (var i = 0; i < cards.length; i++) {
								if ((get.type(cards[i]) == 'equip' || get.name(cards[i]) == 'tao')) {
									event.togain.add(cards[i]);
								}
							}
							event.togain.sort();
							var str = '弃置一张手牌并'
							if (event.togain.length > 1) {
								str += '依次';
							}
							str += '获得' + get.translation(event.togain);
							player.chooseToDiscard(1, str, 'h').set('ai', function(card) {
								var val = 0;
								for (var i = 0; i < _status.event.togain.length; i++) {
									val += get.value(_status.event.togain[i]);
								}
								return val - get.value(card) - 1;
							}).set('togain', event.togain);
							'step 1'
							if (result.bool) {
								player.logSkill('nsfzxys_zhanzuo');
								player.addTempSkill('nsfzxys_zhanzuo_used', 'roundStart');
							} else {
								event.finish();
							}
							'step 2'
							if (event.togain.length > 0) {
								var card2 = event.togain.pop();
								if (get.type(card2) == 'equip') {
									player.equip(card2);
								} else {
									player.gain(card2, 'gain2');
								}
								event.redo();
							}
						},
						ai: {
							threaten: 0.8,
						},
						subSkill: {
							used: {
								mark: true,
								charlotte: true,
								intro: {
									content: '占座已发动'
								},
							},
						}
					},
					"nsfzxys_zhanzuo": {
						trigger: {
							global: ['useCardAfter', 'respondAfter', 'loseAfter']
						},
						filter: function(event, player) {
							if (player.hasSkill('nsfzxys_zhanzuo_used')) return false;
							if (event.player == player) return false;
							if (player.countCards('h') < 1) return false;

							var cardsx = [];
							var togain = [];
							if (event.name != 'lose') {
								cardsx.addArray(event.cards);
								cardsx = cardsx.filterInD('od');
								for (var i = 0; i < cardsx.length; i++) {
									if (get.name(cardsx[i]) == 'tao') togain.add(cardsx[i]);
								}
							} else if (event.type != 'discard') {
								return false;
							} else if (event.cards2) {
								cardsx.addArray(event.cards2);
								cardsx = cardsx.filterInD('od');
								for (var i = 0; i < cardsx.length; i++) {
									if (get.type(cardsx[i]) == 'equip' || get.name(cardsx[i]) == 'tao') togain.add(cardsx[i]);
								}
							}

							return togain.length > 0;
						},
						direct: true,
						content: function() {
							'step 0'
							event.togain = [];
							var cardsx = [];
							if (trigger.name != 'lose') {
								cardsx.addArray(trigger.cards);
								cardsx = cardsx.filterInD('od');
								for (var i = 0; i < cardsx.length; i++) {
									if (get.name(cardsx[i]) == 'tao') event.togain.add(cardsx[i]);
								}
							} else if (trigger.type != 'discard') {
								return false;
							} else if (trigger.cards2) {
								cardsx.addArray(trigger.cards2);
								cardsx = cardsx.filterInD('od');
								for (var i = 0; i < cardsx.length; i++) {
									if (get.type(cardsx[i]) == 'equip' || get.name(cardsx[i]) == 'tao') event.togain.add(cardsx[i]);
								}
							}

							event.togain.sort();
							var str = '弃置一张手牌并'
							if (event.togain.length > 1) {
								str += '依次';
							}
							str += '获得' + get.translation(event.togain);
							player.chooseToDiscard(1, str, 'h').set('ai', function(card) {
								var val = 0;
								for (var i = 0; i < _status.event.togain.length; i++) {
									val += get.value(_status.event.togain[i]);
								}
								return val - get.value(card) - 1;
							}).set('togain', event.togain);
							'step 1'
							if (result.bool) {
								player.logSkill('nsfzxys_zhanzuo');
								player.addTempSkill('nsfzxys_zhanzuo_used', 'roundStart');
							} else {
								event.finish();
							}
							'step 2'
							if (event.togain.length > 0) {
								var card2 = event.togain.pop();
								if (get.type(card2) == 'equip') {
									player.equip(card2);
								} else {
									player.gain(card2, 'gain2');
								}
								event.redo();
							}
						},
						ai: {
							threaten: 0.8,
						},
						subSkill: {
							used: {
								mark: true,
								charlotte: true,
								intro: {
									content: '占座已发动'
								},
							},
						}
					},
					"nsfzxys_huhua": {
						trigger: {
							target: 'useCardToTarget'
						},
						direct: true,
						filter: function(event, player) {
							return event.card.name == 'sha' && player.countCards('h') >= player.storage.nsfzxys_huhua;
						},
						init: function(player) {
							if (!player.storage.nsfzxys_huhua) player.storage.nsfzxys_huhua = 1;
						},
						//ondisable: true,
						onremove: function(player, skill) {
							player.storage.nsfzxys_huhua = 1;
						},
						content: function() {
							'step 0'
							player.chooseCardTarget({
								prompt: get.prompt('nsfzxys_huhua'),
								prompt2: _status.event.p2,
								filterCard: function(card, player) {
									return lib.filter.cardDiscardable(card, player);
								},
								position: 'h',
								selectCard: function() {
									return _status.event.count;
								},
								filterTarget: function(card, player, target) {
									if (target == player || target.hp < 1 || _status.event.targets.contains(target)) return false;
									return _status.event.playerx.canUse('sha', target, false) && target.countCards('h');
								},
								ai1: function(card) {
									return 6.1 - get.value(card);
								},
								ai2: function(target) {
									var trigger = _status.event.getTrigger();
									var player = _status.event.player;
									return get.effect(target, trigger.card, trigger.player, player) + 0.1;
								},
							}).set('playerx', trigger.player).set('count', player.storage.nsfzxys_huhua).set('targets', trigger.targets).set('p2', "是否弃置" + get.cnNumber(player.storage.nsfzxys_huhua) + "张牌，令另一名角色交给你一张牌？");
							'step 1'
							if (result.bool) {
								player.storage.nsfzxys_huhua += 1;
								player.discard(result.cards);
								var target = result.targets[0];
								player.logSkill('nsfzxys_huhua', target);
								event.target = target;
								target.chooseCard('交给' + get.translation(player) + '一张牌，若此牌不为【闪】，则也成为此杀的额外目标', true).set('ai', function(card) {
									return -get.value(card, player, 'raw');
								}).set('sourcex', player);
							} else {
								event.finish();
							}
							'step 2'
							if (result.bool) {
								player.gain(result.cards, event.target, 'give');
								if (get.name(result.cards[0]) != 'shan') {
									trigger.getParent().targets.push(event.target);
									trigger.getParent().triggeredTargets2.push(event.target);
									game.log(event.target, '成为了额外目标');
								}
								game.delay();
							}
						},
						ai: {
							expose: 0.2,
							effect: {
								target: function(card, player, target) {
									if (card.name != 'sha') return;
									if (target.storage.nsfzxys_huhua && target.storage.nsfzxys_huhua > Math.min(1, target.countCards('h'))) return;
									var players = game.filterPlayer();
									if (get.attitude(player, target) <= 0) {
										for (var i = 0; i < players.length; i++) {
											var target2 = players[i];
											if (player != target2 && target != target2 && player.canUse(card, target2, false) &&
												get.effect(target2, {
													name: 'shacopy',
													nature: card.nature,
													suit: card.suit
												}, player, target) > 0 &&
												get.effect(target2, {
													name: 'shacopy',
													nature: card.nature,
													suit: card.suit
												}, player, player) < 0) {
												if (target.hp == target.maxHp) return 0.3;
												return 0.6;
											}
										}
									} else {
										for (var i = 0; i < players.length; i++) {
											var target2 = players[i];
											if (player != target2 && target != target2 && player.canUse(card, target2, false) &&
												get.effect(target2, {
													name: 'shacopy',
													nature: card.nature,
													suit: card.suit
												}, player, player) > 0) {
												if (player.canUse(card, target2)) return;
												if (target.hp == target.maxHp) return [0, 1];
												return [0, 0];
											}
										}
									}
								}
							}
						},
						group: 'nsfzxys_huhua_reset',
						subSkill: {
							reset: {
								trigger: {
									global: 'roundStart'
								},
								forced: true,
								sub: true,
								silent: true,
								content: function() {
									player.storage.nsfzxys_huhua = 1;
								}
							},
						}
					},
					"nsfzxys_xuezhang": {
						enable: ['chooseToUse', 'chooseToRespond'],
						filterCard: function(card) {
							return get.type2(card) != 'basic';
						},
						selectCard: 1,
						position: 'he',
						viewAs: {
							name: 'sha',
							nsfzxys_xuezhang: true,
						},
						filter: function(event, player) {
							return player.countCards('he', function(card) {
								return get.type2(card) != 'basic';
							}) > 0;
						},
						precontent: function() {
							player.addTempSkill('nsfzxys_xuezhang_af', 'phaseUseEnd');
						},
						prompt: '将一张非基本牌当作【杀】使用或打出',
						check: function(card) {
							return 7 - get.value(card)
						},
						ai: {
							respondSha: true,
							skillTagFilter: function(player) {
								return player.countCards('he', function(card) {
									return get.type2(card) != 'basic';
								}) > 0;
							},
						},
						mod: {
							targetInRange: function(card, player, target) {
								if (card.nsfzxys_xuezhang) return true;
							},
							cardUsable: function(card, player, num) {
								if (card.nsfzxys_xuezhang) return Infinity;
							},
						},
					},
					"nsfzxys_xuezhang_af": {
						charlotte: true,
						locked: true,
						forced: true,
						popup: false,
						silent: true,
						firstDo: true,
						trigger: {
							player: 'useCard1'
						},
						filter: function(event, player) {
							return event.card && event.card.name == 'sha' && event.card.nsfzxys_xuezhang;
						},
						content: function() {
							if (player.stat[player.stat.length - 1].card.sha > 0) {
								player.stat[player.stat.length - 1].card.sha--;
							}
						},
						mod: {
							attackFrom: function(player) {
								return -Infinity;
							},
						},
					},
					"nsfzxys_luanpao": {
						trigger: {
							player: 'phaseUseEnd',
						},
						filter: function(event, player) {
							if (player.getStat('damage')) {
								return false;
							}
							return player.getHistory('useCard', function(evt) {
								return evt.card && get.tag(evt.card, 'damage');
							}).length;
						},
						direct: true,
						content: function() {
							'step 0'
							var num = player.getHistory('useCard', function(evt) {
								return evt.card && get.tag(evt.card, 'damage');
							}).length;
							num = Math.min(num, 3);

							var str = "是否弃置至多" + get.cnNumber(num) + "张牌对一名角色造成等量的伤害？";
							player.chooseCardTarget({
								prompt: get.prompt('nsfzxys_luanpao'),
								prompt2: str,
								filterCard: function(card, player) {
									return lib.filter.cardDiscardable(card, player);
								},
								position: 'h',
								selectCard: function() {
									return [1, _status.event.count];
								},
								filterTarget: function(card, player, target) {
									return target != player;
								},
								ai1: function(card) {
									return 6.1 - get.value(card);
								},
								ai2: function(target) {
									var player = _status.event.player;
									if (target.hasSkillTag('nodamage') || target.hasSkillTag('nothunder')) return -1;
									return get.damageEffect(target, player, player, 'thunder');
								},
							}).set('count', num).set('targets', trigger.targets).set('p2', str);
							'step 1'
							if (result.bool && result.cards.length) {
								player.discard(result.cards);
								var target = result.targets[0];
								player.logSkill('nsfzxys_luanpao', target);
								player.line(target, 'red');
								target.damage(result.cards.length, 'thunder');
							} else {
								event.finish();
							}
						},
						ai: {
							expose: 0.4,
						},
					},


					// teacher
					"nsfzxys_wangdao": {
						locked: true,
						group: ['nsfzxys_wangdao_sha', 'nsfzxys_wangdao_wuxie'],
					},
					"nsfzxys_wangdao_sha": {
						enable: ['chooseToUse', 'chooseToRespond'],
						filterCard: true,
						selectCard: function() {
							return _status.event.player.countCards('h');
						},
						position: 'h',
						viewAs: {
							name: 'sha'
						},
						complexCard: true,
						filter: function(event, player) {
							return player.countCards('h') > 0;
						},
						prompt: '将所有手牌当作【杀】使用或打出',
						check: function(card) {
							var num = _status.event.player.countCards('h');
							var base = 6;
							if (card.name == 'sha' && num > 2) return 0;
							if (num == 1) {
								base = 8;
							} else if (num == 2) {
								base = 7;
							}
							return base - get.value(card)
						},
						ai: {
							respondSha: true,
							skillTagFilter: function(player) {
								return player.countCards('h') > 0;
							},
						},
					},
					"nsfzxys_wangdao_wuxie": {
						enable: ['chooseToUse', 'chooseToRespond'],
						prompt: function() {
							return '将所有手牌当作【无懈可击】使用';
						},
						position: 'h',
						check: function(card, event) {
							return 7 - get.value(card);
						},
						selectCard: function() {
							return _status.event.player.countCards('h');
						},
						viewAs: {
							name: 'wuxie'
						},
						viewAsFilter: function(player) {
							return player.countCards('h') > 0;
						},
						filterCard: true,
					},
					"nsfzxys_dingyi": {
						trigger: {
							global: 'phaseEnd'
						},
						frequent: true,
						init: function(player) {
							if (!player.storage.nsfzxys_dingyi) player.storage.nsfzxys_dingyi = false;
						},
						filter: function(event, player) {
							return player.getHistory('custom', function(evt) {
								return evt.nsfzxys_dingyi == true;
							}).length > 0;
						},
						content: function() {
							'step 0'
							player.draw(2);
						},
						group: 'nsfzxys_dingyi_record',
						subSkill: {
							record: {
								trigger: {
									player: ['useCard', 'respond'],
								},
								filter: function(event, player) {
									//if (player.storage.nsfzxys_dingyi) return false;
									if ((!event.card.isCard) || (!event.cards)) return true;
									if (event.cards.length != 1) return true;
									var card1 = event.cards[0];
									var card2 = event.card;
									return (get.number(card1) != get.number(card2)) || (get.suit(card1) != get.suit(card2)) || (get.name(card1) != get.name(card2)) || (get.nature(card1) != get.nature(card2));
								},
								forced: true,
								silent: true,
								popup: false,
								content: function() {
									player.getHistory('custom').push({
										nsfzxys_dingyi: true
									});
								},
							},
						},
					},
					"nsfzxys_chujuan": {
						enable: "phaseUse",
						usable: 1,
						filterCard: true,
						selectCard: 1,
						position: "h",
						filter: function(event, player) {
							return player.countCards('h') > 0;
						},
						check: function(card) {
							var number = get.number(card);
							return (Math.abs(number - 7) + 1 / Math.max(get.value(card), 0.5));
						},
						content: function() {
							'step 0'
							event.number = get.number(cards[0]);
							event.cards = get.cards(3 + 2 * player.getDamagedHp());
							game.cardsGotoOrdering(event.cards);
							player.showCards(event.cards);

							event.less = 0;
							//event.more = 0;
							for (var i = 0; i < event.cards.length; i++) {
								if (get.number(event.cards[i]) < event.number) {
									event.less++;
								} else if (get.number(event.cards[i]) > event.number) {
									event.less--;
								}
							}
							'step 1'
							var chooseButton = player.chooseButton([1, 3], ["出卷", event.cards]);
							chooseButton.set('ai', function(button) {
								if (event.less > 0 && get.number(button.link) > event.number) return 0;
								if (event.less < 0 && get.number(button.link) < event.number) return 0;
								return get.value(button.link);
							});
							chooseButton.set('filterButton', function(button) {
								if (ui.selected.buttons.length < 1) return true;
								for (var i = 0; i < ui.selected.buttons.length; i++) {

									if (get.number(ui.selected.buttons[i].link) < event.number) {
										return get.number(button.link) < event.number;
									} else if (get.number(ui.selected.buttons[i].link) > event.number) {
										return get.number(button.link) > event.number;
									}
								}
								return true;
							});
							'step 2'
							if (result.bool && result.links.length > 0) {
								result.links.sort();
								player.showCards(result.links);
								player.gain(result.links, 'gain2');
							}
						},
						ai: {
							order: 15,
							result: {
								player: function(player) {
									return (3 + 2 * player.getDamagedHp()) / 2;
								},
							},
						},
					},
					"nsfzxys_lizhi": {
						trigger: {
							global: ["gameDrawAfter", "phaseBefore"],
							player: ["dyingAfter"],
						},
						firstDo: true,
						forced: true,
						marktext: "离",
						intro: {
							name: '离职',
							content: 'mark'
						},
						//ondisable: true,
						onremove: function(player) {
							player.storage.nsfzxys_lizhi = 0;
						},
						init: function(player) {
							if (!player.storage.nsfzxys_lizhi_used) player.storage.nsfzxys_lizhi_used = false;
						},
						filter: function(event, player) {
							return !player.storage.nsfzxys_lizhi_used || event.name == 'dying';
						},
						content: function() {
							player.addMark('nsfzxys_lizhi', trigger.name == 'dying' ? 1 : 2);
							player.storage.nsfzxys_lizhi_used = true;
						},
						group: "nsfzxys_lizhi_damage",
						subSkill: {
							damage: {
								trigger: {
									player: ['damageBegin4', ],
								},
								forced: true,
								filter: function(event, player) {
									return event.player.hasMark('nsfzxys_lizhi') && event.num > 0;
								},
								content: function() {
									trigger.cancel();
									trigger.player.removeMark('nsfzxys_lizhi', 1);
									if (trigger.source) trigger.source.chooseToDiscard(1, true);
								},
							},
						},
						mod: {
							maxHandcardBase: function(player, num) {
								return (num + 0 * player.countMark('nsfzxys_lizhi'));
							},
						}
					},
					"nsfzxys_tuotang": {
						trigger: {
							player: 'phaseDiscardBefore'
						},
						filter: function(event, player) {
							return (player.countCards('h') > 0);
						},
						direct: true,
						content: function() {
							'step 0'
							player.chooseCardTarget({
								prompt: get.prompt('nsfzxys_tuotang'),
								prompt2: (name + "是否弃置一张牌，视为对一名其他角色使用一张【杀】"),
								filterCard: function(card, player) {
									return lib.filter.cardDiscardable(card, player)
								},
								position: 'h',
								filterTarget: function(card, player, target) {
									if (player == target) return false;
									return player.canUse({
										name: 'sha'
									}, target, false);
								},
								ai1: function(card) {
									var hs = _status.event.player.needsToDiscard();
									return 5 + hs - get.value(card);
								},
								ai2: function(target) {
									return get.effect(target, {
										name: 'sha'
									}, _status.event.player);
								},
							});
							'step 1'
							if (result.bool) {
								player.logSkill('nsfzxys_tuotang', result.targets);
								player.line(result.targets, 'red');
								player.discard(result.cards[0]);
								player.useCard({
									name: 'sha',
								}, result.targets[0], false);
							} else {
								event.finish();
							}
							'step 2'
							var bool2 = game.hasPlayer2(function(current) {
								return current.getHistory('damage', function(evt) {
									return evt.getParent('phaseDiscard', true) == trigger || evt.getParent('nsfzxys_tuotang', true);
								}).length > 0
							});
							if (!bool2) trigger.cancel();
						},
					},
					"nsfzxys_zigai": {
						trigger: {
							global: 'damageBegin1',
						},
						filter: function(event, player) {
							if (!event.source || event.source != player) return false;

							var card = event.card;
							if (!card) return false;
							if (player.storage.nsfzxys_zigai.contains(card)) return true;
							return false;
						},
						init: function(player) {
							if (!player.storage.nsfzxys_zigai) player.storage.nsfzxys_zigai = [];
						},
						check: function(event, player) {
							if (get.attitude(player, event.player) > 0) return true;

							if (player == _status.currentPhase && !event.isPhaseUsing(player) && event.player.hp > 1) return true;

							if (event.player.hp > player.hp) return player.countCards('h') - event.player.countCards('h') < 1;
							if (event.player.hp < player.hp && event.player.hp > 1) return player.countCards('h') - event.player.countCards('h') < 2;
							return false;
						},
						content: function() {
							'step 0'
							trigger.num -= 1;
							player.draw(3);
							player.storage.nsfzxys_zigai.remove(trigger.card);
						},
						group: ['nsfzxys_zigai_use', 'nsfzxys_zigai_clear'],
						subSkill: {
							use: {
								trigger: {
									player: 'useCard1'
								},
								forced: true,
								sub: true,
								popup: false,
								silent: true,
								filter: function(event, player) {
									if (!event.card) return false;
									if (player.storage.nsfzxys_zigai.contains(event.card)) return false;
									return (true);
								},
								content: function() {
									'step 0'
									player.storage.nsfzxys_zigai.add(trigger.card);
								},
							},
							clear: {
								trigger: {
									player: 'useCardAfter'
								},
								forced: true,
								sub: true,
								popup: false,
								silent: true,
								filter: function(event, player) {
									if (!event.card) return false;
									return (player.storage.nsfzxys_zigai.contains(event.card));
								},
								content: function() {
									'step 0'
									player.storage.nsfzxys_zigai.remove(trigger.card);
								},
							},
						},
						global: "nsfzxys_zigai_ai",
					},
					"nsfzxys_zigai_ai": {
						ai: {
							effect: {
								target: function(card, player, target) {
									if (get.tag(card, 'damage') && player.hasSkill('nsfzxys_zigai')) {
										if (get.attitude(player, target) <= 0) return 1;

										if (get.name(card) == 'sha' || get.name(card) == 'juedou') return [1, -1];
										if (get.tag(card, 'multitarget') && target == player.next) return [1, -0.5];
									}
								}
							}
						}
					},
					"nsfzxys_caichan": {},
					"nsfzxys_fuyou": {},
					"nsfzxys_zhuren": {
						trigger: {
							player: 'phaseZhunbeiBegin'
						},
						direct: true,
						popup: false,
						content: function() {
							'step 0'
							player.chooseControl(['选项一', '选项二', 'cancel2'], function() {
								var bool1 = true;
								if (player.skipList.contains('phaseUse') || player.hasJudge('bingliang')) bool1 = false;
								if (player.needsToDiscard(4) && player.hasJudge('lebu')) bool1 = false;

								var friends = game.countPlayer(function(current) {
									return get.attitude(player, current) > 0;
								});
								var enemies = game.countPlayer(function(current) {
									return get.attitude(player, current) < 0;
								});
								if (friends - enemies < -1) {
									bool1 = false;
								} else if (friends - enemies > 1) {
									bool1 = true;
								}

								if (bool1) return '选项一';
								return '选项二';
							}).set('prompt', get.prompt("nsfzxys_zhuren")).set('choiceList', [
								'摸牌阶段令所有角色各摸一张牌，且你本阶段额外摸一张牌',
								'结束阶段摸两张牌',
							]);
							'step 1'
							if (result.control == '选项一') {
								player.addTempSkill('nsfzxys_zhuren_draw');
							} else if (result.control == '选项二') {
								player.addTempSkill('nsfzxys_zhuren_end');
							}
						},
						subSkill: {
							draw: {
								trigger: {
									player: 'phaseDrawBegin1'
								},
								forced: true,
								charlotte: true,
								content: function() {
									'step 0'
									var targets = game.filterPlayer();
									targets.sort(lib.sort.seat);
									event.targets = targets;
									event.num = 0;
									if (!trigger.numFixed) trigger.num++;
									player.line(targets, 'green');
									'step 1'
									if (num < event.targets.length) {
										event.targets[num].draw();
										event.num++;
										event.redo();
									}
								},
							},
							end: {
								trigger: {
									player: 'phaseJieshuBegin'
								},
								forced: true,
								charlotte: true,
								content: function() {
									player.draw(2);
								},
							},
						},
					},
					"nsfzxys_fengci": {
						trigger: {
							target: "useCardToTargeted",
						},
						check: function(event, player) {
							if (get.attitude(player, event.player) > 1) return 0;
							return get.effect(player, event.card, event.player, player) < 0;
						},
						filter: function(event, player) {
							if (event.targets.length > 1) return false;
							return (event.card.name == 'sha' || get.type(event.card) == 'trick') && player.canCompare(event.player);
						},
						logTarget: "player",
						content: function() {
							'step 0'
							player.chooseToCompare(trigger.player);
							'step 1'
							if (result.bool) {
								trigger.getParent().excluded.add(player);
							} else {
								if (trigger.cards && trigger.cards.filterInD('od').length) player.gain(trigger.cards.filterInD('od'), 'gain2');
							}
						},
					},
					"nsfzxys_zhihui": {
						trigger: {
							player: 'phaseZhunbeiBegin'
						},
						direct: true,
						filter: function(event, player) {
							return !game.hasPlayer(function(current) {
								return current.hasSkill('nsfzxys_zhihui_af');
							});
						},
						content: function() {
							'step 0'
							player.chooseTarget(get.prompt2('nsfzxys_zhihui')).set('ai', function(target) {
								var base = (target.isTurnedOver() || target.hasJudge('lebu')) ? 0.5 : 1;
								var is = (target == player) ? 2 : 0;
								return base * (Math.max(get.attitude(player, target), 0) + is) / (target.hp * 2 + target.countCards('h') + 1);
							});
							'step 1'
							if (result.targets.length > 0) {
								event.target = result.targets[0];
								player.line(event.target, 'green');
								player.logSkill('nsfzxys_zhihui', event.target);
								player.chooseControl([' 0 ', ' 1 ', ' 2 ', 'cancel2']).set('prompt', '令该角色摸至多两张牌').set('ai', function() {
									if (get.attitude(player, event.target.target) < 0) return ' 0 ';
									return ' 2 ';
								});
							} else {
								event.finish();
							}
							'step 2'
							if (result.control && result.control != 'cancel2') {
								event.target.addSkill('nsfzxys_zhihui_af');
								var num = parseInt(result.control);
								if (num > 0) {
									event.target.draw(num);
								}
							}
						},
					},
					"nsfzxys_zhihui_af": {
						forced: true,
						charlotte: true,
						lastDo: true,
						popup: false,
						trigger: {
							global: 'damageBegin4',
						},
						mark: true,
						intro: {
							name: '指挥'
						},
						filter: function(event, player) {
							if (event.name == 'phaseEnd') return true;
							if (game.countPlayer(function(current) {
									return current.hasSkill('nsfzxys_zhihui_af');
								}) > 1) return false;
							if (event.source && event.source == player) return false;
							return true;
						},
						content: function() {
							trigger.source = player;
						},
						mod: {
							globalFrom: function(from, to, distance) {
								return distance - Infinity;
							}
						},
						group: 'nsfzxys_zhihui_af_remove',
						subSkill: {
							remove: {
								trigger: {
									player: 'phaseEnd',
								},
								forced: true,
								charlotte: true,
								silent: true,
								popup: false,
								sub: true,
								content: function() {
									player.removeSkill('nsfzxys_zhihui_af');
								},
							},
						}
					},
					"nsfzxys_gaoyin": {
						enable: "phaseUse",
						filterCard: true,
						position: "he",
						filter: function(event, player) {
							var num = player.getStat().skill.nsfzxys_gaoyin;
							if (num) {
								num += 1;
							} else {
								num = 1;
							}
							return player.countCards('he') >= num;
						},
						check: function(card) {
							if (ui.selected.cards.length >= 2) {
								return 4 - get.value(card);
							}
							return 6 - get.value(card);
						},
						selectCard: function(card) {
							var num = _status.event.player.getStat().skill.nsfzxys_gaoyin;
							if (num) return num + 1;
							return 1;
						},
						filterTarget: function(card, player, target) {
							if (player == target) return false;
							return player.inRange(target);
						},
						content: function() {
							target.damage('nocard');
						},
						ai: {
							order: function(item, player) {
								var num = player.getStat().skill.nsfzxys_gaoyin;
								if (!num) {
									return 7;
								} else if (num == 1) {
									return 3;
								} else if (num == 2) {
									return 1.5
								}
								return 1;
							},
							result: {
								target: function(player, target) {
									if (target.hasSkillTag('nodamage')) return 0;
									var num = player.getStat().skill.nsfzxys_gaoyin;
									if (num) {
										num++;
									} else {
										num = 1;
									}
									if (num > 3) return 0;
									if (num == 3) return get.damageEffect(target, player, target);
									return get.damageEffect(target, player, target);
								},
							},
						},
					},
					"nsfzxys_miaohui": {
						trigger: {
							player: 'phaseUseBegin'
						},
						marktext: "绘",
						intro: {
							name: '描绘',
							mark: function(dialog, storage, player, skill) {
								if (!player.storage.nsfzxys_miaohui_1 || !player.storage.nsfzxys_miaohui_2) return;
								dialog.add('展示的牌');
								dialog.addSmall([player.storage.nsfzxys_miaohui_1]);
								dialog.add('获得的牌');
								dialog.addSmall([player.storage.nsfzxys_miaohui_2]);
							},
						},
						filter: function(event, player) {
							if (!player.countCards('h') || !ui.discardPile.childNodes.length) return false;
							var hs = player.getCards('h');
							var type = [];
							for (var i = 0; i < hs.length; i++) {
								type.add(get.type2(hs[i]));
							}
							for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
								if (type.contains(get.type2(ui.discardPile.childNodes[i]))) return true;
							}
							return false;
						},
						content: function() {
							'step 0'
							event.object = {
								basic: [],
								trick: [],
								equip: [],
							}
							var tao = false;
							var equip2 = false;
							var aoe = false;
							var value = {
								basic: 0,
								trick: 0,
								equip: 0,
							};

							var current;
							for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
								current = ui.discardPile.childNodes[i];
								if (get.type2(current) == 'basic') {
									event.object.basic.push(current);
									value['basic'] = Math.max(player.getUseValue(current), value['basic'])
									if (!tao && get.name(current) == 'tao') tao = true;

								} else if (get.type2(current) == 'trick') {
									event.object.trick.push(current);
									value['trick'] = Math.max(player.getUseValue(current), value['trick'])
									if (!aoe && get.tag(current, 'damage') && get.tag(current, 'multitarget')) aoe = true;

								} else if (get.type2(current) == 'equip') {
									event.object.equip.push(current);
									value['equip'] = Math.max(player.getUseValue(current), value['equip'])
									if (!equip2 && get.subtype(current) == 'equip2') equip2 = true;
								}
							}

							player.chooseCard('h', '展示一张手牌，然后从弃牌堆中获得一张类型相同的牌', function(card) {
								var type = get.type2(card);
								if (!event.object[type] || event.object[type].length < 1) return false;
								return true;
							}).set('ai', function(card) {
								var type = get.type2(card);
								var base = value[type] || 0;
								if (player.getUseValue(card) > base || base < 1) return 0;

								if (type == 'equip' && !player.getEquip(2) && get.subtype(card) != 'equip2' && equip2) {
									base += 3;
								} else if (type == 'trick' && aoe && get.tag(card, 'multitarget')) {
									base += 0.5 * player.getUseValue(card);
								} else if (type == 'basic' && tao && game.hasPlayer(function(current) {
										return get.attitude(player, current) > 0 && current.hp < 2;
									})) base += 5;

								return base;
							});
							'step 1'
							if (result.bool) {
								player.showCards(result.cards);
								event.card = result.cards[0]
								event.type = get.type2(event.card);
							} else {
								event.finish();
							}
							'step 2'
							if (event.object[event.type] && event.object[event.type].length) {
								player.chooseButton(['选择一张类型为' + get.translation(event.type) + '的牌并获得', event.object[event.type]]).ai = function(button) {
									return player.getUseValue(button.link);
								};
							} else {
								event.finish();
							}
							'step 3'
							if (result.bool) {
								player.gain(result.links[0], 'gain2');
								player.storage.nsfzxys_miaohui_1 = event.card;
								player.storage.nsfzxys_miaohui_2 = result.links[0];
								player.markSkill('nsfzxys_miaohui');
							}
						},
						mod: {
							cardEnabled2: function(card, player) {
								if (player.storage.nsfzxys_miaohui_1) {
									if (card != player.storage.nsfzxys_miaohui_2 && get.type2(card) == get.type2(player.storage.nsfzxys_miaohui_1)) return false;
								}
							},
							ignoredHandcard: function(card, player) {
								if (player.storage.nsfzxys_miaohui_1) {
									if (card == player.storage.nsfzxys_miaohui_1) return true;
								}
							},
							cardDiscardable: function(card, player, name) {
								if (player.storage.nsfzxys_miaohui_1) {
									if (name == 'phaseDiscard' && card == player.storage.nsfzxys_miaohui_1) return false;
								}
							},
						},
						group: ["nsfzxys_miaohui_reset"],
						subSkill: {
							reset: {
								trigger: {
									player: "phaseAfter",
								},
								silent: true,
								content: function() {
									delete player.storage.nsfzxys_miaohui_1;
									delete player.storage.nsfzxys_miaohui_2;
									player.unmarkSkill('nsfzxys_miaohui');
								},
								sub: true,
								forced: true,
								popup: false,
								charlotte: true,
							},
						},
					},
					"nsfzxys_sediao": {
						trigger: {
							player: "phaseEnd",
						},
						intro: {
							content: function(storage, player) {
								var str = '本回合已经进入过弃牌堆的其他角色的牌的花色：';
								for (var i = 0; i < storage.length; i++) {
									str += get.translation(storage[i]);
								}
								return str;
							},
						},
						marktext: "色",
						init: function(player) {
							player.storage.nsfzxys_sediao = [];
						},
						filter: function(event, player) {
							return (player.storage.nsfzxys_sediao.length > 0);
						},
						onremove: function(player) {
							player.storage.nsfzxys_sediao = [];
						},
						direct: true,
						content: function() {
							'step 0'
							var length = player.storage.nsfzxys_sediao.length;
							var choices = ["摸牌"];
							if (length > 1 && (player.isTurnedOver() || player.isLinked())) choices.push("复原");
							if (length > 2 && player.isDamaged()) choices.push("回血");
							if (length > 3 && !player.hasSkill('nsfzxys_sediao_inserted')) choices.push("额外回合");
							choices.push('cancel2');
							player.chooseControl(choices).set('prompt', '色调：请选择一项').set('ai', function() {
								if (player.isTurnedOver()) return "复原";
								/*if (choices.contains("额外回合")) return "额外回合";
								if (choices.contains("回血")) return "回血";*/
								return choices.length - 2; //"摸牌";
							});
							'step 1'
							player.storage.nsfzxys_sediao = [];
							player.unmarkSkill('nsfzxys_sediao');
							if (result.control != 'cancel2') {
								player.logSkill('nsfzxys_sediao');
								if (result.control == '摸牌') {
									player.draw();
								} else if (result.control == '复原') {
									player.turnOver(false);
									player.link(false);
								} else if (result.control == '复原') {
									player.recover();
								} else {
									player.addTempSkill('nsfzxys_sediao_inserted', 'roundStart');
									player.insertPhase();
								}
							}
						},
						group: 'nsfzxys_sediao_record',
						subSkill: {
							inserted: {
								charlotte: true,
							},
							record: {
								trigger: {
									global: ["loseAfter", "cardsDiscardAfter"],
								},
								forced: true,
								charlotte: true,
								silent: true,
								popup: false,
								filter: function(event, player) {
									if (player != _status.currentPhase) return false;
									var cards = (event.cards2 || event.cards);
									if (!cards) return false;
									if (event.name == 'lose') {
										if (event.type != 'discard' || event.player == player) return false;
									} else {
										var evt = event.getParent();
										if (evt.name != 'orderingDiscard' || !evt.relatedEvent || evt.relatedEvent.player == player || !['useCard', 'respond'].contains(evt.relatedEvent.name)) return false;
									}
									return cards.length;
								},
								content: function() {
									'step 0'
									var cards = trigger.cards2 || trigger.cards;
									for (var i = 0; i < cards.length; i++) {
										player.storage.nsfzxys_sediao.add(get.suit(cards[i]));
									}
									player.markSkill('nsfzxys_sediao');
								},
							},
						},
					},
					"nsfzxys_lianjie": {
						trigger: {
							player: 'phaseZhunbeiBegin',
						},
						direct: true,
						content: function() {
							'step 0'
							player.chooseTarget('链接：将一名其他角色横置或重置', lib.filter.notMe).set('ai', function(target) {
								var att = get.attitude(player, target);

								if (att > 0 && target.isLinked()) return 10 * att;
								if (att < 0 && !target.isLinked()) return -8 * att;

								return Math.abs(att - 1);
							});
							'step 1'
							if (result.bool && result.targets.length) {
								player.logSkill('nsfzxys_lianjie', result.targets[0]);
								player.line(result.targets[0], 'blue');
								player.link();
								result.targets[0].link();
							}
						},
						group: 'nsfzxys_lianjie_draw',
						subfrequent: 'draw',
						subSkill: {
							draw: {
								trigger: {
									player: 'linkAfter'
								},
								frequent: true,
								sub: true,
								content: function() {
									var num = 1;

									var evt = trigger.getParent('damage');
									if (evt && evt.nature) num += 1;

									player.draw(num);
								},
							},
						},
					},
					"nsfzxys_qiongju": {
						inherit: 'nsfzxys_losehp2',
						group: 'nsfzxys_qiongju_gain',
						subfrequent: ['gain'],
						subSkill: {
							gain: {
								trigger: {
									player: 'loseHpAfter'
								},
								frequent: true,
								sub: true,
								filter: function(event, player) {
									return event.num > 0;
								},
								content: function() {
									'step 0'
									event.num = 1 + player.getDamagedHp();
									event.cards = get.cards(event.num);
									game.cardsGotoOrdering(event.cards);

									event.videoId = lib.status.videoId++;
									game.broadcastAll(function(player, id, cards) {
										var str;
										if (player == game.me && !_status.auto) {
											str = '穷举：选择花色各不相同的牌获得';
										} else {
											str = '穷举';
										}
										var dialog = ui.create.dialog(str, cards);
										dialog.videoId = id;
									}, player, event.videoId, event.cards);
									event.time = get.utc();
									game.addVideo('showCards', player, ['穷举', get.cardsInfo(event.cards)]);
									game.addVideo('delay', null, 2);
									'step 1'
									var next = player.chooseButton([0, event.num], true);
									next.set('dialog', event.videoId);
									next.set('filterButton', function(button) {
										for (var i = 0; i < ui.selected.buttons.length; i++) {
											if (get.suit(ui.selected.buttons[i].link) == get.suit(button.link)) return false;
										}
										return true;
									});
									next.set('ai', function(button) {
										return get.value(button.link, _status.event.player);
									});
									'step 2'
									game.broadcastAll('closeDialog', event.videoId);
									if (result.bool && result.links && result.links.length) {
										player.gain(result.links, 'log', 'gain2');

										event.num2 = result.links.length;
										if (event.num < 2 * result.links.length) {
											event.finish();
										}
									} else {
										event.finish();
									}
									'step 3'
									player.chooseTarget('穷举：选择一名弃牌的其他角色').set('filterTarget', function(card, player, target) {
										return target != player && target.countCards('hej') > 0;
									}).set('ai', function(target) {
										var att = get.attitude(player, target);

										if (att > 1 && target.countCards('j') > 0) return 10 * att;
										return -att * target.countCards('he');
									});
									'step 4'
									if (result.bool && result.targets.length) {
										player.discardPlayerCard(result.targets[0], true, 'hej', [1, event.num2]);
									} else {
										event.finish();
									}
									'step 5'
									event.num2 -= result.links.length;
									if (event.num2 > 0) {
										event.goto(3);
									} else {
										event.finish();
									}
								},
							},
						},
						action_tag: {
							overall: 4,
							draw: 2,
							discard: 1,
							loseHp_defend: 2,
						},
					},
					"nsfzxys_chaitai": {
						enable: 'phaseUse',
						usable: 1,
						filterTarget: function(card, player, target) {
							return player.canCompare(target);
						},
						filter: function(event, player) {
							return player.countCards('h') > 0;
						},
						content: function() {
							'step 0'
							player.chooseToCompare(target);
							'step 1'
							if (result.bool) {
								player.chooseControl(['拆牌', '摸牌'], function() {
									if (target.countCards('he') < 1) return 1;
									var discard = player.needsToDiscard();
									if (discard > 3) return 0;
									if (target.countCards('he') + 1 < player.countCards('h')) return 0;
									if (player.countCards('e') > 1 && (discard > 0 || target.countCards('he') <= player.countCards('h'))) return 0;
									return 1;
								}).set('prompt', '拆台：请选择一项').set('choiceList', [
									'可以将一张手牌当作【过河拆桥】对' + get.translation(target) + '使用',
									'使用牌指定' + get.translation(target) + '为目标后，摸一张牌',
								]);
							} else {
								target.addTempSkill('nsfzxys_chaitai_3', {
									player: 'phaseEnd'
								});
								event.finish();
							}
							'step 2'
							var str = 'nsfzxys_chaitai_' + (result.index + 1);
							player.addTempSkill(str, 'phaseUseEnd');
							player.storage.nsfzxys_chaitai = target;
						},
						ai: {
							order: 15,
							result: {
								player: function(player) {
									if (player.countCards('h', 'sha') > 0) return 0.6;
									var num = player.countCards('h');
									if (num > player.hp) return 0;
									if (num == 1) return -2;
									if (num == 2) return -1;
									return -0.7;
								},
								target: function(player, target) {
									var num = target.countCards('h');
									if (num == 1) return -1;
									if (num == 2) return -0.7;
									return -0.5
								},
							},
							threaten: 1.3
						},
						mod: {
							targetInRange: function(card, player, target) {
								if (player.storage.nsfzxys_chaitai && player.storage.nsfzxys_chaitai == target) {
									return true;
								}
							},
						},
					},
					"nsfzxys_chaitai_1": {
						mark: true,
						marktext: "拆",
						intro: {
							name: '拆台',
							mark: function(dialog, storage, player, skill) {
								if (player.storage.nsfzxys_chaitai) {
									dialog.addAuto([player.storage.nsfzxys_chaitai]);
									return '可以将一张手牌当作【过河拆桥】对' + get.translation(player.storage.nsfzxys_chaitai) + '使用';
								}
							},
						},
						charlotte: true,
						enable: 'chooseToUse',
						filterCard: function(card) {
							return true;
						},
						position: 'h',
						viewAs: {
							name: 'guohe'
						},
						filterTarget: function(card, player, target) {
							if (!player.storage.nsfzxys_chaitai || !player.storage.nsfzxys_chaitai.isIn()) return false;
							return target == player.storage.nsfzxys_chaitai;
						},
						viewAsFilter: function(player) {
							if (!player.storage.nsfzxys_chaitai || !player.storage.nsfzxys_chaitai.isIn()) return false;

							if (!player.countCards('h')) return false;
							return true;
						},
						prompt: '将一张手牌当作【过河拆桥】使用',
						check: function(card) {
							return 5 - get.value(card)
						},
						onremove: function(player, storage) {
							delete player.storage.nsfzxys_chaitai;
						},
					},
					"nsfzxys_chaitai_2": {
						trigger: {
							player: 'useCardToTargeted',
						},
						mark: true,
						marktext: "摸",
						intro: {
							name: '拆台',
							mark: function(dialog, storage, player, skill) {
								if (player.storage.nsfzxys_chaitai) {
									dialog.addAuto([player.storage.nsfzxys_chaitai]);
									return '使用牌指定' + get.translation(player.storage.nsfzxys_chaitai) + '为目标后，摸一张牌';
								}
							},
						},
						filter: function(event, player) {
							if (!player.storage.nsfzxys_chaitai || !player.storage.nsfzxys_chaitai.isIn()) return false;
							return event.target == player.storage.nsfzxys_chaitai;
						},
						forced: true,
						charlotte: true,
						content: function() {
							'step 0'
							player.draw();
						},
						onremove: function(player, storage) {
							delete player.storage.nsfzxys_chaitai;
						},
					},
					"nsfzxys_chaitai_3": {
						mark: true,
						marktext: "台",
						intro: {
							name: '拆台',
							mark: function(dialog, storage, player, skill) {
								return '跳过弃牌阶段';
							},
						},
						trigger: {
							player: ['phaseDiscardBefore']
						},
						forced: true,
						charlotte: true,
						popup: false,
						firstDo: true,
						content: function() {
							trigger.cancel();
						},
					},
					"nsfzxys_diangu": {
						init: function(player) {
							if (!player.storage.nsfzxys_diangu) player.storage.nsfzxys_diangu = [];
						},
						enable: ['chooseToUse', 'chooseToRespond'],
						filter: function(event, player) {
							if (player.countCards('e') >= Math.max(1, player.countCards('h'))) return true;
							return false;
						},
						chooseButton: {
							dialog: function(event, player) {
								var list = [];
								for (var i = 0; i < lib.inpile.length; i++) {
									var name = lib.inpile[i];
									if (name == 'sha') {
										list.push(['基本', '', 'sha']);
										list.push(['基本', '', 'sha', 'fire']);
										list.push(['基本', '', 'sha', 'thunder']);
										list.push(['基本', '', 'sha', 'ice']);
									} else if (get.type(name) == 'trick') list.push(['锦囊', '', name]);
									else if (get.type(name) == 'basic') list.push(['基本', '', name]);
								}
								if (list.length == 0) {
									return ui.create.dialog('典故没有可用牌');
								}
								return ui.create.dialog('典故', [list, 'vcard']);
							},
							filter: function(button, player) {
								var evt = _status.event.getParent();
								//if (evt.type == 'wuxie') return true;
								return evt.filterCard({
									name: button.link[2]
								}, player, evt);
							},
							check: function(button) {
								var player = _status.event.player;
								if (player.countCards('h', button.link[2]) > 0) return 0;
								if (button.link[2] == 'wugu') return 0;
								var effect = player.getUseValue(button.link[2]);
								if (effect > 0) return effect;
								return 0;
							},
							backup: function(links, player) {
								return {
									filterCard: true,
									selectCard: 1,
									popname: true,
									check: function(card) {
										return 7.1 - get.value(card);
									},
									position: 'e',
									viewAs: {
										name: links[0][2],
										nature: links[0][3]
									},
								}
							},
							hiddenCard: function(player, name) {
								if (player.countCards('e') < Math.max(player.countCards('h'), 1)) return false;
								return name == 'wuxie';
							},
							prompt: function(links, player) {
								return '将一张装备牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用或打出';
							}
						},
						hiddenCard: function(player, name) {
							if (player.countCards('e') < Math.max(player.countCards('h'), 1)) return false;
							return name == 'wuxie';
						},
						ai: {
							save: true,
							respondSha: true,
							respondShan: true,
							skillTagFilter: function(player, tag) {
								if (player.countCards('e') < Math.max(player.countCards('h'), 1)) return false;
							},
							order: 4,
							result: {
								player: function(player) {
									var allshown = true,
										players = game.filterPlayer();
									for (var i = 0; i < players.length; i++) {
										if (players[i].ai.shown == 0) {
											allshown = false;
										}
										if (players[i] != player && players[i].countCards('h') && get.attitude(player, players[i]) > 0) {
											return 1;
										}
									}
									if (allshown) return 1;
									return 0;
								}
							},
						},
					},
					"nsfzxys_heishao": {
						trigger: {
							global: "judge",
						},
						direct: true,
						filter: function(event, player) {
							return player.countCards('h', {
								color: 'black'
							}) > 0;
						},
						content: function() {
							'step 0'
							player.chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' +
								get.translation(trigger.player.judging[0]) + '，' + get.prompt('nsfzxys_heishao'), 'h',
								function(card) {
									return (get.color(card) == 'black');
								}).set('ai', function(card) {
								var trigger = _status.event.getTrigger();
								var player = _status.event.player;
								var judging = _status.event.judging;
								var max = 0;
								var min = 0;

								for (var i = 0; i < ui.cardPile.childElementCount; i++) {
									var card2 = ui.cardPile.childNodes[i];
									max = Math.max(max, trigger.judge(card2));
									min = Math.max(min, trigger.judge(card2));
								}
								for (var i = 0; i < ui.discardPile.childElementCount; i++) {
									var card2 = ui.discardPile.childNodes[i];
									max = Math.max(max, trigger.judge(card2));
									min = Math.max(min, trigger.judge(card2));
								}

								//var result = trigger.judge(card) - trigger.judge(judging);
								var attitude = get.attitude(player, trigger.player);
								if (attitude > 0) {
									if (max > trigger.judge(judging)) return 6 - get.value(card);
								} else if (attitude < 0) {
									if (min < trigger.judge(judging)) return 6 - get.value(card);
								}
								return 0;

							}).set('judging', trigger.player.judging[0]);
							'step 1'
							if (result.bool) {
								player.logSkill('nsfzxys_heishao', trigger.player);
								player.respond(result.cards, 'highlight', 'nsfzxys_heishao', 'noOrdering');
							} else {
								event.finish();
							}
							'step 2'
							var card = trigger.player.judging[0];
							var judge0 = trigger.judge(card);
							var judge1 = 0;
							var choice = '4';
							var attitude = get.attitude(player, trigger.player);
							var list = [];
							event.suitx = ['heart', 'diamond', 'club', 'spade'];
							event.suitchoice = event.suitx.randomGet();
							for (var x = 0; x < 4; x++) {
								for (var i = 1; i < 14; i++) {
									list.add(i);
									var judge2 = (trigger.judge({
										name: get.name(card),
										suit: event.suitx[x],
										number: i,
										nature: get.nature(card),
									}) - judge0) * attitude;
									if (judge2 > judge1) {
										choice = i;
										event.suitchoice = event.suitx[x];
										judge1 = judge2;
									}
								}
							}
							//list.push('cancel2');
							//event.suitx.push('cancel2');
							player.chooseControl(list).set('ai', function() {
								return _status.event.choice;
							}).set('choice', choice).prompt = "黑哨：选择一个点数";
							'step 3'
							game.log(trigger.player, '判定结果点数为', '#g' + result.control);
							player.popup(result.control, 'fire');
							if (!trigger.fixedResult) trigger.fixedResult = {};
							trigger.fixedResult.number = result.control;
							'step 4'
							player.chooseControl(event.suitx).set('ai', function() {
								return _status.event.choice;
							}).set('choice', event.suitchoice).prompt = "黑哨：选择一个花色";
							'step 5'
							game.log(trigger.player, '判定结果花色为', '#g' + result.control);
							player.popup(result.control, 'fire');
							if (!trigger.fixedResult) trigger.fixedResult = {};
							trigger.fixedResult.suit = result.control;
							if (result.control == 'club' || result.control == 'spade') {
								trigger.fixedResult.color = 'black';
							} else if (result.control == 'heart' || result.control == 'diamond') {
								trigger.fixedResult.color = 'red';
							}
						},
						ai: {
							rejudge: true,
							tag: {
								rejudge: 1
							}
						},
					},
					"nsfzxys_liedui": {
						enable: "phaseUse",
						usable: 1,
						filter: function(event, player) {
							return player.countCards('h') > 0;
						},
						filterCard: function(card, player) {
							return true;
						},
						position: 'h',
						check: function(card) {
							return (6 - get.value(card)) / (get.number(card) + 0.5);
						},
						content: function() {
							'step 0'
							event.num = get.number(cards[0]);
							event.current = player.next;
							'step 1'
							var str = '弃置一张';
							str += event.num > 0 ? '点数大于' + event.num + '的' : '';
							str += '手牌'
							str += event.current == player ? '' : '，或不弃置并受到一点伤害。';
							player.line(event.current);
							event.current.chooseToDiscard('h', 1, str, function(card) {
								return get.number(card) > event.num;
							}).set('ai', function(card) {
								if (event.current.hasSkillTag('nodamage')) return 0;
								if (get.number(card) <= event.num) return 0;

								if (event.current.next == _status.currentPhase) {
									if (get.attitude(event.current, _status.currentPhase) > 0) return 0;
									return 100 - get.value(card);
								}
								var num = get.attitude(event.current, event.current.getNext()) > 0 ? 14 - get.number(card) : get.number(card);
								return num * num / (Math.max(get.value(card), 0.5));
							});
							'step 2'
							if (result.bool && result.cards.length > 0) {
								event.current = event.current.next;
								event.num = get.number(result.cards[0]);
								event.goto(3);
							} else {
								event.goto(4);
							}
							'step 3'
							game.delay(0.9);
							if (event.current == player) {
								event.finish();
							} else {
								event.goto(1);
							}
							'step 4'
							player.chooseBool("对" + get.translation(event.current) + "造成一点伤害？").set('choice', get.attitude(player, event.current) < 0);
							'step 5'
							if (result.bool) {
								event.current.damage();
							}
						},
						ai: {
							order: 13,
							result: {
								player: 1,
							},
						},
					},
					"nsfzxys_liedui_bkup": {
						enable: "phaseUse",
						usable: 1,
						filterTarget: function(card, player, target) {
							if (player == target) return false;
							return true;
						},
						filter: function(event, player) {
							return player.countCards('h') > 0;
						},
						content: function() {
							'step 0'
							event.num = 0;
							event.current = player;
							'step 1'
							var str = '弃置一张';
							str += event.num > 0 ? '点数大于' + event.num + '的' : '';
							str += '手牌'
							str += event.current == player ? '' : '，或不弃置并受到一点伤害。';
							event.current.chooseToDiscard('h', str, event.num === 0, function(card) {
								return get.number(card) > event.num;
							}).set('ai', function(card) {
								if (event.current.hasSkillTag('nodamage')) return 0;
								if (get.number(card) <= event.num) return 0;
								return get.number(card) * get.number(card) / (Math.max(get.value(card), 1));
							});
							'step 2'
							if (result.bool) {
								if (event.current == player) {
									event.current = target;
								} else {
									event.current = player;
								}
								event.num = get.number(result.cards[0]);
							} else {
								if (event.current == target) target.damage('nocard');
								event.finish();
							}
							'step 3'
							event.goto(1);
						},
						ai: {
							order: 13,
							result: {
								target: function(player, target) {
									if (target.hasSkillTag('nodamage')) return 0;
									var cs = player.countCards('h');
									var hs = target.countCards('h');
									if (hs > cs) {
										return Math.min(get.damageEffect(target, player) + hs - cs, -1);
									} else {
										return get.damageEffect(target, player);
									}
									return 0;
								},
							},
						},
					},
					"nsfzxys_pufa": {
						trigger: {
							player: 'phaseDrawBegin1',
						},
						check: function(event, player) {
							var friends = game.countPlayer(function(current) {
								return get.attitude(player, current) > 0;
							});
							var enemies = game.countPlayer(function(current) {
								return get.attitude(player, current) < 0;
							});
							var neutral = game.countPlayer(function(current) {
								return get.attitude(player, current) == 0;
							});

							return friends + neutral * 0.6 + enemies * 0.3 + 0.1 >= event.num;
						},
						content: function() {
							'step 0'
							event.current = player.next;
							event.suit = [];
							'step 1'
							player.line(event.current, 'green');
							event.current.draw();
							event.current.chooseToDiscard('h', 1, true).set('ai', function(card) {
								var att = get.attitude(_status.event.player, player);
								var base = 7;

								if (att > 1 && !event.suit.contains(get.suit(card))) {
									base += 3;
								}
								if (att < 0 && event.suit.contains(get.suit(card))) {
									base -= 2;
								}
								return base - get.value(card);
							});
							'step 2'
							if (result.cards && result.cards.length) {
								event.suit.add(get.suit(result.cards[0]));
							}
							if (event.current != player) {
								event.current = event.current.next;
								game.delay(1);
								event.goto(1);
							}
							'step 3'
							if (!trigger.numFixed) {
								trigger.num = event.suit.length;
								trigger.numFixed = true;
							}
						},
						action_tag: {
							overall: 1.5,
							draw: 1,
							change: 1,
						},
					},
					"nszxys_tiaosheng": {
						trigger: {
							player: ['useCardAfter', 'respond'],
						},
						filter: function(event, player) {
							if (player == _status.currentPhase) return false;
							return get.type(event.card) == 'basic';
						},
						forced: true,
						content: function() {
							player.addTempSkill('mianyi');
						},
						action_tag: {
							overall: 3,
							deterrence: 1,
							damage_prevent: 1,
						},
					},
					"nszxys_tiaosheng_af": {
						mark: true,
						marktext: "绳",
						intro: {
							content: '防止你受到的所有伤害'
						},
						trigger: {
							player: 'damageBefore',
						},
						firstDo: true,
						charlotte: true,
						forced: true,
						content: function() {
							trigger.cancel();
						},
						ai: {
							nofire: true,
							nothunder: true,
							nodamage: true,
							effect: {
								target: function(card, player, target, current) {
									if (get.tag(card, 'damage')) return [0, 0];
								}
							},
						},
					},
					"nsfzxys_yitong": {
						trigger: {
							player: 'phaseDrawBegin2'
						},
						forced: true,
						filter: function(event, player) {
							return !event.numFixed;
						},
						content: function() {
							var count = 0;
							if (get.mode() == 'identity' && _status.mode != 'purple') {
								if (get.population('zhu') > 0) count++;
								if (get.population('zhong') > 0) count++;
								if (get.population('fan') > 0) count++;
								if (get.population('nei') > 0) count++;
							} else {
								count += 4;
							}
							trigger.num = count;
							trigger.numFixed = true;
						},
						mod: {
							maxHandcardBase: function(player, num) {
								var count = 0;
								if (get.mode() == 'identity' && _status.mode != 'purple') {
									if (get.population('zhu') > 0) count++;
									if (get.population('zhong') > 0) count++;
									if (get.population('fan') > 0) count++;
									if (get.population('nei') > 0) count++;
								} else {
									count += 4;
								}
								return Math.max(num, count);
							}
						}
					},
					"nsfzxys_dahui": {
						unique: true,
						zhuSkill: true,
						fored: true,
						silent: true,
						popup: false,
						trigger: {
							global: 'gameDrawAfter'
						},
						filter: function(event, player) {
							if (!player.hasZhuSkill('nsfzxys_dahui')) return false;
							return game.hasPlayer(function(current) {
								return current != player && current.group == player.group;
							});
						},
						content: function() {
							'step 0'
							game.filterPlayer(function(current) {
								if (current == player) return false;
								current.addSkill('nsfzxys_dahui_2');
								return true;
							});
						},
					},
					"nsfzxys_dahui_2": {
						enable: "phaseUse",
						usable: 1,
						charlotte: true,
						filterTarget: function(card, player, target) {
							return player != target && player.group == target.group && target.hasZhuSkill('nsfzxys_dahui', player);
						},
						filter: function(event, player) {
							return game.countPlayer(function(current) {
								return current != player && current.group == player.group && current.hasZhuSkill('nsfzxys_dahui', player);
							}) > 0;
						},
						prompt: "令一名拥有【大会】主公技的角色摸两张牌",
						content: function() {
							'step 0'
							target.draw(2);
							player.addExpose(0.5);
							player.removeSkill('nsfzxys_dahui_2');
							'step 1'
							target.chooseBool('是否令' + get.translation(player) + '摸一张牌？').set('ai', function() {
								return get.attitude(target, player) > 0
							});
							'step 2'
							if (result.bool) {
								player.draw();
							}
						},
						ai: {
							order: 20,
							result: {
								target: function(player, target) {
									return 10;
								}
							}
						},
					},


					// schoolmate
					"nsfzxys_saishu": {
						enable: 'phaseUse',
						usable: 1,
						filter: function(event, player) {
							return game.countPlayer(function(current) {
								return current.countCards('h') > 0;
							}) > 1;
						},
						filterTarget: function(card, player, target) {
							if (target.countCards('h') < 1) return false;
							if (ui.selected.targets.length == 1) {
								return target.canCompare(ui.selected.targets[0]);
							}
							return true;
						},
						targetprompt: ['拼点来源', '拼点目标'],
						selectTarget: 2,
						multitarget: true,
						content: function() {
							'step 0'
							event.target1 = targets[0];
							event.target2 = targets[1];
							player.draw(2);
							if (!event.target1.canCompare(event.target2)) event.finish();
							'step 1'
							event.target1.chooseToCompare(event.target2);
							'step 2'
							if (result.tie) {
								event.finish();
							} else {
								if (result.bool) {
									event.playerx = event.target1;
								} else {
									event.playerx = event.target2;
								}
							}
							'step 3'
							event.playerx.discardPlayerCard(player, 'hej', "弃置" + get.translation(player) + "的一张牌，或点【取消】令其失去一点体力").set('ai', function(button) {
								if (get.attitude(event.playerx, player) < 0) return 0;
								return 10 - get.buttonValue(button);
							});
							'step 4'
							if (!result.bool) {
								player.loseHp(1);
							}
						},
						ai: {
							order: 4,
							result: {
								player: function(player) {
									if (player.hp < 2) return -5;
									if (player.hp == 2) return 0;
									return 0.5 * player.hp;
								},
								target: function(player, target) {
									return -2 / (target.countCards('h') + 0.1);
								}
							}
						},
					},
					"nsfzxys_zhitong": {
						trigger: {
							global: 'useCard2'
						},
						filter: function(event, player) {
							if (!event.card || get.name(event.card) != 'sha') return false;
							if (!event.targets || event.player == player) return false;
							for (var i = 0; i < event.targets.length; i++) {
								if (event.targets[i] == player || player.inRange(event.targets[i])) return true;
							}
							return false;
						},
						direct: true,
						content: function() {
							'step 0'
							event.choice = false;
							event.num = Math.max(1, Math.min(5, player.maxHp - player.countCards('h')));
							if (trigger.targets.contains(player)) {
								event.goto(3);
							} else {
								player.chooseControl(['选项一', '选项二', 'cancel2']).set('choiceList', [
									'你成为此【杀】的唯一目标，然后摸' + get.cnNumber(event.num) + '张牌',
									'你额外成为此【杀】的目标，然后此【杀】的使用者受到一点伤害',
								]).set('ai', function() {
									var eff = get.effect(player, trigger.card, trigger.player, player);

									for (var i = 0; i < trigger.targets.length; i++) {
										if (get.effect(trigger.targets[i], trigger.card, trigger.player, player) <= eff) return 0;
									}
									if (!trigger.player.hasSkillTag('nodamage') && get.damageEffect(trigger.player, player, player) > Math.abs(eff)) return 1;
									return 2;
								}).set('prompt', get.translation(trigger.player) + '使用【杀】指定了' + get.translation(trigger.targets) + '为目标，是否发动【志同】？');
							}
							'step 1'
							if (result.index == 0) {
								event.choice = true;
								event.goto(4);
							} else if (result.index == 1) {
								player.logSkill('nsfzxys_zhitong', trigger.player);
								trigger.targets.add(player);
							} else {
								event.finish();
							}
							'step 2'
							trigger.player.damage();
							game.delay(1);
							event.finish();
							'step 3'
							player.chooseBool('是否发动【志同】，成为此【杀】的唯一目标，然后摸' + get.cnNumber(event.num) + '张牌？').set('choice', true);
							'step 4'
							if (event.choice || result.bool) {
								player.logSkill('nsfzxys_zhitong');
								player.draw(event.num);
								trigger.targets = [player];
							}
						},
					},
					"nsfzxys_bingjia": {
						trigger: {
							global: "phaseUseBegin",
						},
						filter: function(event, player) {
							if (event.player == player) return false;
							return player.countCards('e') > 0 || event.player.canUse('sha', player, false);
						},
						check: function(event, player) {
							var att = get.attitude(player, event.player);

							if (att > 0) {
								if (player.countCards('e', function(card) {
										return get.value(card) < 7;
									}) > 0) return true;
								if (player.countCards('h', function(card) {
										return get.value(card) < 7 && ['tao', 'shan'].contains(get.name(card));
									}) > 0) return true;
							} else {
								if (player.countCards('e', function(card) {
										return get.value(card) < 7;
									}) == player.countCards('e')) return true;

								if (event.player.countCards('h', 'sha') > 0 && event.player.inRange(player)) return true;
							}

							for (var i = 0; i < Math.min(2, ui.cardPile.childElementCount); i++) {
								var card2 = ui.cardPile.childNodes[i];
								if (card2) {
									if (get.type(card2) == 'equip' || ['tao', 'shan'].contains(get.name(card2))) return true;
								}
							}

							return false;
						},
						content: function() {
							'step 0'
							player.draw(2);
							/*player.chooseToUse({
								type: 'equip'
							}, '使用一张装备牌');*/
							player.chooseCard('h', '使用一张装备牌').set('ai', function(card) {
								if (get.type(card) != 'equip') return -1;
								if (player.getEquip(get.subtype(card))) return -1;

								return 10 - get.value(card);
							}).set('filterCard', function(card) {
								if (get.type(card) != 'equip' || player.isDisabled(get.subtype(card))) {
									return false;
								}
								return true;
							});
							'step 1'
							if (result.bool && result.cards.length) {
								player.equip(result.cards[0]);
							}
							'step 2'
							event.type1 = player.countCards('e') > 0;
							event.type2 = trigger.player.canUse('sha', player, false);

							var att = get.attitude(player, trigger.player);
							var eff = 0; //get.effect(player, 'sha', trigger.player, player);
							var choice1 = false;
							var choice2 = false;

							if (att > 0) {
								if (eff > 0) choice2 = true;
								if (player.countCards('e', function(card) {
										return get.value(card) < 7;
									}) > 0) choice1 = true;
								if (player.countCards('h', function(card) {
										return get.value(card) < 7 && ['tao', 'shan'].contains(get.name(card));
									}) > 0) choice2 = true;
							} else {
								if (eff < 0) choice2 = true;
								if (player.countCards('e', function(card) {
										return get.value(card) < 7;
									}) == player.countCards('e')) choice1 = true;

								if (trigger.player.countCards('h', 'sha') > 0 && trigger.player.inRange(player)) choice2 = true;
							}

							if (event.type1 && event.type2) {
								player.chooseControl(["弃装备", "被杀"]).set('prompt', "病假：请选择一项").set('choice1', choice1).set('choice2', choice2).set('choiceList', [
									"被 弃置一张装备区内的牌",
									"视为对你使用一张无视防具的【杀】"
								]).set('ai', function() {
									if (_status.event.choice2) return "被杀";
									if (_status.event.choice1) return "弃装备";
									return ["弃装备", "被杀"].randomGet();
								});
							} else if (event.type1) {
								event.goto(4);
							} else if (event.type2) {
								event.goto(6);
							} else {
								event.finish();
							}
							'step 3'
							if (result.control == "被杀") {
								event.goto(6);
							}
							'step 4'
							trigger.player.discardPlayerCard(player, 'e', 1, true);
							'step 5'
							// player.addTempSkill('nsfzxys_bingjia_trick');
							game.delay();
							event.finish();
							'step 6'
							var card = {
								name: 'sha',
								isCard: true,
							};
							if (trigger.player.canUse(card, player, false)) {
								trigger.player.addTempSkill('qinggang_skill', 'shaEnd');
								trigger.player.useCard(card, player, false);
							}
							'step 7'
							//player.addTempSkill('nsfzxys_bingjia_sha');
							game.delay();
						},
					},
					"nsfzxys_bingjia_sha": {
						mod: {
							targetEnabled: function(card, player, target) {
								if (get.name(card) == 'sha') return false;
							},
						},
						charlotte: true,
						locked: true,
					},
					"nsfzxys_bingjia_trick": {
						mod: {
							targetEnabled: function(card, player, target) {
								if (get.type2(card) == 'trick' && get.tag(card, 'damage')) return false;
							},
						},
						charlotte: true,
						locked: true,
					},
					"nsfzxys_shengyuan": {
						trigger: {
							global: ["damageAfter", "loseAfter"],
						},
						marktext: "援",
						intro: {
							content: 'players',
						},
						init: function(player) {
							if (!player.storage.nsfzxys_shengyuan) player.storage.nsfzxys_shengyuan = [];
						},
						filter: function(event, player) {
							if (!event.player.isIn()) return false;
							if (event.name == 'damage' && !event.num) return false;
							return event.nsfzxys_shengyuan && !player.storage.nsfzxys_shengyuan.contains(event.player);
						},
						logTarget: "player",
						check: function(event, player) {
							return get.attitude(player, event.player) > 0.5;
						},
						content: function() {
							trigger.player.draw(2);
							player.storage.nsfzxys_shengyuan.push(trigger.player);
							player.markSkill('nsfzxys_shengyuan');
						},
						ai: {
							threaten: 1.6,
							expose: 0.1,
						},
						group: ['nsfzxys_shengyuan_reset', 'nsfzxys_shengyuan_mark'],
						subSkill: {
							reset: {
								trigger: {
									global: 'roundStart',
								},
								forced: true,
								silent: true,
								popup: false,
								charlotte: true,
								sub: true,
								content: function() {
									player.storage.nsfzxys_shengyuan = [];
									player.unmarkSkill('nsfzxys_shengyuan');
								}
							},
							mark: {
								trigger: {
									global: ['damageBefore', 'loseEnd'],
								},
								forced: true,
								silent: true,
								popup: false,
								charlotte: true,
								sub: true,
								filter: function(event, player) {
									if (event.name == 'lose') {
										if (event.player == _status.currentPhase) return false;
									}
									return event.player.isMinHp();
								},
								content: function() {
									trigger.nsfzxys_shengyuan = true;
								}
							},
						},
					},
					"nsfzxys_jiaoyan": {
						enable: 'phaseUse',
						init: function(player) {
							if (!player.storage.nsfzxys_jiaoyan) player.storage.nsfzxys_jiaoyan = [];
						},
						filter: function(event, player) {
							if (player.getStat('damage') > 0) return false;

							return player.countCards('he', function(card) {
								return get.tag(card, 'damage') || get.type(card) == 'equip';
							}) > 0;
						},
						filterCard: function(card, player) {
							return get.tag(card, 'damage') || get.type(card) == 'equip';
						},
						position: 'he',
						check: function(card) {
							return 7.1 - get.value(card);
						},
						discard: false,
						lose: false,
						delay: false,
						targetprompt: ['得到牌', '出杀目标'],
						filterTarget: function(card, player, target) {
							if (ui.selected.targets.length == 0) {
								return player != target;
							} else {
								return ui.selected.targets[0].canUse('sha', target, false);
							}
						},
						selectTarget: 2,
						multitarget: true,
						prompt: "将一张伤害牌交给一名角色，然后选择令其使用【杀】的目标",
						prompt2: "将一张伤害牌交给一名角色，然后选择令其使用【杀】的目标",
						content: function() {
							'step 0'
							event.card = cards[0];
							player.storage.nsfzxys_jiaoyan.add(event.card);
							if (get.type(event.card) == 'equip') {
								player.$give(event.card, targets[0], true);
								targets[0].equip(event.card);
							} else {
								targets[0].gain(event.card, player, 'give');
							}
							player.addTempSkill('nsfzxys_jiaoyan_source', 'nsfzxys_jiaoyanEnd');
							'step 1'
							targets[0].chooseToUse({
								name: 'sha'
							}, '对' + get.translation(targets[1]) + '使用一张【杀】').set('targetRequired', true).set('complexSelect', true).set('filterTarget', function(card, player, target) {
								return target == targets[1] && targets[0].canUse({
									name: 'sha'
								}, target, false);
							}).set('ai1', function(card) {
								if (get.name(card) != 'sha') return -1;

								var source = _status.event.source;
								var target2 = _status.event.target2;

								if (source.isTurnedOver()) return -1;
								if (get.attitude(source, target2) > 0) {
									if (source.maxHp - source.countCards('h') >= 3) return -1;
									if (source.countCards('h') == 1 || source.countCards('h') >= source.maxHp) return 10;
									if (target2.hp > source.hp || target2.countCards('h', 'shan') > 0) return source.countCards('h') - 2;
								}

								return get.order(card);
							}).set('ai2', function(target) {
								var source = _status.event.source;
								if (source.isTurnedOver()) return -1;

								if (get.attitude(source, target) > 0) {
									if (source.maxHp - source.countCards('h') >= 3) return -1;
									if (source.countCards('h') == 1 || source.countCards('h') >= source.maxHp) return 10;
									if (target.hp > source.hp || target.countCards('h', 'shan') > 0) return source.countCards('h') - 2;
								}

								return 1; // get.effect(target, 'sha', source, source) + 2;
							}).set('source', targets[0]).set('target2', targets[1]);
							'step 2'
							if (result.bool) {
								player.gainPlayerCard(targets[0], 'he', 'visible', 'visibleMove', "获得" + get.translation(targets[0]) + "的一张非伤害牌").set('filterButton', function(button) {
									//if (button.link == event.card) return false;
									if (player.storage.nsfzxys_jiaoyan.contains(button.link)) return false;
									return !get.tag(button.link, 'damage');
								});
								//targets[0].chooseCard('h', 1, true, '将一张牌交给' + get.translation(player));
							} else {
								targets[0].draw(Math.min(5, targets[0].maxHp - targets[0].countCards('h')));
								targets[0].turnOver();
								//event.goto(4);
							}
							/*'step 3'
							 player.gain(result.cards, targets[0], 'giveAuto');
							game.delay();
							'step 4'
							if (player.getStat().skill.nsfzxys_jiaoyan > 1 && !player.hasSkill('nsfzxys_jiaoyan_lose')) {
								player.addTempSkill('nsfzxys_jiaoyan_lose', 'phaseEnd');
							}*/
						},
						group: 'nsfzxys_jiaoyan_lose',
						subSkill: {
							lose: {
								trigger: {
									player: 'phaseJieshuEnd'
								},
								forced: true,
								silent: true,
								sub: true,
								charlotte: true,
								popup: false,
								filter: function(event, player) {
									return player.storage.nsfzxys_jiaoyan.length > 0;
								},
								content: function() {
									if (player.storage.nsfzxys_jiaoyan.length > 1) player.loseHp();
									player.storage.nsfzxys_jiaoyan = [];
								}
								/*onremove: function(player) {
									player.loseHp(1);
								}*/
							},
							source: {
								trigger: {
									global: 'damageBegin1'
								},
								forced: true,
								charlotte: true,
								silent: true,
								popup: false,
								sub: true,
								filter: function(event, player) {
									if (!event.getParent(4) || event.getParent(4).name != 'nsfzxys_jiaoyan') return false;
									return (event.card && event.card.name == 'sha');
								},
								content: function() {
									'step 0'
									trigger.source = player;
								}
							},
						},
						ai: {
							order: function(item, player) {
								var num = player.getStat().skill.nsfzxys_jiaoyan;
								if (!num) {
									return 7;
								}
								return 0;
							},
							result: {
								target: function(player, target) {
									var card;
									if (ui.selected.cards.length > 0) {
										card = ui.selected.cards[0];
									} else {
										card = {
											name: 'sha'
										};
									}
									if (ui.selected.targets.length == 0) {
										if (target.isTurnedOver()) return 10;
										if (target.hasSkillTag('noturn')) return 0;
										if (target.countCards('h', 'sha') < 1 && card.name != 'sha') return -10;

										var max = 0;
										if (target.countCards('h', function(card) {
												if (!get.tag(card, ' damage')) {
													max = Math.max(max, get.value(card, player));
													return true;
												}
												return false;
											}) > 0) {
											return -max;
										}
										return -3;
									} else {
										return -1;
									}
								}
							},
							expose: 0.4,
						},
					},
					"nsfzxys_fengzu": {
						trigger: {
							player: "damageBefore",
						},
						frequent: true,
						init: function(player) {
							if (!player.storage.nsfzxys_fengzu) player.storage.nsfzxys_fengzu = 1;
						},
						mark: true,
						marktext: "阻",
						intro: {
							content: '与其他角色计算距离时-#，其他角色与你计算距离时+#，手牌上限+#',
						},
						ondisable: true,
						onremove: function(player) {
							player.draw(2 * player.storage.nsfzxys_fengzu - 2);
							player.storage.nsfzxys_fengzu = 1;
						},
						filter: function(event, player) {
							return event.card && get.name(event.card) == 'sha';
						},
						content: function() {
							'step 0'
							trigger.cancel();
							'step 1'
							player.loseHp();
						},
						group: ["nsfzxys_fengzu_add", "nsfzxys_fengzu_clear"],
						subSkill: {
							add: {
								trigger: {
									player: "loseHpAfter",
								},
								direct: true,
								sub: true,
								filter: function(event, player) {
									return true;
								},
								content: function() {
									'step 0'
									player.storage.nsfzxys_fengzu += trigger.num;
									player.markSkill('nsfzxys_fengzu');
								},
							},
							clear: {
								trigger: {
									player: 'phaseJieshuBegin'
								},
								forced: true,
								sub: true,
								filter: function(event, player) {
									return player.storage.nsfzxys_fengzu > 1;
								},
								content: function() {
									player.draw(2 * player.storage.nsfzxys_fengzu - 2);
									player.storage.nsfzxys_fengzu = 1;
									player.markSkill('nsfzxys_fengzu');
								},
							},
						},
						mod: {
							globalFrom: function(from, to, distance) {
								if (typeof from.storage.nsfzxys_fengzu == 'number') return distance - from.storage.nsfzxys_fengzu;
							},
							globalTo: function(from, to, distance) {
								if (typeof to.storage.nsfzxys_fengzu == 'number') return distance + to.storage.nsfzxys_fengzu;
							},
							maxHandcard: function(player, current) {
								if (typeof player.storage.nsfzxys_fengzu == 'number') return current + player.storage.nsfzxys_fengzu;
							}
						},
						ai: {
							threaten: 0.9,
						},
						action_tag: {
							overall: 2.5,
							range: 1,
							draw: 1.5,
							loseHp_defend: 1,
						},
					},
					"nsfzxys_yiqing": {
						trigger: {
							player: "phaseDrawBegin1",
						},
						filter: function(event, player) {
							return true;
						},
						check: function(event, player) {
							var friends = game.countPlayer(function(current) {
								if (current.maxHp - current.countCards('h') > 1 && current != player && get.attitude(player, current) >= 1) {
									return true;
								}
								return false;
							});
							return friends > 0 || player.maxHp - player.countCards('h') > 1;
						},
						content: function() {
							'step 0'
							trigger.changeToZero();
							player.chooseTarget(1, get.prompt2('nsfzxys_yiqing'), true).set('ai', function(target) {
								var num = target.maxHp - target.countCards('h');
								if (num < 0) return 0;
								if (target == player) {
									return Math.min(num + 1.2, 4.2);
								}

								if (get.attitude(player, target) < 1) return 0;
								return num > 3 ? num : num + 1.1;
							});
							'step 1'
							if (result.bool && result.targets.length) {
								var target = result.targets[0];
								var num = target.maxHp - target.countCards('h');
								player.logSkill('nsfzxys_yiqing', target);
								player.line(target);
								target.draw(Math.min(5, num));
								if (num < 4) player.draw(1);
							}
						},
					},
					"nsfzxys_fanglang": {
						trigger: {
							global: 'damageBegin2'
						},
						filter: function(event, player) {
							if (!event.source || !event.num) return false;
							if (event.source == player) return false;
							if (!event.card || get.name(event.card) != 'sha') return false;
							return player.countCards('h') > 0;
						},
						direct: true,
						content: function() {
							'step 0'
							player.chooseCard(1, 'h', '放浪：是否将一张手牌交给' + get.translation(trigger.source) + '？').set('ai', function(card) {
								var base = 6;
								if (get.attitude(player, trigger.source) <= 0) base -= 6;
								if (get.color(card) == 'red' && player.isDamaged()) base += 3.1;
								if (get.color(card) == 'red' && !player.isDamaged() && trigger.source.needsToDiscard()) base -= 5;
								if (get.color(card) == 'black' && get.attitude(player, trigger.player) < 0) base += 1.1;
								if (get.color(card) == 'black' && get.attitude(player, trigger.player) > 1) base -= 9;

								return base - get.value(card);
							});
							'step 1'
							if (result.bool && result.cards.length) {
								var card = result.cards[0];
								//player.showCards([card]);
								if (trigger.source != player) trigger.source.gain(card, 'give', player);
								if (get.color(card) == 'black') {
									trigger.num++;
								} else {
									player.recover();
								}
							}
						},
					},
					"nsfzxys_zongdai": {
						unique: true,
						enable: 'phaseUse',
						mark: true,
						skillAnimation: true,
						limited: true,
						animationColor: 'water',
						intro: {
							content: 'limited'
						},
						init: function(player) {
							if (typeof player.storage.nsfzxys_zongdai != 'boolean') player.storage.nsfzxys_zongdai = false;
						},
						filter: function(event, player) {
							return (!player.storage.nsfzxys_zongdai);
						},
						content: function() {
							'step 0'
							player.awakenSkill('nsfzxys_zongdai');
							'step 1'
							event.record = [];
							event.togain = [];
							event.list = ['basic', 'basic', 'equip1', 'equip2'].concat(['delay', 'damage', 'gain', 'draw', 'multitarget', 'loseCard'].randomGets(4));
							event.count = 0;
							'step 2'
							if (event.count < event.list.length) {
								var typex = event.list[event.count];
								var card = get.cardPile(function(card) {
									if (event.record.contains(get.name(card))) return false;

									if (get.type(card) == typex) return true;
									if (get.type(card) == 'equip' && get.subtype(card) == typex) return true;
									if (get.type(card) == 'trick' && get.tag(card, typex)) return true;
									return false;
								});
								if (card) {
									event.togain.push(card);
									event.record.push(get.name(card));
								}
								event.count++;
								event.redo();
							}
							'step 3'
							player.gain(event.togain, 'gain2');
							player.storage.nsfzxys_zongdai_af = event.togain;
							player.addTempSkill('nsfzxys_zongdai_af');
						},
						ai: {
							order: function(item, player) {
								if (player.hp < 2) return 99;
								if (player.hp == 2 && player.countCards('h') <= 2) return 20;
								return 4;
							},
							result: {
								player: function(player) {
									if (player.hp <= 2 || player.countCards('h') <= 2) return 10;
									return 0;
								}
							},
						},
					},
					"nsfzxys_zongdai_af": {
						mark: true,
						intro: {
							mark: function(dialog, storage, player, skill) {
								if (!player.storage.nsfzxys_zongdai_af) return;
								dialog.add('获得的牌（点击【总代】按钮查看手牌中剩余的牌）');
								dialog.addSmall(player.storage.nsfzxys_zongdai_af);
								return;
							},
						},
						mod: {
							ignoredHandcard: function(card, player) {
								if (player.storage.nsfzxys_zongdai_af && player.storage.nsfzxys_zongdai_af.contains(card)) {
									return true;
								}
							},
							cardDiscardable: function(card, player, name) {
								if (name == 'phaseDiscard' && player.storage.nsfzxys_zongdai_af && player.storage.nsfzxys_zongdai_af.contains(card)) {
									return false;
								}
							},
						},
						onremove: function(player, skill) {
							delete player.storage.nsfzxys_zongdai_af;
						},
						enable: 'phaseUse',
						filter: function(event, player) {
							if (!Array.isArray(player.storage.nsfzxys_zongdai_af)) return false;
							return player.countCards('h', function(card) {
								return player.storage.nsfzxys_zongdai_af.contains(card);
							}) > 0;
						},
						filterCard: function(card, player) {
							if (!Array.isArray(player.storage.nsfzxys_zongdai_af)) return false;
							return player.storage.nsfzxys_zongdai_af.contains(card);
						},
						prompt: '手牌中剩余的牌',
						selectCard: 99,
						discard: false,
						lose: false,
						delay: false,
						pop: false,
						silent: true,
						complexSelect: true,
						complexCard: true,
						charlotte: true,
						locked: true,
						content: function() {
							game.delay(1);
						},
					},
					"nsfzxys_chixiang": {
						trigger: {
							global: "recoverAfter",
						},
						marktext: "翔",
						intro: {
							content: 'players',
						},
						init: function(player) {
							if (!player.storage.nsfzxys_chixiang) player.storage.nsfzxys_chixiang = [];
						},
						filter: function(event, player) {
							if (event.player == player) return false;
							return event.num > 0 && event.player.countCards('he') > 0;
						},
						logTarget: "player",
						check: function(event, player) {
							return get.attitude(player, event.player) < 0;
						},
						content: function() {
							trigger.player.chooseToDiscard('he', 1, true);
						},
						ai: {
							threaten: 1.6,
							expose: 0.5,
						},
						group: ['nsfzxys_chixiang_2', 'nsfzxys_chixiang_record'],
						subSkill: {
							record: {
								trigger: {
									global: 'recoverAfter',
								},
								forced: true,
								silent: true,
								charlotte: true,
								popup: false,
								sub: true,
								filter: function(event, player) {
									if (player != _status.currentPhase) return false;
									return event.player != player;
								},
								content: function() {
									player.storage.nsfzxys_chixiang.add(trigger.player);
								},
							},
						},
						action_tag: {
							overall: 4,
							damage: 1,
							discard: 2,
						},
					},
					"nsfzxys_chixiang_2": {
						trigger: {
							player: 'phaseJieshuBegin',
						},
						direct: true,
						filter: function(event, player) {
							return player.storage.nsfzxys_chixiang.length > 0;
						},
						content: function() {
							'step 0'
							player.chooseTarget(get.prompt('nsfzxys_chixiang'), '对一名回合回复过体力的其他角色造成一点伤害', function(card, player, target) {
								return _status.event.targets.contains(target);
							}).set('targets', player.storage.nsfzxys_chixiang).set('ai', function(target) {
								var player = _status.event.player;
								return get.damageEffect(target, player, player);
							});
							'step 1'
							player.storage.nsfzxys_chixiang = [];
							if (result.bool) {
								var target = result.targets[0];
								player.logSkill('nsfzxys_chixiang', target);
								target.damage();
							}
						},
					},
					"nsfzxys_fengzi": {
						enable: 'phaseUse',
						usable: 1,
						filter: function(event, player) {
							return game.countPlayer(function(current) {
								return current.countCards('h') > player.countCards('h');
							}) > 0;
						},
						filterTarget: function(card, player, target) {
							return target.countCards('h') > player.countCards('h');
						},
						selectTarget: -1,
						multitarget: true,
						multiline: true,
						content: function() {
							'step 0'
							event.targets = targets.slice(0);
							event.targets.sort(lib.sort.seat);
							'step 1'
							if (event.targets.length) {
								var target = event.targets.shift();
								target.chooseToDiscard('h').set('ai', function(card) {
									if (get.attitude(target, player) > 0) return 0;
									return get.unuseful(card);
								});
							} else {
								event.goto(3);
							}
							'step 2'
							if (!result.bool) {
								player.draw();
							}
							event.goto(1);
							'step 3'
							if (player.isMaxHandcard(true)) {
								var evt = event.getParent('phaseUse');
								if (evt && evt.player == player && !evt.skipped) evt.skipped = true;
							}
						},
						ai: {
							order: 0.5,
							result: {
								player: 1,
							},
						},
						mod: {
							maxHandcardBase: function(player, num) {
								return player.maxHp;
							},
						},
						action_tag: {
							overall: 3.5,
							draw: 2,
							negative: 0.5,
							maxHand: 1,
						},
						subSkill: {
							end: {
								trigger: {
									player: 'nsfzxys_fengziEnd',
								},
								forced: true,
								silent: true,
								content: function() {
									var evt = event.getParent('phaseUse');
									if (evt && evt.player == player && !evt.skipped) evt.skipped = true;
								},
							},
						},
					},
					"nsfzxys_zhishuai": {
						enable: 'phaseUse',
						filterTarget: function(card, player, target) {
							return player != target;
						},
						filterCard: function(card) {
							return get.color(card) == 'black';
						},
						filter: function(event, player) {
							if (player.hasSkill('nsfzxys_zhishuai_used')) return false;
							return player.countCards('h', {
								color: 'black'
							}) > 0;
						},
						position: 'h',
						check: function(card) {
							return 6 - get.value(card)
						},
						content: function() {
							'step 0'
							if (target.countCards('hej') < 1) {
								target.damage('nocard');
								player.getHistory('custom').push({
									nsfzxys_zhishuai_1: true
								});
								event.goto(3);
							}
							'step 1'
							event.num = 2; //Math.max(2, Math.min(player.hp, 3));
							target.chooseControl("弃牌", "伤害").set('ai', function() {
								var target = _status.event.target;
								var player = _status.event.playerx;

								if (get.attitude(target, player) > 0 && target.getCards('j') && target.getCards('j').length > 0) return 0;

								if (player.hasSkillTag('nodamage')) return 1;
								if (target.countCards('he') < player.hp || target.hp < 2) return 0;

								var num0 = player.getHistory('custom', function(evt) {
									return evt.nsfzxys_zhishuai_0 == true;
								}).length;
								if (num0 > 0) return 1;
								if (target.countCards('he', function(card) {
										return (get.tag(card, 'recover') || get.value(card, target) > 7);
									}) > 0) return 1;
								return 0;
							}).set('playerx', player).set('target', target).set('choiceList', [
								"被" + get.translation(player) + "弃置至多" + get.cnNumber(event.num) + "张牌",
								"受到" + get.translation(player) + "造成的一点伤害",
							]).set('prompt', "【直率】：请选择一项：");
							'step 2'
							if (result.index == 0) {
								player.discardPlayerCard(target, 'hej', true, [1, event.num]).set('prompt', "直率：弃置" + get.translation(target) + "的至多" + get.cnNumber(event.num) + "张牌");
								player.getHistory('custom').push({
									nsfzxys_zhishuai_0: true
								});
							} else if (result.index == 1) {
								target.damage('nocard');
								player.getHistory('custom').push({
									nsfzxys_zhishuai_1: true
								});
							}
							'step 3'
							var num0 = player.getHistory('custom', function(evt) {
								return evt.nsfzxys_zhishuai_0 == true;
							}).length;
							var num1 = player.getHistory('custom', function(evt) {
								return evt.nsfzxys_zhishuai_1 == true;
							}).length;
							if (num0 > 0 && num1 > 0) {
								player.addTempSkill('nsfzxys_zhishuai_used', 'phaseUseEnd');
							}
						},
						ai: {
							result: {
								target: function(player, target) {
									if (target.getCards('j').length > 0) return 10;

									var eff = get.damageEffect(target, player);
									if (target.hasSkillTag('nodamage')) return 0;
									if (target.hasSkillTag('noe') || target.hasSkillTag('noh') || target.countCards('he') < Math.max(2, Math.min(player.hp, 3))) {
										eff = eff * 0.7;
									}
									return eff;
								},
							},
							order: function() {
								return 9;
							},
						},
						subSkill: {
							used: {
								charlotte: true,
								locked: true,
							},
						},
					},
					"nsfzxys_guaicai": {
						trigger: {
							global: 'shaMiss'
						},
						filter: function(event, player) {
							if (event.player == player) return false;
							return true;
							/*return event.player.countCards('he') > 0 || player.countCards('h', {
								color: 'black'
							}) > 0;*/
						},
						check: function(event, player) {
							return get.attitude(player, event.player) < 0;
						},
						logTarget: 'player',
						content: function() {
							'step 0'
							trigger.player.damage();
						},
						ai: {
							threaten: 1.7,
							expose: 0.3,
						},
					},
					"nsfzxys_duzhuan": {
						enable: "phaseUse",
						filterCard: function(card, player) {
							var ub = ui.selected.cards;
							var suit = get.suit(card);
							var bool = false;
							for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
								if (get.suit(ui.discardPile.childNodes[i]) == suit) {
									bool = true;
									break;
								}
							}
							if (!bool) return false;

							for (var i = 0; i < ub.length; i++) {
								if (get.suit(ub[i]) != suit) {
									bool = false;
									break;
								}
							}
							return bool;
						},
						selectCard: 2,
						complexCard: true,
						position: 'h',
						filter: function(event, player) {
							return player.countCards('h') > 1;
						},
						check: function(card) {
							var player = _status.currentPhase;

							var suit = get.suit(card);
							if (player.countCards('h', {
									suit: suit
								}) < 2) return -1;

							var ub = ui.selected.cards;
							var val = player.getUseValue(card);

							for (var i = 0; i < ub.length; i++) {
								if (get.suit(ub[i]) != suit) return -1;
								val += get.value(ub[i], player);
							}

							for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
								if (get.suit(ui.discardPile.childNodes[i]) != suit) continue;
								if (get.value(ui.discardPile.childNodes[i], player) > val) return 6.1 - get.value(card);
							}
							return -1;
						},
						content: function() {
							'step 0'
							game.updateRoundNumber();
							'step 1'
							var suit = get.suit(cards[0]);

							event.togain = [];
							for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
								var current = ui.discardPile.childNodes[i];
								if (get.suit(current) == suit) event.togain.push(current);
							}
							'step 2'
							player.chooseButton(['获得其中的一张牌', event.togain], true).ai = function(button) {
								return get.value(button.link);
							};
							'step 3'
							if (result.bool) {
								player.gain(result.links[0], 'gain2');
							}
						},
						ai: {
							order: 3.9,
							result: {
								player: function(player) {
									return 1;
								},
							},
						},
					},
					"nsfzxys_juao": {
						enable: "phaseUse",
						usable: 1,
						filterTarget: function(card, player, target) {
							return player != target && player.inRange(target);
						},
						content: function() {
							'step 0'
							player.addTempSkill('nsfzxys_juao_db', {
								player: 'phaseBegin'
							});
							'step 1'
							target.damage('nocard');
						},
						ai: {
							damage: true,
							order: 10,
							result: {
								player: function(player, target) {
									if (player.countCards('h', 'shan') == 0) return 0;
									if (player.hp < 2) return -get.value({
										name: 'shan'
									}, player);
									if (player.countCards('h', 'sha') < 1) return get.value({
										name: 'sha'
									}, player);
									return -2;
								},
								target: function(player, target) {
									var eff = get.damageEffect(target, player);
									if (target.hasSkillTag('nodamage')) return 0;
									if (player.countCards('h', 'shan') > 0 && player.countCards('h', 'sha') < 1 && player.canUse('sha', target)) eff -= get.effect(target, {
										name: 'sha'
									}, player);
									return eff;
								}
							}
						},
					},
					"nsfzxys_juao_db": {
						mark: true,
						marktext: "傲",
						intro: {
							content: "你的所有【闪】均视为【杀】。",
						},
						mod: {
							cardname: function(card, player, name) {
								if (card.name == 'shan' && get.position(card) == 'h') return 'sha';
							},
						},
						ai: {
							skillTagFilter: function(player) {
								if (!player.countCards('h', 'shan')) return false;
							},
							respondSha: true,
							halfneg: true,
						},
						charlotte: true,
						locked: true,
					},
					"nsfzxys_bingdu": {
						trigger: {
							global: "phaseZhunbeiBegin",
						},
						direct: true,
						popup: false,
						filter: function(event, player) {
							return event.player != player && player.hp > 0; //!target.hasSkill('nsfzxys_bingdu_db');
						},
						content: function() {
							'step 0'
							event.target = trigger.player;
							player.chooseControl(['heart', 'diamond', 'club', 'spade', 'cancel2']).set('ai', function() {
								if (get.attitude(player, event.target) >= 0 || player.hp < 2) return 'cancel2';

								var target = event.target;
								var num = target.getHandcardLimit();
								var count = target.countCards('h');
								var bool = false;
								switch (num) {
									case 0:
										bool = true;
										break;
									case 1:
										bool = count > 1;
										break;
									case 2:
										bool = count > 3;
										break;
									case 3:
										bool = count > 5;
										break;
									case 4:
										bool = count > 9;
										break;
									default:
										bool = false;
								}
								if (!bool) return 'cancel2';

								var list = ['heart', 'diamond', 'club', 'spade'];
								if (target.hp < 2) list.remove('heart');
								if (target.countCards('h') > 3) list.remove('spade');
								if (target.getAttackRange() > 2 && target.countCards('h') > 2) list.remove('club');

								return list.randomGet();
							}).set('prompt', get.prompt2('nsfzxys_bingdu'));
							'step 1'
							if (result.control != 'cancel2') {
								player.loseHp();
								player.logSkill('nsfzxys_bingdu', event.target);
								player.line(event.target);
								if (Array.isArray(event.target.storage.nsfzxys_bingdu_suit)) {
									event.target.storage.nsfzxys_bingdu_suit.add(result.control);
								} else {
									event.target.storage.nsfzxys_bingdu_suit = [result.control];
								}
								if (Array.isArray(event.target.storage.nsfzxys_bingdu_source)) {
									event.target.storage.nsfzxys_bingdu_source.add(player);
								} else {
									event.target.storage.nsfzxys_bingdu_source = [player];
								}
								event.target.addTempSkill('nsfzxys_bingdu_db');
							} else {
								event.finish();
							}
						},
						ai: {
							expose: 0.1,
							threaten: 1.5,
						},
					},
					"nsfzxys_bingdu_db": {
						charlotte: true,
						debuff: true,
						mark: true,
						marktext: "侵",
						intro: {
							mark: function(dialog, content, player) {
								if (!player.storage.nsfzxys_bingdu_suit || !player.storage.nsfzxys_bingdu_source) return "很正常";
								if (player.storage.nsfzxys_bingdu_suit.length > 1) return "已被复数病毒侵入，无法使用任何牌！";
								return '只能使用' + get.translation(player.storage.nsfzxys_bingdu_suit) + '牌，感染源为' + get.translation(player.storage.nsfzxys_bingdu_source);
							},
						},
						mod: {
							cardEnabled2: function(card, player) {
								if (player.storage.nsfzxys_bingdu_suit && player.storage.nsfzxys_bingdu_suit.length > 1) return false;
								if (!player.storage.nsfzxys_bingdu_suit.contains(get.suit(card))) {
									return false;
								}
							},
						},
						trigger: {
							player: ['useCardAfter', 'respond'],
						},
						forced: true,
						popup: false,
						silent: true,
						filter: function(event, player) {
							if (!event.card) return false;
							if (!player.storage.nsfzxys_bingdu_suit || !player.storage.nsfzxys_bingdu_source) return false;
							return player.storage.nsfzxys_bingdu_suit.contains(get.suit(event.card));
						},
						content: function() {
							for (var i = 0; i < player.storage.nsfzxys_bingdu_source.length; i++) {
								var source = player.storage.nsfzxys_bingdu_source[i];
								if (source.isIn()) source.draw();
							}
						},
						onremove: function(player, skill) {
							player.storage.nsfzxys_bingdu_suit = [];
							player.storage.nsfzxys_bingdu_source = [];
						},
						ai: {
							neg: true,
						},
					},
					"nsfzxys_ganran": {
						trigger: {
							global: ['phaseDiscardEnd'],
						},
						direct: true,
						popup: false,
						filter: function(event, player) {
							if (event.player == player) return false;
							var cards = [];
							event.player.getHistory('lose', function(evt) {
								if (evt && evt.getParent('phaseDiscard') == event && evt.hs) cards.addArray(evt.hs);
							});
							return cards.length > 2;
						},
						content: function() {
							'step 0'
							player.chooseBool(get.prompt2('nsfzxys_ganran')).set('ai', function() {
								return get.attitude(player, trigger.player) < 0;
							});
							'step 1'
							if (result.bool) {
								player.logSkill('nsfzxys_ganran', trigger.player);
								player.addExpose(0.6);
								player.line(trigger.player);
								trigger.player.damage();
							}
						},
					},
					"nsfzxys_biyao": {
						enable: 'phaseUse',
						usable: 1,
						filter: function(event, player) {
							return player.canMoveCard(null, true);
						},
						filterTarget: function(card, player, target) {
							if (ui.selected.targets.length) {
								var from = ui.selected.targets[0];
								var es = from.getCards('e');

								for (var i = 0; i < es.length; i++) {
									if (target.isEmpty(get.subtype(es[i]))) return true;
								}
								return false;
							} else {
								return target.countCards('e') > 0;
							}
						},
						targetprompt: ['失去装备', '获得装备'],
						selectTarget: 2,
						multitarget: true,
						content: function() {
							'step 0'
							player.choosePlayerCard('e', "将" + get.translation(targets[0]) + "装备区内的一张牌移动给" + get.translation(targets[1]), true, function(button) {
								var player = _status.event.player;
								var targets0 = _status.event.targets0;
								var targets1 = _status.event.targets1;
								if (get.attitude(player, targets0) < 0 && get.attitude(player, targets1) > 0) {
									if (get.subtype(button.link) == 'equip2' && get.effect(targets1, button.link, player, player) > 0) {
										return 15 * get.effect(targets1, button.link, player, player);
									}
									if (get.value(button.link, targets0) > 0 && get.effect(targets1, button.link, player, player) > 0) {
										return get.value(button.link, targets0) * get.effect(targets1, button.link, player, player);
									}
									return get.value(button.link, targets0);
								} else {
									return get.value(button.link, targets0) * (10 - get.value(button.link, targets1));
								}
							}, targets[0]).set('targets0', targets[0]).set('targets1', targets[1]).set('filterButton', function(button) {
								return _status.event.targets1.isEmpty(get.subtype(button.link));
							});
							'step 1'
							if (result.bool && result.links.length) {
								var link = result.links[0];
								targets[0].$give(link, event.targets[1]);
								targets[1].equip(link);
								game.delay();
							}
							'step 2'
							if (targets[1] != player) {
								/*targets[0].useCard({
									name: 'sha',
									isCard: true
								}, targets[1], 'noai').animate = false;*/
								targets[1].damage(targets[0], 'nocard');
							}
							game.delay(0.5);
						},
						ai: {
							order: 8,
							result: {
								target: function(player, target) {
									var bool1 = false;
									var bool2 = false;
									var att = get.attitude(player, target);

									if (ui.selected.targets.length == 0) {
										var es = target.getCards('e');
										for (var i = 0; i < es.length; i++) {
											if (get.value(es[i], target) < 0) boo1 = true;
											if (get.value(es[i], target) > 0) boo2 = true;
										}
										if (bool1 && att > 0) return 11;
										return -10;
									} else {
										if (target == player) return 4;
										return get.damageEffect(target, ui.selected.targets[0], target);
									}
									return 0;
								},
							},
						},
						action_tag: {
							overall: 3,
							gain: 0.5,
							damage: 1,
						},
					},
					"nsfzxys_yixiang": {
						trigger: {
							player: 'damageBegin4',
						},
						init: function(player) {
							if (typeof player.storage.nsfzxys_yixiang !== 'boolean') player.storage.nsfzxys_yixiang = false;
						},
						filter: function(event, player) {
							return event.num > 0 && event.source;
						},
						direct: true,
						locked: true,
						content: function() {
							'step 0'
							event.sex = function() {
								return player.storage.nsfzxys_yixiang ? 'female' : 'male';
							};
							if (event.sex() == trigger.source.sex) {
								player.logSkill('nsfzxys_yixiang');
								player.draw(2);
								trigger.cancel();
								player.storage.nsfzxys_yixiang = !player.storage.nsfzxys_yixiang;
								game.log(player, "切换了", 'nsfzxys_yixiang', "的性别选项，当前为", event.sex(), "性");
								event.finish();
							} else {
								player.chooseBool("是否切换【臆想】的性别选项？").set('ai', function() {
									var enemy = _status.currentPhase;
									if (get.attitude(player, enemy) < 0) {
										var cards = enemy.getCards('h');
										for (var i = 0; i < cards.length; i++) {
											if (get.tag(cards[i], 'damage') && enemy.canUse(cards[i], player, true)) {
												return true;
											}
										}
									}

									var next = enemy.getNext();
									while (next && next != player && get.attitude(player, enemy) > 0) {
										next = next.getNext();
									}
									if (next != player && next.sex != event.sex()) return true;

									if (game.countPlayer(function(current) {
											return current.sex == event.sex() && get.attitude(player, current) < 0;
										}) < 1) return true;
									return false;
								});
							}
							'step 1'
							if (result.bool) {
								player.storage.nsfzxys_yixiang = !player.storage.nsfzxys_yixiang;
								game.log(player, "切换了", 'nsfzxys_yixiang', "的性别选项，当前为", event.sex(), "性");
							}
						},
						action_tag: {
							overall: 2.6,
							damage_prevent: 1,
							draw: 1,
						},
					},

					"nsfzxys_baojuan": {
						enable: 'phaseUse',
						usable: 1,
						skillAnimation: 'epic',
						animationColor: 'thunder',
						filterTarget: function(card, player, target) {
							return target != player;
						},
						selectTarget: -1,
						content: function() {
							'step 0'
							target.damage();
							'step 1'
							if (target.isIn()) {
								target.discardPlayerCard("是否弃置" + get.translation(player) + "的一张牌？", player, 'he', 1);
								//target.chooseBool().set('choice', get.attitude(target, player) < 0);
							}
						},
						ai: {
							threaten: 4,
							order: 1,
							result: {
								player: function(player) {
									var friends = game.countPlayer(function(current) {
										return current != player && get.attitude(player, current) > 0 && current.hp > 2;
									});
									var friends_danger = game.countPlayer(function(current) {
										return current != player && get.attitude(player, current) > 0 && current.hp < 3;
									});
									var enemies = game.countPlayer(function(current) {
										return current != player && get.attitude(player, current) < 0 && current.hp > 2;
									});
									var enemies_danger = game.countPlayer(function(current) {
										return current != player && get.attitude(player, current) < 0 && current.hp < 3;
									});

									return enemies_danger * 3 + enemies * 1.5 - friends_danger * 2 - friends * 1.5;
								},
							},
						},
					},
					"nsfzxys_gongshi": {
						inherit: "nsfzxys_losehp1",
						group: "nsfzxys_gongshi_2",
						action_tag: {
							overall: 1.5,
							loseHp_defend: 1,
							draw: 1.5,
							discard: 0.5
						},
					},
					"nsfzxys_gongshi_2": {
						trigger: {
							player: ["loseHpAfter"],
						},
						filter: function(event, player) {
							return event.num > 0;
						},
						direct: true,
						content: function() {
							'step 0'
							player.chooseTarget(1, get.prompt2('nsfzxys_gongshi'), function(card, player, target) {
								return target.hp != target.countCards('h');
							}).set('ai', function(target) {
								if (target == player) {
									return target.maxHp - target.countCards('h') > 0 ? 2 : 0;
								}
								if (target.hp == target.countCards('h')) return 0;
								if (get.attitude(player, target) > 0) {
									return target.hp - target.countCards('h') > 0 ? 1 / (target.countCards('h') + 1.1) + 1 : 0;
								} else if (get.attitude(player, target) == 0) {
									return 0;
								}

								var num = target.countCards('h') - target.hp;
								return num - 0.1;
							});
							'step 1'
							if (result.bool && result.targets.length) {
								var target = result.targets[0];
								var base = target == player ? target.maxHp : target.hp;

								var num = target.hp - target.countCards('h');
								var num2 = 1; //Math.min(Math.abs(num), 2);
								if (num > 0) {
									if (target == player) num2 += 1;
									target.draw(num2);
								} else if (num < 0) {
									player.discardPlayerCard(target, 'h', num2, true);
									//target.chooseToDiscard(num2, 'h', true);
								}
							}
						},
					},
					"nsfzxys_chuiniu": {
						trigger: {
							player: 'phaseUseBefore',
						},
						direct: true,
						content: function() {
							'step 0'
							var max = -1;
							for (var i = 0; i < game.players.length; i++) {
								if (game.players[i].isOut() || game.players[i] == player) continue;
								max = Math.max(max, game.players[i].countCards('h'));
							}
							player.chooseControl('一', '二', '三', 'cancel2').set('prompt', '吹牛：选择摸牌数，当前场上其他角色最高手牌数为' + max).set('ai', function() {
								var hs = player.countCards('h');
								if (hs == 0) return 2;
								if (max - hs >= 3) return 2;
								if (hs < max) return max - player.countCards('h') - 1;
								if (player.hp > 2 || player.countCards('h', 'tao') > 0 || (player.hp < 2 && player.countCards('h', 'jiu') > 0)) {
									return 2;
								}
								return 3;
							});
							'step 1'
							if (result.control != 'cancel2') {
								player.logSkill('nsfzxys_chuiniu');
								player.draw(result.index + 1);
								if (player.isMaxHandcard(true)) {
									player.chooseControl('失去体力', '跳过出牌阶段').set('prompt', '吹牛：失去一点体力或跳过出牌阶段').set('ai', function() {
										if (player.hp > 2 || player.countCards('h', 'tao') > 0 || (player.hp < 2 && player.countCards('h', 'jiu') > 0)) {
											return 0;
										}
										var hs = player.getCards('h');
										var count = 0;
										for (var i = 0; i < hs.length; i++) {
											if (player.getUseValue(hs[i]) > 4) count++;
										}
										if (count >= player.needsToDiscard() && player.hp > 1) return 0;
										return 1;
									});
								} else {
									event.finish();
								}
							} else {
								event.finish();
							}
							'step 2'
							if (result.index == 0) {
								player.loseHp();
							} else {
								trigger.cancel();
							}
						},
					},
					"nsfzxys_jianshang": {
						trigger: {
							player: ['phaseDiscardEnd'],
						},
						direct: true,
						filter: function(event, player) {
							var cards = [];
							event.player.getHistory('lose', function(evt) {
								if (evt && evt.getParent('phaseDiscard') == event && evt.hs) cards.addArray(evt.hs);
							});
							return cards.length > 0;
						},
						content: function() {
							'step 0'
							var cards = [];
							player.getHistory('lose', function(evt) {
								if (evt && evt.getParent('phaseDiscard') == trigger && evt.hs) cards.addArray(evt.hs);
							});
							event.cards = cards;
							player.chooseTarget('令一名其他角色成为【奸商】的对象', lib.filter.notMe).set('ai', function(target) {
								var att = get.attitude(player, target);
								var length = _status.event.cards.length;
								if (target.countCards('h') == 0 && att > 0) return 3 + att;
								if (length >= 3 && att > 0 && target.hp > 2) return target.hp + att;
								if (length <= 2 && target.countCards('h') > 1) return -att;
								if (target.hp < 2 && att < 0 && length <= 3 && target.countCards('h') > 1) return 2 - att;
								return 0;
							}).set('cards', cards);
							'step 1'
							if (result.bool) {
								event.target = result.targets[0];
								player.logSkill('nsfzxys_jianshang', event.target);
								player.line(event.target);
								player.chooseCardButton(event.cards, '吹牛：选择一张你于此阶段弃置的牌', true, 1).set('ai', function(button) {
									var target = _status.event.target;
									var att = get.attitude(player, target);
									var length = _status.event.cards.length;
									var val = get.value(button.link, target);

									if (target.countCards('h') == 0 && att > 0) return val + 10;
									if (length >= 3 && att > 0 && target.hp > 2) return 10 - val;
									if (length <= 2 && target.countCards('h') > 1) return 10 - val;
									if (target.hp < 2 && att < 0 && length <= 3 && target.countCards('h') > 1) return 5 + val;
									return val;
								}).set('target', event.target).set('cards', event.cards);
							} else {
								event.finish();
							}
							'step 2'
							if (result.bool && result.links.length) {
								event.card2 = result.links[0];
								event.cards.remove(event.card2);
								var value = 0;
								for (var i = 0; i < event.cards.length; i++) {
									value += get.value(event.cards[i], event.target);
								}

								var hs = event.target.countCards('h');
								if (hs > 0) {
									event.target.chooseToDiscard(Math.min(hs, 2), 'h').set('ai', function(card) {
										var val = get.value(card);
										if (event.target.hp < 2 && event.target.countCards('h', 'tao') == 0 && event.target.countCards('h', 'jiu') == 0) return 10 - val;
										if (value < 7 + get.value(event.card2)) return 7 - val;
										return 0;
									}).set('prompt', '是否弃置' + get.cnNumber(Math.min(hs, 2)) + '张手牌并获得' + get.translation(event.card2));
								} else {
									event.target.chooseBool().set('ai', function() {
										if (value < 7 + get.value(event.card2)) return true;
										return false;
									}).set('prompt', '是否获得' + get.translation(event.card2));
								}
							}
							'step 3'
							if (result.bool) {
								event.target.gain(event.card2, 'gain2');
								event.finish();
							} else {
								event.target.loseHp();
							}
							'step 4'
							if (event.target.isIn() && event.cards.length > 0) {
								event.target.gain(event.cards, 'gain2');
							}
						},
					},

					// FFF
					"nsfzxys_moxie": {
						enable: "phaseUse",
						usable: 1,
						filterTarget: function(card, player, target) {
							return player != target && target.countCards('h') > 0;
						},
						content: function() {
							'step 0'
							player.choosePlayerCard(target, 'h', 1, true, '展示' + get.translation(target) + '的一张手牌');
							'step 1'
							event.card = result.cards[0];
							target.showCards(event.card, get.translation(target) + '的一张手牌');
							game.delay(1.5);
							'step 2'
							if (!player.countCards('h')) {
								event.finish();
							} else {
								player.chooseToDiscard('h', '弃置一张牌来执行后续效果？', 1).set('ai', function(card) {
									var valt = get.value(_status.event.card2, _status.event.target);
									var valp = get.value(_status.event.card2, _status.event.player);
									var val = get.value(card);

									if (get.name(_status.event.card2) == 'du') {
										return 5.1 - val;
									} else if (valp > 0 && get.suit(card) == get.suit(_status.event.card2)) {
										return 9.1 + valp - val;
									} else if (get.color(card) == get.color(_status.event.card2)) {
										return 6.1 + valp - val;
									}
									return valt + 1 - val;
								}).set('card2', event.card).set('target', target);
							}
							'step 3'
							if (result.bool) {
								var cardx = result.cards[0];
								if (get.suit(cardx) == get.suit(event.card)) {
									player.gain(event.card, 'giveAuto', target);
								} else {
									target.discard(event.card, 'notBySelf', player);
								}
								if (get.color(cardx) == get.color(event.card)) {
									target.damage();
								}
							}
						},
						ai: {
							order: function(item, player) {
								var min = 15.1;
								var hs = player.getCards('h');
								for (var i = 0; i < hs.length; i++) {
									if (!get.tag(hs[i], 'draw')) continue;
									var name = get.name(hs[i]);
									var temp = get.order({
										name: name
									});
									min = Math.min(min, temp);
								}
								return min - 0.1;
							},
							result: {
								target: function(player, target) {
									var eff = get.damageEffect(target, player);
									if (target.hasSkillTag('nodamage')) return eff * 0.3;
									return eff;
								}
							}
						},
					},
					"nsfzxys_jilei": {
						trigger: {
							player: 'phaseDiscardBefore',
						},
						filter: function(event, player) {
							return player.countCards('h') > 0;
						},
						content: function() {
							'step 0'
							player.showHandcards();
							var suits = [];
							var hs = player.getCards('h');
							for (var i = 0; i < hs.length; i++) {
								suits.add(get.suit(hs[i]));
							}
							event.num = suits.length;
							var str1 = '摸' + get.cnNumber(event.num) + '张牌';
							var str2 = '手牌上限+' + event.num;
							player.chooseControl([str1, str2]).set('prompt', get.prompt2('nsfzxys_jilei')).set('ai', function() {
								if (_status.event.player.needsToDiscard()) return 1;
								return 0;
							})
							'step 1'
							if (result.index == 0) {
								player.draw(event.num);
							} else {
								player.addTempSkill('nsfzxys_jilei_maxHand');
							}
						},
						mod: {
							maxHandcardBase: function(player, num) {
								if (!player.hasSkill('nsfzxys_jilei_maxHand')) return num;
								var suits = [];
								var hs = player.getCards('h');
								for (var i = 0; i < hs.length; i++) {
									suits.add(get.suit(hs[i]));
								}
								return num + suits.length;
							},
						},
						subSkill: {
							maxHand: {
								charlotte: true,
							},
						},
					},
					"nsfzxys_zhouzhang": {
						trigger: {
							player: 'useCardToPlayered',
						},
						filter: function(event) {
							return event.card.name == 'sha';
						},
						logTarget: 'target',
						content: function() {
							'step 0'
							trigger.target.chooseTarget('周章：选择一名响应的其他角色', true, function(target) {
								return target != trigger.target;
							}).set('ai', function(target) {
								if (target == trigger.target) return -1;
								return get.attitude(target, trigger.target) * target.countCards('h');
							});
							'step 1'
							event.target2 = result.targets[0];
							trigger.target.line(event.target2);
							game.log(trigger.target, "选择了", event.target2);
							event.target2.chooseToRespond({
								name: 'shan'
							}).set('ai', function(card) {
								if (get.attitude(event.target2, trigger.target) <= 0) return 0;
								return 10 - get.useful(card);
							});
							'step 2'
							if (!result.bool) {
								trigger.getParent().directHit.push(trigger.target);
								//trigger.target.addTempSkill('nsfzxys_zhouzhang_shan', 'shaEnd');
							}
						},
						subSkill: {
							shan: {
								enable: ['chooseToUse'],
								filterCard: true,
								position: 'h',
								charlotte: true,
								sub: true,
								viewAs: {
									name: 'shan'
								},
								viewAsFilter: function(player) {
									if (player.countCards('h') < 1) return false;
								},
								prompt: '将一张手牌当闪使用',
								check: function(card) {
									return 7 - get.useful(card);
								},
								ai: {
									respondShan: true,
									skillTagFilter: function(player) {
										if (player.countCards('h') < 1) return false;
									},
								},
							},
						},
					},
					"nsfzxys_xiangrui": {
						trigger: {
							player: ['respond', 'useCard'],
							target: 'useCardToTargeted',
						},
						filter: function(event, player) {
							return get.suit(event.card) == 'heart';
						},
						frequent: true,
						content: function() {
							player.draw();
						},
						ai: {
							effect: {
								target: function(card, player, target) {
									if (get.suit(card) == 'heart') return [1.2, 0.8];
								},
								player: function(card, player, target) {
									if (get.suit(card) == 'heart') return [1.2, 1.2];
								}
							},
						},
						mod: {
							aiValue: function(player, card, num) {
								if (get.suit(card) == 'heart') {
									return num * 1.2;
								}
							},
							ignoredHandcard: function(card, player) {
								if (get.suit(card) == 'heart') {
									return true;
								}
							},
							cardDiscardable: function(card, player, name) {
								if (name == 'phaseDiscard' && get.suit(card) == 'heart') {
									return false;
								}
							},
						},
					},
					"nsfzxys_old_xiangrui": {
						group: ['nsfzxys_old_xiangrui_use', 'nsfzxys_old_xiangrui_target'],
						subfrequent: ['use'],
						subSkill: {
							use: {
								trigger: {
									player: ['respond', 'useCard']
								},
								filter: function(event, player) {
									return get.suit(event.card) == 'heart';
								},
								frequent: true,
								sub: true,
								content: function() {
									player.draw();
								},
							},
							target: {
								trigger: {
									target: 'useCardToTargeted',
								},
								filter: function(event, player) {
									return player != event.player && get.suit(event.card) == 'heart';
								},
								direct: true,
								sub: true,
								content: function() {
									'step 0'
									player.discardPlayerCard(trigger.player, '祥瑞：是否弃置' + get.translation(trigger.player) + '的一张牌？');
									'step 1'
									if (result.bool) {
										player.logSkill('nsfzxys_old_xiangrui', trigger.player);
									}
								},
							},
						},
						ai: {
							effect: {
								target: function(card, player, target) {
									if (get.suit(card) == 'heart') return [1.2, 0.8];
								},
								player: function(card, player, target) {
									if (get.suit(card) == 'heart') return [1.2, 1.2];
								}
							},
						},
						mod: {
							aiValue: function(player, card, num) {
								if (get.suit(card) == 'heart') {
									return num * 1.2;
								}
							},
						},
					},
					"nsfzxys_ninghan": {
						trigger: {
							player: 'phaseZhunbeiBegin',
						},
						filter: function(event, player) {
							return game.countPlayer(function(current) {
								return current != player && current.countCards('h') > 0;
							}) > 0;
						},
						direct: true,
						content: function() {
							'step 0'
							player.chooseTarget(1, '选择【凝含】的目标', function(card, player, target) {
								return target != player && target.countCards('h') > 0;
							}).set('ai', function(target) {
								return target.countCards('h') * -get.attitude(player, target);
							});
							'step 1'
							if (result.bool && result.targets.length) {
								event.target = result.targets[0];
								player.logSkill('nsfzxys_ninghan', event.target);
								player.line(event.target, 'red');
								//player.viewHandcards(event.target);
								event.forbid = false;
								event.discard = false;
								if (event.target.hp >= player.hp) event.forbid = true;
								if (event.target.countCards('h') > player.countCards('h')) event.discard = true;

								var str = "凝含：选择" + get.translation(event.target) + "的一张手牌";
								str += event.discard ? "弃置" : "展示";
								str += event.forbid ? "，其本回合不能使用同名牌" : "";

								var chooseButton = player.chooseButton(1, [str, event.target.getCards('h')]);
								chooseButton.set('target', event.target);
								chooseButton.set('ai', function(button) {
									var card = button.link;
									var val = get.value(card, event.target) || 1;
									return val;
								});
							} else {
								event.finish();
							}
							'step 2'
							if (result.bool) {
								var card = result.links[0];
								if (event.forbid) {
									event.target.storage.nsfzxys_ninghan_db = [card];
									event.target.addTempSkill('nsfzxys_ninghan_db');
								}
								if (event.discard) {
									event.target.discard(card, 'notBySelf');
								} else {
									event.target.showCards(result.links);
								}
							}
							'step 3'
							game.delay(1);
						},
					},
					"nsfzxys_ninghan_db": {
						mark: true,
						intro: {
							content: 'cards',
						},
						charlotte: true,
						locked: true,
						onremove: function(player) {
							delete player.storage.nsfzxys_ninghan_db;
						},
						mod: {
							cardEnabled2: function(card, player) {
								if (Array.isArray(player.storage.nsfzxys_ninghan_db) && player.storage.nsfzxys_ninghan_db.length > 0) {
									var name = get.name(player.storage.nsfzxys_ninghan_db[0]);
									if (get.name(card) == name) return false;
								}
							},
						},
					},

					// sp
					"nsfzxys_chongci": {
						trigger: {
							global: 'phaseUseBegin'
						},
						filter: function(event, player) {
							return !event.player.hasSkill('nsfzxys_chongci') && !event.player.hasSkill('nsfzxys_chongci_give');
						},
						locked: true,
						direct: true,
						content: function() {
							'step 0'
							player.chooseCard('h', 1, '是否交给' + get.translation(trigger.player) + '一张手牌令其获得【冲刺】的效果？').set('ai', function(card) {
								if (trigger.player.hasSkill('nsfzxys_bingdu_db') || get.attitude(player, trigger.player) < 1) return 0;
								if (trigger.player.countCards('h', 'sha') > 0) return 5 - get.value(card);
								if (trigger.player.countCards('h', 'sha') < 1 && get.name(card) == 'sha') return 6 - get.value(card);
								return 0;
							});
							'step 1'
							if (result.bool) {
								player.logSkill('nsfzxys_chongci', trigger.player);
								trigger.player.gain(result.cards, player, 'giveAuto');
								trigger.player.addTempSkill('nsfzxys_chongci_give');
								game.delay();
							}
						},
						group: 'nsfzxys_chongci_give',
						ai: {
							expose: 0.2,
						}
					},
					"nsfzxys_chongci_give": {
						trigger: {
							player: 'useCardToPlayered',
						},
						filter: function(event) {
							return event.card.name == 'sha';
						},
						forced: true,
						charlotte: true,
						silent: true,
						content: function() {
							var id = trigger.target.playerid;
							var map = trigger.getParent().customArgs;
							if (!map[id]) map[id] = {};
							if (typeof map[id].shanRequired == 'number') {
								map[id].shanRequired += 1;
							} else {
								map[id].shanRequired = 2;
							}
						},
						mod: {
							globalFrom: function(from, to, distance) {
								return distance - 1;
							},
							globalTo: function(from, to, distance) {
								return distance + 1;
							}
						},
					},
					"nsfzxys_jieli": {
						trigger: {
							global: 'shaHit'
						},
						filter: function(event, player) {
							if (!event.player) return false;
							return true;
						},
						direct: true,
						content: function() {
							'step 0'
							trigger.player.chooseBool('是否令' + get.translation(player) + '发动【借力】？').set('choice', get.attitude(trigger.player, player) >= 1);
							'step 1'
							if (result.bool) {
								player.logSkill('nsfzxys_jieli', trigger.player);
								player.draw();
							} else {
								event.finish();
							}
						},
					},
					"nsfzxys_chuangyi": {
						trigger: {
							global: ['useCard', 'respond'],
						},
						filter: function(event, player) {
							return event.card.name == 'shan' && (player.inRange(event.player) || event.player == player);
						},
						usable: 1,
						frequent: true,
						content: function() {
							player.draw();
						}
					},
					"nsfzxys_nilin": {
						trigger: {
							player: 'loseAfter',
							global: ['equipAfter', 'addJudgeAfter', 'gainAfter'],
						},
						filter: function(event, player) {
							if (player == _status.currentPhase) return false;
							if (event.name == 'gain' && event.player == player) return false;
							var evt = event.getl(player);
							return evt && evt.cards2 && evt.cards2.length > 0;
						},
						direct: true,
						intro: {
							content: '出牌阶段结束时受到#点伤害',
						},
						content: function() {
							'step 0'
							player.chooseTarget(1, '选择【逆鳞】的目标', function(card, player, target) {
								return target != player && get.distance(player, target) <= 1;
							}).set('ai', function(target) {
								var base = 1;
								if (target.hasSkillTag('nodamage')) {
									base *= 0.5;
								} else if (target.countMark('nsfzxys_nilin') > 0) {
									base *= 1.25;
								}
								if (target.hasSkill('baiban') || target.hasSkill('fengyin') || target.hasSkill('nsfzxys_gengzhi_db') || target.hasSkill('nsfzxys_forbid')) base *= 0.8;
								return base * -get.attitude(player, target);
							});
							'step 1'
							if (result.bool && result.targets.length) {
								event.target = result.targets[0];
								player.logSkill('nsfzxys_nilin', event.target);
								player.line(event.target, 'red');
								event.target.addTempSkill('baiban');
								event.target.chooseToRespond({
									name: 'shan'
								}).set('autochoose', lib.filter.autoRespondShan);

							} else {
								event.finish();
							}
							'step 2'
							if (!result.bool) {
								event.target.judge();
							} else {
								event.finish();
							}
							'step 3'
							if (result.color == 'black') {
								event.target.addMark('nsfzxys_nilin', 1);
							} else {
								event.target.addTempSkill('nsfzxys_forbid');
							}
						},
						ai: {
							effect: {
								target: function(card, player, target, current) {
									if (!target.hasFriend() && !player.hasUnknown()) return;
									if (_status.currentPhase == target) return;
									if (card.name != 'shuiyanqijunx' && get.tag(card, 'loseCard') && target.countCards('he')) {
										return [0.7, 1];
									}
									if (get.tag(card, 'respondSha') || get.tag(card, 'respondShan')) {
										if (get.attitude(player, target) > 0 && card.name == 'juedou') return;
										if (get.tag(card, 'damage') && target.hasSkillTag('maixie')) return;
										if (target.countCards('h') == 0) return 2;

										if (get.mode() == 'guozhan') return 0.5;
										return [0.7, Math.max(target.countCards('h') / 4, 1)];
									}
								}
							},
							threaten: function(player, target) {
								if (target.countCards('h') == 0) return 2;
								return 0.7;
							},
							nodiscard: true,
							nolose: true
						},
						group: 'nsfzxys_nilin_damage',
						subSkill: {
							damage: {
								trigger: {
									global: 'phaseUseEnd',
								},
								forced: true,
								sub: true,
								filter: function(event, player) {
									return game.countPlayer(function(current) {
										return current.countMark('nsfzxys_nilin') > 0;
									}) > 0;
								},
								content: function() {
									game.countPlayer(function(current) {
										var num = current.countMark('nsfzxys_nilin');
										if (num > 0) {
											current.damage('nosource', num);
											current.removeMark('nsfzxys_nilin', num);
											return true;
										}
										return false;
									});
								},
							},
						},
						mod: {
							globalFrom: function(from, to, distance) {
								return distance - from.getDamagedHp();
							}
						},
					},

					// x
					"nsfzxys_liangzi": {
						usable: 1,
						enable: ['chooseToUse', 'chooseToRespond'],
						filter: function(event, player) {
							if (player.countCards('h') > 1) return true;
							return false;
						},
						chooseButton: {
							dialog: function(event, player) {
								var list = [];
								for (var i = 0; i < lib.inpile.length; i++) {
									var name = lib.inpile[i];
									if (name == 'sha') {
										list.push(['基本', '', 'sha']);
										list.push(['基本', '', 'sha', 'fire']);
										list.push(['基本', '', 'sha', 'thunder']);
										list.push(['基本', '', 'sha', 'ice']);
									} else if (get.type(name) == 'trick') list.push(['锦囊', '', name]);
									else if (get.type(name) == 'basic') list.push(['基本', '', name]);
								}
								if (list.length == 0) {
									return ui.create.dialog('量子没有可用牌');
								}
								return ui.create.dialog('量子', [list, 'vcard']);
							},
							filter: function(button, player) {
								var evt = _status.event.getParent();
								//if (evt.type == 'wuxie') return true;
								return evt.filterCard({
									name: button.link[2]
								}, player, evt);
							},
							check: function(button) {
								var player = _status.event.player;
								if (player.countCards('h', button.link[2]) > 0) return 0;
								if (button.link[2] == 'wugu') return 0;
								var effect = player.getUseValue(button.link[2]) || 0.5;
								if (effect > 0) return effect;
								return 0;
							},
							backup: function(links, player) {
								return {
									filterCard: function(card, player) {
										if (ui.selected.cards.length > 0) {
											return get.color(card) == get.color(ui.selected.cards[0]);
										}
										var cards = player.getCards('h');
										for (var i = 0; i < cards.length; i++) {
											if (card != cards[i]) {
												if (get.color(card) == get.color(cards[i])) return true;
											}
										}
										return true;
									},
									selectCard: 2,
									popname: true,
									check: function(card) {
										return 6.1 - get.value(card);
									},
									position: 'h',
									viewAs: {
										name: links[0][2],
										nature: links[0][3]
									},
								}
							},
							hiddenCard: function(player, name) {
								if (player.countCards('h') < 2) return false;
								var num = player.getStat().skill.nsfzxys_liangzi;
								if (!num) return name == 'wuxie';
							},
							prompt: function(links, player) {
								return '将两张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用或打出';
							}
						},
						hiddenCard: function(player, name) {
							if (player.countCards('h') < 2) return false;
							var num = player.getStat().skill.nsfzxys_liangzi;
							if (!num) return name == 'wuxie';
						},
						ai: {
							save: true,
							respondSha: true,
							respondShan: true,
							skillTagFilter: function(player) {
								if (player.countCards('h') < 2) return false;
							},
							order: 4,
							result: {
								player: function(player) {
									var allshown = true,
										players = game.filterPlayer();
									for (var i = 0; i < players.length; i++) {
										if (players[i].ai.shown == 0) {
											allshown = false;
										}
										if (players[i] != player && players[i].countCards('h') && get.attitude(player, players[i]) > 0) {
											return 1;
										}
									}
									if (allshown) return 1;
									return 0;
								}
							},
							threaten: 1.9,
						},

					},
					"nsfzxus_yuanshi": {
						trigger: {
							target: 'useCardToTarget',
						},
						filter: function(event, player) {
							if (player == event.player) return false;
							if (player.hp < 1) return false;

							var card = event.card;
							if (get.type(card, 'trick') == 'trick') return true;
							return false;
						},
						prompt: function(event, player) {
							return '是否失去一点体力并取消【' + get.translation(event.card) + '】？';
						},
						check: function(event, player) {
							if (event.getParent().excluded.contains(player)) return false;
							if (get.tag(event.card, 'respondSha')) {
								if (player.countCards('h', {
										name: 'sha'
									}) == 0) {
									return true;
								}
							} else if (get.tag(event.card, 'respondShan')) {
								if (player.countCards('h', {
										name: 'shan'
									}) == 0) {
									return true;
								}
							} else if (get.tag(event.card, 'damage')) {
								if (player.countCards('h') < 2) return true;
							}
							return false;
						},
						content: function() {
							'step 0'
							player.loseHp(1);
							player.addTempSkill('nsfzxus_yuanshi_af');
							'step 1'
							if (!event.isMine()) game.delayx();
							trigger.getParent().targets.remove(player);
							trigger.getParent().triggeredTargets2.remove(player);
							game.delay();
						},
						ai: {
							threaten: 0.6,
						},
						action_tag: {
							overall: 4,
							loseHp_defend: true,
							reuse: 2,
						}
					},
					"nsfzxus_yuanshi_af": {
						trigger: {
							global: ["loseAfter", "cardsDiscardAfter"],
						},
						forced: true,
						charlotte: true,
						filter: function(event, player) {
							var cards = (event.cards2 || event.cards);
							if (!cards) return false;
							if (event.name == 'lose') {
								if (event.type != 'discard' || event.player == player) return false;
							} else {
								var evt = event.getParent();
								if (evt.name != 'orderingDiscard' || !evt.relatedEvent || evt.relatedEvent.player == player || !['useCard', 'respond'].contains(evt.relatedEvent.name)) return false;
							}

							for (var i = 0; i < cards.length; i++) {
								if (get.type(cards[i], 'trick') == 'trick' && (get.position(cards[i], true) == 'd')) return true;
							}
							return false;
						},
						content: function() {
							'step 0'
							event.cards = [];
							var cards = trigger.cards2 || trigger.cards;
							for (var i = 0; i < cards.length; i++) {
								if (get.type(cards[i], 'trick') == 'trick' && get.position(cards[i], true) == 'd') event.cards.push(cards[i]);
							}
							'step 1'
							player.gain(event.cards, 'gain2');
						},
						mod: {
							targetEnabled: function(card, player, target) {
								if ((get.type2(card) == 'trick') && player != target) return false;
							},
						},
					},

					// god
					"nsfzxys_shulun": {
						init: function(player) {
							if (!player.storage.nsfzxys_shulun) player.storage.nsfzxys_shulun = [];
						},
						mark: true,
						marktext: '数',
						intro: {
							mark: function(dialog, storage, player, skill) {
								if (player.hasSkill('nsfzxys_shulun_used')) return "【数论】本阶段不可以再发动";
								if (player.storage.nsfzxys_shulun && player.storage.nsfzxys_shulun.length > 0) {
									dialog.addAuto(player.storage.nsfzxys_shulun);
								}
								return "【数论】可以发动";
							},
						},
						enable: 'phaseUse',
						filter: function(event, player) {
							return player.countCards('h') > 0 && !player.hasSkill('nsfzxys_shulun_used');
						},
						filterCard: true,
						position: 'h',
						selectCard: [1, 1],
						check: function(card) {
							var player = _status.currentPhase;
							var num = get.number(card);
							if (player.storage.nsfzxys_shulun.length < 1 && (nsfzxys_isPrime(num))) return 8.1 - get.value(card);
							return 5.1 - get.value(card);
						},
						content: function() {
							'step 0'
							var num = get.number(cards[0]);
							if (!nsfzxys_isPrime(num)) player.addTempSkill('nsfzxys_shulun_used', 'phaseUseEnd');

							event.cards = get.cards(2);
							game.cardsGotoOrdering(event.cards);
							player.showCards(event.cards);
							if (nsfzxys_findGCD(get.number(event.cards[0]), get.number(event.cards[1])) != 1) {
								event.goto(6);
							}
							'step 1'
							player.chooseTarget(1, '选择造成一点伤害的目标', lib.filter.notMe, true).set('ai', function(target) {
								if (get.attitude(player, target) > 0 && !target.hasSkillTag('nodamage')) return -1;
								var base = player.storage.nsfzxys_shulun.contains(target) ? 1 : 0;
								return base + Math.abs(get.attitude(player, target));
							});
							'step 2'
							event.target = result.targets[0];
							player.chooseButton(['选择要获得的牌，并将剩下的交给目标', event.cards], [0, 2], true).set('ai', function(button) {
								var card = button.link;
								if (ui.selected.cards.length > 0 && player.storage.nsfzxys_shulun.length == 0 && !player.hasSkill('nsfzxys_shulun_used')) return 0;
								var val = get.value(card);
								return val;
							});
							'step 3'
							player.logSkill('nsfzxys_shulun', event.target);
							event.target.damage('nocard');
							'step 4'
							if (result.links && result.links.length == 2) {
								player.gain(event.cards, 'gain2');
								player.addTempSkill('nsfzxys_shulun_used', 'phaseUseEnd');
							} else if (!result.links || result.links.length == 0) {
								if (event.target.isIn()) {
									event.target.gain(event.cards, 'gain2');
									player.addTempSkill('nsfzxys_shulun_used', 'phaseUseEnd');
								}
							} else {
								event.cards.remove(result.links[0]);
								player.gain(result.links[0], 'gain2');

								if (event.target.isIn()) {
									event.target.gain(event.cards, 'gain2');
									if (player.storage.nsfzxys_shulun.length > 0) { // contains(event.target)
										player.addTempSkill('nsfzxys_shulun_used', 'phaseUseEnd');
									} else {
										player.storage.nsfzxys_shulun.push(event.target);
									}
								}
							}
							'step 5'
							game.delay();
							event.finish();
							'step 6'
							player.chooseTarget(1, '令一名角色获得' + get.translation(event.cards), true).set('ai', function(target) {
								return (get.attitude(player, target)) / (target.hp * 2 + target.countCards('h') + 1);
							});
							'step 7'
							result.targets[0].gain(event.cards, 'gain2');
							player.addTempSkill('nsfzxys_shulun_used', 'phaseUseEnd');
						},
						subSkill: {
							used: {
								onremove: function(player, storage) {
									player.storage.nsfzxys_shulun = [];
								},
								charlotte: true,
								locked: true,
								ondisable: true,
							},
						},
						ai: {
							order: 10,
							threaten: 1.5,
							expose: 0.1,
							result: {
								player: function(player) {
									return 10;
								},
							},
						},
					},
					"nsfzxys_tianji": {
						inherit: "nsfzxys_losehp2",
						group: 'nsfzxys_tianji_2',
						action_tag: {
							overall: 5,
							draw: 1.5,
							loseHp_defend: 2,
						},
					},
					"nsfzxys_tianji_2": {
						direct: true,
						trigger: {
							player: ["loseHpAfter"],
						},
						filter: function(event, player) {
							return event.num > 0;
						},
						content: function() {
							'step 0'
							event.count = trigger.num;
							'step 1'
							player.chooseControl(['选项一', '选项二', 'cancel2'], function() {
								return ['选项一', '选项二'].randomGet();
							}).set('prompt', get.prompt("nsfzxys_tianji")).set('choiceList', [
								'展示并获得牌堆顶的牌，直至出现点数大于7的牌',
								'展示并获得牌堆顶的牌，直至出现点数小于7的牌',
							]);
							'step 2'
							event.cards = [];
							event.ongoing = true;
							event.val = 0;
							event.count--;
							if (result.control == '选项一') {
								game.log(get.translation(player), '选择了点数大于7');
								player.popup("大于7");
								event.type = 1;
							} else if (result.control == '选项二') {
								game.log(get.translation(player), '选择了点数小于7');
								player.popup("小于7");
								event.type = 2;
							} else {
								event.finish();
							}
							'step 3'
							if (event.ongoing) {
								var card2 = get.cards(1)[0];
								event.cards.add(card2);
								event.val += get.value(card2, player);

								player.showCards(event.cards);
								game.cardsGotoOrdering(card2);
								if (get.number(card2) > 7 && event.type == 1) {
									event.ongoing = false;
								} else if (get.number(card2) < 7 && event.type == 2) {
									event.ongoing = false;
								} else {
									game.delay(1);
									event.redo();
								}
							}
							'step 4'
							player.chooseToDiscard(1, 'he', "是否弃置一张牌并获得：" + get.translation(event, cards) + "？").set('ai', function(card) {
								return event.val - get.value(card);
							});
							'step 5'
							if (result.bool) {
								player.gain(event.cards, 'gain2');
							}
							//if (event.count > 0) event.goto(1);
						},
					},
					"nsfzxys_tianxuan": {
						trigger: {
							player: "judge",
						},
						direct: true,
						content: function() {
							'step 0'
							event.videoId = lib.status.videoId;
							player.chooseBool('是否令' + get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定对该角色有利？').set('ai', function() {
								return get.attitude(player, trigger.player) > 1;
							});
							'step 1'
							if (result.bool) {
								player.logSkill('nsfzxys_tianxuan', trigger.player);
								var card = trigger.player.judging[0];
								if (card) {
									var max = Math.max(0, trigger.judge(card));

									for (var i = 0; i < ui.cardPile.childElementCount; i++) {
										var card2 = ui.cardPile.childNodes[i];
										max = Math.max(max, trigger.judge(card2));
									}
									for (var i = 0; i < ui.discardPile.childElementCount; i++) {
										var card2 = ui.discardPile.childNodes[i];
										max = Math.max(max, trigger.judge(card2));
									}

									var judgenum = max;
									var node;
									if (game.chess) {
										node = card.copy('thrown', 'center', ui.arena).animate('start');
									} else {
										node = trigger.player.$throwordered(card.copy(), true);
									}
									trigger.cancel();
									trigger.result = {
										card: card,
										judge: judgenum,
										node: node,
										number: get.number(card),
										suit: get.suit(card),
										color: get.color(card),
										bool: true,
									};
									if (max > 0) trigger.player.popup('洗具');
									trigger.direct = true;
									game.delay(2);
								}
							} else {
								event.finish();
							}
							'step 2'
							trigger.player.draw();
							ui.arena.classList.remove('thrownhighlight');
							while (ui.dialogs.length > 0) {
								ui.dialogs[0].close();
							}
							trigger.result.node.delete();
							ui.clear();
						},
						ai: {
							threaten: 1.5,
							effect: {
								target: function(card, player, target, current) {
									if (get.type(card) == 'delay' && target.hasSkill('nsfzxys_tianxuan')) return 0;
								},
							},
						},
					},
					"nsfzxys_shenyin": {
						trigger: {
							player: ['phaseJieshuBegin'],
							global: 'gameDrawAfter',
						},
						init: function(player) {
							if (!player.storage.nsfzxys_shenyin) player.storage.nsfzxys_shenyin = [];
						},
						marktext: "音",
						intro: {
							content: 'cards',
							onunmark: function(storage, player) {
								if (storage && storage.length) {
									player.$throw(storage, 1000);
									game.cardsDiscard(storage);
									game.log(storage, '被置入了弃牌堆');
									storage.length = 0;
								}
							},
						},
						prompt: '是否发动【神音】？',
						prompt2: function(event, player) {
							var num = Math.max(Math.ceil(game.countPlayer() / 2), 2);
							if (event.name != 'phaseJieshu') num = 2;
							return '摸' + get.cnNumber(num) + '张牌并将' + get.cnNumber(num) + '张手牌置于武将牌上';
						},
						//ondisable: true,
						onremove: function(player) {
							if (player.storage.nsfzxys_shenyin.length) {
								player.$throw(player.storage.nsfzxys_shenyin, 1000);
								game.log(player.storage.nsfzxys_shenyin, '被置入了弃牌堆');
								game.cardsDiscard(player.storage.nsfzxys_shenyin);
								player.storage.nsfzxys_shenyin = [];
								player.unmarkSkill('nsfzxys_shenyin');
							}
						},
						content: function() {
							'step 0'
							var num = Math.max(Math.ceil(game.countPlayer() / 2), 2);
							if (trigger.name != 'phaseJieshu') num = 2;
							if (num > 2 || game.countPlayer() < 3) player.turnOver();
							player.draw(num);
							player.chooseCard(num, '将' + get.cnNumber(num) + '张手牌置于武将牌上作为“神音”', true).set('ai', function(card) {
								var base = get.color(card) == 'red' ? 10 : 8;
								return base - get.value(card)
							});
							'step 1'
							if (result.bool && result.cards.length) {
								player.lose(result.cards, ui.special, 'toStorage');
								player.storage.nsfzxys_shenyin = player.storage.nsfzxys_shenyin.concat(result.cards);
								player.syncStorage('nsfzxys_shenyin');
								player.markSkill('nsfzxys_shenyin');
								game.log(player, '将', result.cards, '置于武将牌上');
							}
						},
						group: ["nsfzxys_shenyin_2", "nsfzxys_shenyin_gain"],
						subSkill: {
							gain: {
								trigger: {
									player: 'phaseZhunbeiBegin'
								},
								filter: function(event, player) {
									return player.storage.nsfzxys_shenyin && player.storage.nsfzxys_shenyin.length > 0;
								},
								forced: true,
								sub: true,
								content: function() {
									player.gain(player.storage.nsfzxys_shenyin.slice(0), 'gain2', 'log', 'fromStorage');
									player.storage.nsfzxys_shenyin = [];
									player.syncStorage('nsfzxys_shenyin');
									player.unmarkSkill('nsfzxys_shenyin');
								}
							},
						},
						ai: {
							threaten: 8,
						},
					},
					"nsfzxys_shenyin_2": {
						trigger: {
							global: "damageBegin3",
						},
						filter: function(event, player) {
							if (!player.storage.nsfzxys_shenyin || player.storage.nsfzxys_shenyin.length < 1) return false;
							return event.source && event.source != event.player && event.source.isAlive() && event.player.isAlive() && event.num > 0;
						},
						direct: true,
						content: function() {
							'step 0'
							var att1 = get.attitude(player, trigger.player);
							var att2 = get.attitude(player, trigger.source);
							var str = get.translation(trigger.player) + '即将受到' + get.translation(trigger.source) + '造成的' + trigger.num + '点伤害，是否发动【神音】？';
							player.chooseCardButton(str, player.storage.nsfzxys_shenyin).set('ai', function(button) {
								var card = button.link;
								if (att1 > 1 && att2 <= 0 && get.color(card) == 'red') return 100 - get.value(card);
								if (att1 < 0 && att2 > 1 && get.color(card) == 'black') return 100 - get.value(card);
								return 0;
							});
							'step 1'
							if (result.bool) {
								event.type = get.color(result.links[0]) == 'red' ? 1 : -1;
								event.target = get.color(result.links[0]) == 'red' ? trigger.player : trigger.source;

								player.logSkill('nsfzxys_shenyin', event.target);
								player.line(event.target, 'green');
								player.$throw(result.links, 1000);
								player.storage.nsfzxys_shenyin.remove(result.links[0]);
								game.cardsDiscard(result.links[0]);
								player.syncStorage('nsfzxys_shenyin');

								if (player.storage.nsfzxys_shenyin.length < 1) {
									player.unmarkSkill('nsfzxys_shenyin');
								} else {
									player.markSkill('nsfzxys_shenyin');
								}

								event.target.judge(function(card) {
									if (get.color(card) == 'red' && event.type > 0) return 1;
									if (get.color(card) == 'black' && event.type < 0) return 1;
									return 0;
								});
							} else {
								event.finish();
							}
							'step 2'
							if (event.type == 1) {
								if (result.bool) {
									trigger.num--;
								} else {
									trigger.source.chooseToDiscard(2, true, 'he');

								}
							} else {
								if (result.bool) {
									trigger.num++;
								} else {
									trigger.source.draw(2);
								}
							}
							player.addExpose(0.3);
							//ui.clear();
						},
					},
					"nsfzxys_jianmo": {
						mark: true,
						marktext: "模",
						intro: {
							name: '建模',
							mark: function(dialog, storage, player, skill) {
								if (player.storage.nsfzxys_jianmo) {
									dialog.addAuto([player.storage.nsfzxys_jianmo]);
									return get.translation(player.additionalSkills.nsfzxys_jianmo[0]) + "：" + get.translation(player.additionalSkills.nsfzxys_jianmo[0] + '_info');
								}
							},
						},
						trigger: {
							player: ['phaseBefore', 'phaseAfter'],
							global: ['gameStart', 'dieAfter']
						},
						filter: function(event, player) {
							return true;
						},
						unique: true,
						fixed: true,
						superCharlotte: true,
						charlotte: true,
						forced: true,
						zero: true,
						filter: function(event, player) {
							if (event.name == 'die') return (player.storage.nsfzxys_jianmo && player.storage.nsfzxys_jianmo == event.player);
							return true;
						},
						content: function() {
							'step 0'
							var bool = false;
							if (trigger.name == 'die') bool = true;
							player.chooseTarget(get.prompt2('nsfzxys_jianmo'), bool, function(card, player, target) {
								return target != player && target.getSkills(true, false, true).length > 0;
							}).set('ai', function(target) {
								if (get.attitude(_status.event.player, target) > 1) return 0;
								var skills = target.getSkills(true, false, true);
								var skills2 = target.getOriginalSkills();
								for (var i = 0; i < skills2.length; i++) {
									if (lib.skill[skills2[i]]) {
										skills.add(skills2[i]);
									}
								}
								for (var i = 0; i < skills.length; i++) {
									var index = skills[i].indexOf('_');
									if (index == 0 || get.translation(skills[i]) == skills[i]) {
										skills.splice(i--, 1);
									} else {
										var info = get.info(skills[i]);
										if (info.charlotte || info.debuff || player.hasSkill(skills[i]) || info.zhuSkill || info.juexingji) {
											skills.splice(i--, 1);
										}
									}
								}
								var max = 0;
								var cond = 'out';
								if (_status.event.triggername == 'phaseBegin') {
									cond = 'in';
								}
								for (var i = 0; i < skills.length; i++) {
									var rank = get.skillRank(skills[i], cond);
									if (typeof rank == 'number') max = Math.max(rank, max);
								}
								return (-get.attitude(_status.event.player, target) * max + max);
							}).set('triggername', trigger.name);
							'step 1'
							if (result.bool) {
								event.had = true;
								var target = result.targets[0];

								event.target = target;
								event.skills = target.getOriginalSkills();
								var skills2 = target.getSkills(true, false, true);
								for (var i = 0; i < skills2.length; i++) {
									if (lib.skill[skills2[i]]) {
										event.skills.add(skills2[i]);
									}
								}

								for (var i = 0; i < event.skills.length; i++) {
									var index = event.skills[i].indexOf('_');
									if (index == 0 || get.translation(event.skills[i]) == event.skills[i]) {
										event.skills.splice(i--, 1);
									} else {
										var info = get.info(event.skills[i]);
										if (!info || info.charlotte || info.debuff || info.zhuSkill || info.juexingji) {
											event.skills.splice(i--, 1);
										}
									}
								}
							} else {
								event.finish();
							}
							'step 2'
							if (event.skills.length < 1) {
								ui.create.dialog('无可获得技能');
								game.delay(2);
								event.finish();
							}
							'step 3'
							event.videoId = lib.status.videoId++;
							var func = function(id, list) {
								var choiceList = ui.create.dialog('选择任意一个技能并获得，或点取消返回目标选择');
								choiceList.videoId = id;
								for (var i = 0; i < list.length; i++) {
									var str = '<div class="popup text" style="width:calc(100% - 10px);display:inline-block">';
									str += get.translation(list[i]);
									str += '</div>';
									var next = choiceList.add(str);
									next.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
									next.firstChild.link = i;
									for (var j in lib.element.button) {
										next[j] = lib.element.button[i];
									}
									choiceList.buttons.add(next.firstChild);
								}
								return choiceList;
							};
							event.dialog = func(event.videoId, event.skills);
							if (player != game.me || _status.auto) {
								event.dialog.style.display = 'none';
							}
							var next = player.chooseButton();
							next.set('dialog', event.videoId);
							next.set('selectButton', 1);
							next.set('ai', function(button) {
								var player = _status.event.player;
								var skill2 = _status.event.skills[button.link];

								var length = _status.event.skills.length;
								var cond = 'out';
								if (_status.event.triggername == 'phaseBegin') {
									cond = 'in';
								}
								var rank = get.skillRank(skill2, cond);
								if (rank) {
									return rank;
								} else {
									if (length == 1) {
										return 1;
									} else if (length <= 3 && button.link == 2) {
										return length;
									}
								}
								return Math.floor(Math.random() * length);
							});
							next.set('skills', event.skills);
							next.set('triggername', trigger.name);
							'step 4'
							event.dialog.close();
							if (result.bool) {
								player.removeAdditionalSkill('nsfzxys_jianmo');
								if (player.storage.nsfzxys_jianmo) player.storage.nsfzxys_jianmo.removeSkill('nsfzxys_jianmo_af');
								event.target.removeSkill('nsfzxys_jianmo_af');

								var index = result.links[0];
								event.skill2 = event.skills[index];
								//player.storage.nsfzxys_jianmo_skill = event.skill2;
							} else {
								event.goto(0);
							}
							'step 5'
							game.log(player, '获得了技能', '#g【' + get.translation(event.skill2) + '】');
							player.addExpose(0.2);
							player.addAdditionalSkill('nsfzxys_jianmo', event.skill2);
							player.storage.nsfzxys_jianmo = event.target;
							event.target.storage.nsfzxys_jianmo_skill = event.skill2;
							event.target.storage.nsfzxys_jianmo_source = player;
							event.target.addSkill('nsfzxys_jianmo_af');
						},
						ai: {
							threaten: 2,
						},
					},
					"nsfzxys_jianmo_af": {
						init: function(player, skill) {
							player.removeSkill(player.storage.nsfzxys_jianmo_skill);
							//player.disableSkill(skill, player.storage.nsfzxys_jianmo_skill);
						},
						onremove: function(player, skill) {
							player.addSkill(player.storage.nsfzxys_jianmo_skill);
						},
						mark: true,
						marktext: "模",
						intro: {
							content: function(storage, player, skill) {
								return '失去了以下技能：' + get.translation(player.storage.nsfzxys_jianmo_skill);

								var list = [];
								for (var i in player.disabledSkills) {
									if (player.disabledSkills[i].contains(skill)) list.push(i);
								};
								if (list.length) {
									var str = '失效技能：';
									for (var i = 0; i < list.length; i++) {
										if (lib.translate[list[i] + '_info']) str += get.translation(list[i]) + '、';
									};
									return str.slice(0, str.length - 1);
								};
							},
						},
						trigger: {
							global: 'dieAfter'
						},
						charlotte: true,
						forced: true,
						silent: true,
						popup: false,
						forceDie: true,
						filter: function(event, player) {
							return (player.storage.nsfzxys_jianmo_source == event.player);
						},
						content: function() {
							player.removeSkill('nsfzxys_jianmo_af');
						},
					},
					"nsfzxys_tianshu": {
						trigger: {
							player: ["damageBefore", "turnOverBefore"]
						},
						mark: true,
						marktext: "枢",
						intro: {
							mark: function(dialog, content, player) {
								if (player != game.me) return '观看牌堆顶三张牌';
								if (get.itemtype(_status.pileTop) != 'card') return '牌堆顶无牌';

								var cards = [];
								for (var i = 0; i < Math.min(3, ui.cardPile.childNodes.length); i++) {
									var currentcard = ui.cardPile.childNodes[i];
									currentcard.vanishtag.length = 0;
									if (get.info(currentcard).vanish || currentcard.storage.vanish) {
										currentcard.remove();
										continue;
									}
									cards.push(currentcard);
								}
								dialog.add(cards); //add([_status.pileTop]);
							},
						},
						firstDo: true,
						forced: true,
						fixed: true,
						superCharlotte: true,
						charlotte: true,
						zero: true,
						filter: function(event, player) {
							if (event.name == 'turnOver') {
								return !player.isTurnedOver()
							} else if (event.name != 'damage') return true;
							return (!event.card || !event.cards || !(event.card.isCard) || event.nocard || event.skill);
						},
						content: function() {
							trigger.cancel();
						},
						ai: {
							nodamage: true,
							noturn: true,
						},
					},
					"nsfzxys_sanlian": {
						trigger: {
							player: 'phaseZhunbeiBegin'
						},
						direct: true,
						locked: true,
						content: function() {
							'step 0'
							if (player.isMinHp()) {
								player.chooseBool(get.prompt('nsfzxys_sanlian'), '准备开始时，你可以摸三张牌，然后失去一点体力。').set('ai', function() {
									if (player.hp > 1) return true;
									if (!player.hasFriend() || player.hasCard('h', 'tao') || player.hasCard('h', 'jiu')) return true;
									return false;
								});
							} else {
								event.forced = true;
							}
							'step 1'
							if (event.forced || result.bool) {
								player.logSkill('nsfzxys_sanlian');
								player.draw(3);
							} else {
								event.finish();
							}
							'step 2'
							player.loseHp();
							'step 3'
							//if (player.countCards('j') > 0) player.discard(player.getCards('j'));
							player.addTempSkill('nsfzxys_sanlian_af');
						},
						ai: {
							threaten: 1.5,
							effect: {
								target: function(card, player, target, current) {
									if (get.type(card) == 'delay' && target.hasSkill('nsfzxys_sanlian') && target.hp > 1) return 0.1;
								},
							},
						}
					},
					"nsfzxys_sanlian_af": {
						trigger: {
							player: ['phaseDiscardBefore', 'phaseJudgeBefore']
						},
						forced: true,
						charlotte: true,
						popup: false,
						content: function() {
							trigger.cancel();
						},
						mod: {
							targetInRange: function(card, player, target) {
								return true;
							},
							cardUsable: function(card, player, num) {
								if (card.name == 'sha') return num + 0;
							},
						},
					},
					"nsfzxys_yaoguang": {
						trigger: {
							player: ['respond', 'useCard']
						},
						filter: function(event, player) {
							return event.card.name == 'sha';
						},
						frequent: true,
						content: function() {
							player.draw();
						},
						ai: {
							effect: {
								target: function(card, player, target) {
									if (get.tag(card, 'respondSha')) {
										var hs = target.countCards('h');
										if (hs > 2) return [0.5, 0.5];
										if (hs > 0) return [1, 0.5];
										return [1, 1];
									}
								}
							},
							threaten: 0.8,
						}
					},
					"nsfzxys_chehuo": {
						trigger: {
							player: 'die'
						},
						forced: true,
						skillAnimation: 'epic',
						animationColor: 'metal',
						forceDie: true,
						filter: function(event, player) {
							return event.source && event.source.isIn();
						},
						content: function() {
							player.line(trigger.source, 'red');
							trigger.source.addSkill('nsfzxys_chehuo_db');
						},
					},
					"nsfzxys_chehuo_db": {
						trigger: {
							player: 'phaseJieshu'
						},
						init: function(player) {
							if (!player.storage.nsfzxys_chehuo_db) player.storage.nsfzxys_chehuo_db = 1;
						},
						intro: {
							content: '在下一个结束阶段受到#点雷电伤害'
						},
						mark: true,
						forced: true,
						charlotte: true,
						debuff: true,
						content: function() {
							'step 0'
							player.damage(player.storage.nsfzxys_chehuo_db, 'nosource', 'nocard', 'thunder');
							'step 1'
							player.storage.nsfzxys_chehuo_db++;
							player.markSkill('nsfzxys_chehuo_db');
						}
					},
					"nsfzxys_fuqi": {
						trigger: {
							player: 'damageBefore'
						},
						filter: function(event, player) {
							if (!event.source || !event.source.isIn() || event.source.hp > player.hp) return player.countCards('he') >= player.hp;
							return false;
						},
						direct: true,
						content: function() {
							'step 0'
							player.chooseToDiscard('是否弃置' + get.cnNumber(player.hp) + '张牌来取消此伤害？', 'he', player.hp).set('ai', function(card) {
								if (player.hp > trigger.num) return 0;
								return 10 - get.value(card);
							});
							'step 1'
							if (result.bool) {
								player.logSkill('nsfzxys_fuqi');
								trigger.cancel();
							}
						},
						ai: {
							effect: {
								target: function(card, player, target) {
									if (get.tag(card, 'damage')) {
										if (player.hp > target.hp && target.countCards('he') > 0) return 0.3;
										if (player.hp <= target.hp || target.countCards('he')) return [3, 1];
									}
									return 1;
								},
							},
						},
					},
					"nsfzxys_yuheng": {
						mod: {
							maxHandcardFinal: function(player, num) {
								var max = num;
								var targets = game.filterPlayer(function(current) {
									max = Math.max(max, current.hp);
									return !current.hasSkill('nsfzxys_yuheng');
								});
								return max;
							},
						},
						trigger: {
							player: 'phaseDrawBegin1',
						},
						forced: true,
						firstDo: true,
						content: function() {
							'step 0'
							trigger.num = Math.max(trigger.num, (player.getHandcardLimit() - player.countCards('h')));
							trigger.numFixed = true;
						},
					},
					"nsfzxys_guwu": {
						trigger: {
							global: 'useCardToTargeted'
						},
						init: function(player) {
							if (!player.storage.nsfzxys_guwu) player.storage.nsfzxys_guwu = {};
						},
						filter: function(event, player) {
							return event.isGuwu;
						},
						check: function(event, player) {
							return get.attitude(player, event.target) > 0;
						},
						logTarget: 'target',
						content: function() {
							'step 0'
							player.draw();
							if (trigger.target != player) {
								player.chooseCard(true, 'he', '交给' + get.translation(trigger.target) + '一张牌').set('ai', function(card) {
									if (get.position(card) == 'e') return -1;
									if (card.name == 'shan') return 1;
									if (get.type(card) == 'equip') return 0.5;
									return 0;
								});
							} else {
								event.finish();
							}
							'step 1'
							trigger.target.gain(result.cards, player, 'giveAuto');
							game.delay();
						},
						group: ['nsfzxys_guwu_record', 'nsfzxys_guwu_reset'],
						subSkill: {
							record: {
								trigger: {
									global: 'useCardToTargeted'
								},
								forced: true,
								sub: true,
								silent: true,
								popup: false,
								charlotte: true,
								firstDo: true,
								filter: function(event, player) {
									return event.player != event.target && event.card && get.tag(event.card, 'damage');
								},
								content: function() {
									'step 0'
									if (!player.storage.nsfzxys_guwu) player.storage.nsfzxys_guwu = {};
									var name = trigger.target.name;
									if (get.mode == 'guozhan') name = trigger.target.name1;
									if (typeof player.storage.nsfzxys_guwu[name] != 'number') {
										player.storage.nsfzxys_guwu[name] = 1;
									} else {
										player.storage.nsfzxys_guwu[name] += 1;
									}
									if (player.storage.nsfzxys_guwu[name] == 2) trigger.isGuwu = true;
								},
							},
							reset: {
								trigger: {
									global: 'phaseAfter'
								},
								forced: true,
								silent: true,
								sub: true,
								charlotte: true,
								content: function() {
									player.storage.nsfzxys_guwu = {};
								}
							},
						},
					},
					"nsfzxys_zeyou": {
						trigger: {
							player: 'phaseDrawBegin1'
						},
						frequent: true,
						derivation: ['nsfzxys_qiangyuan', 'nsfzxys_qiaozheng'],
						content: function() {
							'step 0'
							if (!event.numFixed) trigger.changeToZero();
							event.cards = get.cards(3);
							event.count = 0;
							for (var i = 0; i < event.cards.length; i++) {
								event.count += event.cards[i].number;
							}
							player.showCards(event.cards);
							//game.cardsGotoOrdering(event.cards);
							'step 1'
							player.gain(event.cards, 'gain2');
							if (event.count <= 18) {
								player.addTempSkill('nsfzxys_qiangyuan');
								player.popup('nsfzxys_qiangyuan');
							} else if (event.count >= 27) {
								player.addTempSkill('nsfzxys_qiaozheng');
								player.popup('nsfzxys_qiaozheng');
							} else if (player.storage.nsfzxys_keyan) {
								player.addTempSkill('nsfzxys_zhilun');
								player.popup('nsfzxys_zhilun');
							}
						},
						ai: {
							threaten: 1.5
						}
					},
					"nsfzxys_fuxing": {
						trigger: {
							global: ['phaseDiscardEnd'],
						},
						frequent: true,
						filter: function(event, player) {
							var cards = [];
							event.player.getHistory('lose', function(evt) {
								if (evt && evt.getParent('phaseDiscard') == event && evt.hs) cards.addArray(evt.hs);
							});
							return cards.length > 0;
						},
						content: function() {
							'step 0'
							if (trigger.player != player) {
								player.draw();
								event.finish();
							} else {
								var cards = [];
								trigger.player.getHistory('lose', function(evt) {
									if (evt && evt.getParent('phaseDiscard') == trigger && evt.hs) cards.addArray(evt.hs);
								});
								event.count = Math.min(cards.length, 3);
								player.chooseTarget('令一名其他角色摸' + get.cnNumber(event.count) + '张牌', lib.filter.notMe).set('ai', function(target) {
									if (get.attitude(player, target) < 1) return 0;
									return get.attitude(player, target);
								});
							}
							'step 1'
							if (result.bool) {
								var target = result.targets[0];
								player.logSkill('nsfzxys_fuxing', target);
								player.line(target);
								target.draw(event.count);
							}
						},
					},
					"nsfzxys_keyan": {
						skillAnimation: true,
						animationColor: 'water',
						unique: true,
						juexingji: true,
						derivation: 'nsfzxus_yuanshi',
						trigger: {
							player: 'dying'
						},
						//priority:10,
						forced: true,
						filter: function(event, player) {
							var evt = event.getParent('damage');
							if (evt && evt.card && get.type2(evt.card) == 'trick') return !player.storage.nsfzxys_keyan;
							return false;
						},
						init: function(player) {
							if (!player.storage.nsfzxys_keyan) player.storage.nsfzxys_keyan = false;
						},
						content: function() {
							'step 0'
							player.removeSkill('nsfzxys_fuxing');
							player.loseMaxHp();
							'step 1'
							if (player.hp < 2) {
								player.recover(2 - player.hp);
							}
							'step 2'
							player.addSkill('nsfzxus_yuanshi');
							player.awakenSkill('nsfzxys_keyan');
							player.storage.nsfzxys_keyan = true;
						},
					},
					"nsfzxys_xuanwu": {
						trigger: {
							global: 'useCardToPlayer',
						},
						filter: function(event, player) {
							if (get.name(event.card) != 'sha') return false;
							if (player.countCards('h') < 1 || event.player == player) return false;
							return event.getParent().targets.length == 1;
						},
						direct: true,
						content: function() {
							'step 0'
							player.chooseCard('h', "玄武：" + get.translation(trigger.player) + "对" + get.translation(trigger.target) + "使用了【杀】，是否将一张手牌置于牌堆顶？", 1).set('ai', function(card) {
								var source = _status.event.source;
								var target = _status.event.target;
								var att1 = get.attitude(player, source);
								var att2 = get.attitude(player, target);
								if (att2 < 1) return 0;

								var val = get.value(card);
								var equip;
								for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
									if (get.type(ui.cardPile.childNodes[i]) == 'equip') {
										equip = ui.cardPile.childNodes[i];
										break;
									}
								}
								if (!equip) {
									for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
										if (get.type(ui.discardPile.childNodes[i]) == 'equip') {
											equip = ui.cardPile.childNodes[i];
											break;
										}
									}
								}
								if (!equip) {
									if (get.type(card) == 'equip') return 7 - val;
									return 0;
								}
								if (target.countCards('h', 'shan') == 0) {
									if (get.type(card) == 'equip' && target.getEquip(get.subtype(card))) {
										return 15 - val;
									}
									if (["equip3", "equip4", "equip6"].contains(get.subtype(equip))) {
										if (['tao', 'shan'].contains(get.name(card))) return 12 - val;
										if (get.name(card) == 'jiu' && target.hp < 2) return 13 - val;
									}
								}
								if (target.hp <= 2 && target.isDamaged()) {
									if (get.subtype(card) == 'equip2') return 12 - val;
									if (get.subtype(equip) == 'equip2') return 10 - val;
								}
								if (source.hp <= 1 && !source.hasSkillTag('nodamage')) {
									if (att1 > 0 && (get.subtype(equip) == 'equip1' || get.subtype(card) == 'equip1')) return 0;
									if (get.subtype(card) == 'equip1') return 15 - val;
									if (get.subtype(equip) == 'equip1') return 10 - val;
								}

								return 7 - val;
							}).set('source', trigger, player).set('target', trigger.target);
							'step 1'
							if (result.bool && result.cards) {
								player.logSkill('nsfzxys_xuanwu', trigger.target);
								player.line(trigger.target, 'green');

								event.card = result.cards[0];
								player.lose(result.cards, ui.special);
								game.log(player, '将一张牌置于牌堆顶');
								game.broadcastAll(function(player) {
									var cardx = ui.create.card();
									cardx.classList.add('infohidden');
									cardx.classList.add('infoflip');
									player.$throw(cardx, 1000, 'nobroadcast');
								}, player);
							} else {
								event.finish();
							}
							'step 2'
							event.card.fix();
							ui.cardPile.insertBefore(event.card, ui.cardPile.firstChild);
							game.updateRoundNumber();
							'step 3'
							var equip = get.cardPile(function(card) {
								return get.type(card) == 'equip';
							});
							if (equip) {
								event.equip = equip;
							} else {
								ui.create.dialog('玄武没有装备牌');
								game.delay(1);
								event.finish();
							}
							'step 4'
							var subtype = get.subtype(event.equip);
							player.showCards(event.equip, "【玄武】使用的装备牌");
							if (trigger.target.getEquip(subtype)) {
								game.log(trigger.target, "的装备区内有", subtype, "，【杀】被无效了");
								trigger.getParent().excluded.add(trigger.target);
							}
							trigger.target.$gain(event.equip, 'gain2');
							trigger.target.equip(event.equip);

							if (subtype == 'equip1') {
								if (trigger.player.isIn()) trigger.player.damage(player);
							} else if (subtype == 'equip2') {
								trigger.target.recover(player);
							} else if (["equip3", "equip4", "equip6"].contains(subtype)) {
								var num = trigger.target.maxHp - trigger.target.countCards('h');
								num = Math.max(2, Math.min(4, num));
								trigger.target.draw(num, player); // trigger.target.drawTo(4, player);
							} else {
								trigger.target.addTempSkill('mianyi', {
									player: 'phaseBegin'
								});
							}
						},
						ai: {
							threaten: 2.5,
						},
						action_tag: {
							overall: 4,
							damage: 0.5,
							recover: 0.25,
							draw: 1,
							active_defend: 2,
						},
					},
					"nsfzxys_tianquan": {
						trigger: {
							player: 'phaseDrawBegin1',
						},
						locked: false,
						filter: function(event, player) {
							var num = game.countPlayer(function(current) {
								return current.getEquip(1);
							});
							return num > event.num;
						},
						frequent: function(event) {
							var num = game.countPlayer(function(current) {
								return current.getEquip(1);
							});
							return num > event.num;
						},
						prompt: function(event, player) {
							var num = game.countPlayer(function(current) {
								return current.getEquip(1);
							});
							return "当前场上有" + get.cnNumber(num) + "张武器牌，是否发动【天权】？（原本摸牌数为" + get.cnNumber(event.num) + "张）";
						},
						content: function() {
							var num = game.countPlayer(function(current) {
								return current.getEquip(1);
							});
							trigger.num = num;
							trigger.numFixed = true;
						},
						mod: {
							maxHandcard: function(player, num) {
								return num + game.countPlayer(function(current) {
									return current.getEquip(2);
								});
							},
						},
						action_tag: {
							overall: 2,
							draw: 1.5,
							maxHand: 1,
						},
					},
					"nsfzxys_jixing": {
						enable: ['chooseToUse', 'chooseToRespond'],
						usable: 1,
						filter: function(event, player) {
							return player.countCards('h') > 0;
						},
						init: function(player) {
							if (Array.isArray(player.storage.nsfzxys_jixing)) return;

							var list = [];
							for (var i = 0; i < lib.inpile.length; i++) {
								var name = lib.inpile[i];
								if (list.contains(name)) continue;
								if (get.type(name) == 'basic' || get.type(name) == 'trick') list.push(name);
							}
							player.storage.nsfzxys_jixing = list;
						},
						chooseButton: {
							dialog: function(event, player) {
								var list = [];

								for (var i = 0; i < player.storage.nsfzxys_jixing.length; i++) {
									var name = player.storage.nsfzxys_jixing[i];

									if (get.type(name) == 'trick') list.push(['锦囊', '', name]);
									else if (get.type(name) == 'basic') list.push(['基本', '', name]);
								}
								if (list.length == 0) {
									return ui.create.dialog('极星已无可用牌');
								}
								return ui.create.dialog('极星', [list, 'vcard']);
							},
							filter: function(button, player) {
								return _status.event.getParent().filterCard({
									name: button.link[2]
								}, player, _status.event.getParent());
							},
							check: function(button) {
								var player = _status.event.player;
								if (player.countCards('h', button.link[2]) > 0) return 0;
								var effect = player.getUseValue(button.link[2]);
								if (effect > 0) return effect;
								return 0;
							},
							backup: function(links, player) {
								return {
									filterCard: true,
									selectCard: 1,
									popname: true,
									check: function(card) {
										return 6.1 - get.value(card);
									},
									position: 'h',
									viewAs: {
										name: links[0][2],
									},
									onuse: function(result, player) {
										player.storage.nsfzxys_jixing.remove(result.card.name);
										if (player.storage.nsfzxys_jixing.length == 0) {
											if (player.hasSkill('nsfzxys_chaoxian')) player.addSkill('nsfzxys_chaoxian_ready');
										}
									},
									onrespond: function(result, player) {
										player.storage.nsfzxys_jixing.remove(result.card.name);
										if (player.storage.nsfzxys_jixing.length == 0) {
											if (player.hasSkill('nsfzxys_chaoxian')) player.addSkill('nsfzxys_chaoxian_ready');
										}
									},
									hiddenCard: function(player, name) {
										if (player.countCards('h') < 1 || !player.storage.nsfzxys_jixing.contains('wuxie')) return false;
										var num = player.getStat().skill.nsfzxys_liangzi;
										if (!num) return name == 'wuxie';
									},
								};
							},
							prompt: function(links, player) {
								return '将一张牌当做' + get.translation(links[0][2]) + '使用';
							},
							hiddenCard: function(player, name) {
								if (player.countCards('h') < 1 || !player.storage.nsfzxys_jixing.contains('wuxie')) return false;
								var num = player.getStat().skill.nsfzxys_liangzi;
								if (!num) return name == 'wuxie';
							},
						},
						hiddenCard: function(player, name) {
							if (player.countCards('h') < 1 || !player.storage.nsfzxys_jixing.contains('wuxie')) return false;
							var num = player.getStat().skill.nsfzxys_liangzi;
							if (!num) return name == 'wuxie';
						},
						ai: {
							order: 7,
							result: {
								player: function(player) {
									var players = game.filterPlayer();
									return 1;
								},
							},
							threaten: 1.9,
							save: true,
							respondTao: true,
							respondShan: true,
							respondSha: true,
							skillTagFilter: function(player, tag) {
								if (player.countCards('h') < 1) return false;

								if (tag == 'respondSha') {
									if (!player.storage.nsfzxys_jixing.contains('sha')) return false;
								}
								if (tag == 'respondShan') {
									if (!player.storage.nsfzxys_jixing.contains('shan')) return false;
								}
								if (tag == 'respondTao') {
									if (!player.storage.nsfzxys_jixing.contains('tao')) return false;
								}
								if (tag == 'save') {
									if (!player.storage.nsfzxys_jixing.contains('tao') && !player.storage.nsfzxys_jixing.contains('jiu')) return false;
								}
							},
						},
						//group: 'nsfzxys_jixing_wuxie',
					},
					"nsfzxys_jixing_wuxie": {
						enable: "chooseToUse",
						sub: true,
						prompt: "将一张牌当做无懈可击使用",
						filter: function(event, player) {
							if (player.getStat().skill.nsfzxys_jixing) return false;

							return player.countCards('h') && (player.storage.nsfzxys_jixing.contains('wuxie'));
						},
						viewAsFilter: function(player) {
							return player.countCards('h') && (player.storage.nsfzxys_jixing.contains('wuxie'));
						},
						onuse: function(result, player) {
							player.storage.nsfzxys_jixing.remove('wuxie');
							player.getStat().skill.nsfzxys_jixing = 1;
						},
						filterCard: true,
						position: 'h',
						selectCard: 1,
						viewAs: {
							name: "wuxie",
						},
						check: function(card) {
							return 6.1 - get.value(card);
						},
					},
					"nsfzxys_shuke": {
						init: function(player) {
							if (Array.isArray(player.storage.nsfzxys_shuke)) return;

							var list = [];
							for (var i in lib.skill) {
								if (nsfzxys_skillActionTag(i, 'loseHp_defend') > 0) {
									list.add(i);
								}
							}

							player.storage.nsfzxys_shuke = list;
						},
						mark: true,
						intro: {
							mark: function(dialog, content, player, storage, skill) {
								/*for (var i in player.tempSkills) {
									if (nsfzxys_skillActionTag(i, 'loseHp_defend') > 0) {
										dialog.addText("当前技能：" + get.translation(i));
										dialog.addText(get.translation(i + '_info'), false);
										break;
									}
								}*/
								if (player.storage.nsfzxys_shuke_current && player != _status.currentPhase) {
									var name = player.storage.nsfzxys_shuke_current;
									dialog.addText("当前技能：" + get.translation(name));
									dialog.addText(get.translation(name + '_info'), false);
								}
								if (Array.isArray(player.storage.nsfzxys_shuke) && player.storage.nsfzxys_shuke.length > 0) {
									return ("还有以下技能可以获得：" + get.translation(player.storage.nsfzxys_shuke));
								}
							},
						},
						onremove: function(player) {
							if (player.storage.nsfzxys_shuke_current) player.removeSkill(player.storage.nsfzxys_shuke_current);
						},
						trigger: {
							global: 'gameDrawAfter',
							player: ['phaseJieshuBegin'],
						},
						forced: true,
						content: function() {
							'step 0'
							if (player.storage.nsfzxys_shuke.length > 0) {
								event.name = player.storage.nsfzxys_shuke.randomGet();
								player.chooseBool("选择获得技能【" + get.translation(event.name) + "】，或不获得并回复一点体力").set('choice', player.hp > 1 || !player.isDamaged());
							} else {
								player.recover();
								delete player.storage.nsfzxys_shuke_current;
								event.finish();
							}
							'step 1'
							if (result.bool) {
								player.popup(event.name);
								game.log(player, "获得了技能：", event.name);

								player.addTempSkill(event.name, {
									player: 'phaseBegin'
								});
							} else {
								player.recover();
								delete player.storage.nsfzxys_shuke_current;
								event.finish();
							}
							'step 2'
							game.delay(1);
							player.storage.nsfzxys_shuke.remove(event.name);
							player.storage.nsfzxys_shuke_current = event.name;
							'step 3'
							player.markSkill('nsfzxys_shuke');
							if (player.storage.nsfzxys_shuke.length == 0) {
								//player.unmarkSkill('nsfzxys_shuke');
								if (player.hasSkill('nsfzxys_chaoxian')) player.addSkill('nsfzxys_chaoxian_ready');
							}
						},
					},
					"nsfzxys_chaoxian": {
						trigger: {
							player: "phaseBefore",
						},
						forced: true,
						locked: true,
						juexingji: true,
						fixed: true,
						superCharlotte: true,
						charlotte: true,
						zero: true,
						skillAnimation: "epic",
						animationColor: "metal",
						firstDo: true,
						priority: Infinity,
						filter: function(event, player) {
							return player.hasSkill('nsfzxys_chaoxian_ready');
						},
						content: function() {
							var bool = false;
							if (player == game.me) bool = true;
							else switch (get.mode()) {
								case 'identity':
									{
										game.showIdentity();
										var id1 = player.identity;
										var id2 = game.me.identity;
										if (['zhu', 'zhong', 'mingzhong'].contains(id1)) {
											if (['zhu', 'zhong', 'mingzhong'].contains(id2)) bool = true;
											break;
										} else if (id1 == 'fan') {
											if (id2 == 'fan') bool = true;
											break;
										}
										break;
									}
								case 'guozhan':
									{
										if (game.me.isFriendOf(player)) bool = true;
										break;
									}
								case 'versus':
									{
										if (player.side == game.me.side) bool = true;
										break;
									}
								case 'boss':
									{
										if (player.side == game.me.side) bool = true;
										break;
									}
								default:
									{}
							}
							game.over(bool);
						},
					},
					"nsfzxys_chaoxian_ready": {
						locked: true,
						fixed: true,
						superCharlotte: true,
						charlotte: true,
						zero: true,
						mark: true,
						intro: {
							content: "【超限】即将发动！",
						},
						ai: {
							threaten: 10,
						},
					},
				},
				translate: {
					"nsfzxys_losehp1": "失去体力1",
					"nsfzxys_losehp1_info": "当你成为其他角色的基本牌或非延时类的锦囊牌的目标后，你可以失去一点体力，令该牌对你无效。",
					"nsfzxys_losehp2": "失去体力2",
					"nsfzxys_losehp2_info": "当你成为一张其他角色的牌的目标时，你可以失去一点体力，然后取消此目标。",
					"nsfzxys_losehp3": "失去体力3",
					"nsfzxys_losehp3_info": "当你受到伤害时，你可以失去一点体力，然后取消之。",
					"nsfzxys_forbid": "禁牌",
					//"nsfzxys_forbid_info": "不能使用或打出牌",

					"nsfzxys_jiancha": "检查",
					"nsfzxys_jiancha_info": "一名其他角色的结束阶段，你可以令该角色选择一项：1.将一张与你的【检查】牌花色均不同的手牌置于你的武将牌上；2.受到你造成的一点伤害并获得你武将牌上所有【检查】牌，然后直至你的下一个回合开始你不能再使用【检查】。你的准备阶段，你弃置所有【检查】牌。",
					"nsfzxys_danda": "单打",
					"nsfzxys_danda_info": "你的回合外，当一名角色成为【杀】的目标时，若你也在来源的攻击范围内，你可以弃置一张基本牌令来源选择一项：1.打出一张【闪】并令此【杀】对目标角色无效；2.根据你弃置的牌执行后续效果：【杀】：来源受到两点此【杀】造成的伤害；【闪】：你获得来源一张牌和这张【杀】；其他：你和目标角色各摸两张牌。",
					"nsfzxys_fenqi": "奋起",
					"nsfzxys_fenqi_info": "限定技，出牌阶段，你展示牌堆顶五张牌，若这些牌中没有【杀】，则你继续展示牌堆顶的牌；直至展示的牌中有【杀】为止，你获得这些牌，这些牌本回合不计入手牌上限，你本回合使用【杀】没有距离限制。",
					"nsfzxys_fenqi_af": "奋起",
					"nsfzxys_zhilun": "质论",
					"nsfzxys_zhilun_info": "出牌阶段限一次，你选择一名其他角色并展示牌堆顶的X张牌。你获得这些牌中所有点数为质数的牌，然后对该角色造成点数为A或合数的牌数量的伤害。（X为你已失去的体力值且至少为1）",
					"nsfzxys_bianliang": "变量",
					"nsfzxys_bianliang_info": "当你成为其他角色使用的牌的目标时，若有角色不是此牌的目标，你可以失去一点体力并将此牌的目标转移给一名不是此牌目标的角色（可以选择非法角色）。",
					"nsfzxys_doudou": "豆豆",
					"nsfzxys_doudou_info": "每名角色的回合限一次，你可以执行一项：1.当你使用一张牌时，摸一张牌；2.当你成为一名其他角色的牌的目标时，摸两张牌。若此时不是你的回合，直至回合结束，每次你成为一张牌的目标时，需弃置一张手牌。",
					"nsfzxys_doudou_db": "豆豆",
					"nsfzxys_niangqiang": "娘腔",
					"nsfzxys_niangqiang_info": "限定技，出牌阶段，你可以将至多两张牌置于武将牌上。你的准备阶段开始时，移除你武将牌上的一张牌。只要你武将牌上有牌，你【豆豆】的摸牌数+1，你的性别视为女性。",
					"nsfzxys_niangqiang_af": "娘腔",
					"nsfzxys_chiren": "持仁",
					"nsfzxys_chiren_info": "出牌阶段开始时，你可以展示至多四张伤害牌，然后摸等量的牌。若你以此法展示的牌多于两张，你不能使用【杀】直至回合结束。你以此法展示的牌不计入该回合的手牌上限。",
					"nsfzxys_chiren_db": "持仁",
					"nsfzxys_egao": "恶搞",
					"nsfzxys_egao_info": "摸牌阶段结束时，你若你没有【杀】，你可以展示所有手牌，然后摸一张牌。",
					"nsfzxys_tineng": "体能",
					"nsfzxys_tineng_info": "当你使用的【杀】指定目标后，可以令目标角色选择一项：1.打出一张【杀】并令你摸一张牌，然后你使用的【杀】对其无效，本回合你使用【杀】的次数+1；2.你对其造成一点伤害。",
					"nsfzxys_youxue": "优学",
					"nsfzxys_youxue_info": "锁定技，你不会成为【南蛮入侵】、【万箭齐发】和【闪电】的目标；当一张【南蛮入侵】或【万箭齐发】结算完毕后，你回复一点体力。",
					"nsfzxys_tihai": "题海",
					"nsfzxys_tihai_info": "出牌阶段限一次，你可以选择所有体力值大于你或小于你的角色，你与这些角色各失去一点体力。",
					"nsfzxys_tihai_2": "题海",
					"nsfzxys_tihai_backup": "题海",
					"nsfzxys_kuaiyu": "快语",
					"nsfzxys_kuaiyu_info": "出牌阶段限一次，你可以弃置任意张手牌并令一名其他角色选择一项：1.弃置X+1张手牌；2.受到一点伤害并令你摸X-1张牌。（X为你的弃牌数）",
					"nsfzxys_cedu": "测度",
					"nsfzxys_cedu_info": "当你成为一张【杀】的目标时，你可以失去一点体力取消之，然后你展示牌堆顶的两张牌并令此牌的来源选择一项：1.弃置一张点数在这两张牌之间的牌，然后你获得这两张牌；2.令你回复一点体力。",
					"nsfzxys_heihua": "黑话",
					"nsfzxys_heihua_info": "当你成为一名其他角色的【杀】或者非延时类锦囊牌的目标时，可以令此牌的来源弃置你一张牌，然后直至回合结束与其他角色计算距离时+1（若弃置的是装备牌则改为2）。然后若你不在该角色的攻击范围内，取消之；若此牌对你造成了伤害，你获得伤害来源的一张牌。",
					"nsfzxys_heihua_db": "黑话",
					"nsfzxys_zigong": "自宫",
					"nsfzxys_zigong_info": "出牌阶段限一次，你可以摸X张牌。若你以此法摸了不少于三张牌，你弃置你装备区内的武器牌，然后性别变为无，且本回合攻击范围至少为X。你以此法获得的牌本回合不计入手牌上限。（X为你武器攻击范围，没有则为1）",
					"nsfzxys_zigong_af": "自宫",
					"nsfzxys_chaoyue": "超越",
					"nsfzxys_chaoyue_info": "其他角色的出牌阶段开始时，你可以对该角色或其上下家使用一张【杀】。若如此做，你摸一张牌，不能使用手牌，直至回合结束。你使用【杀】时无视目标角色的防具。",
					"nsfzxys_chaoyue_af": "超越",
					"nsfzxys_chaoyue_sha_db": "超越",
					"nsfzxys_jueshi": "绝世",
					"nsfzxys_jueshi_info": "限定技，一名角色濒死时，你可以摸两张牌然后令该角色需要的回复量+1，然后你修改【超越】。",
					"nsfzxys_lanban": "篮板",
					"nsfzxys_lanban_info": "每轮每项限一次，当一名角色使用的【杀】被【闪】响应后，你可以选择一项：1.将此【杀】交给一名角色，然后你摸一张牌；2.将此【闪】交给一名角色。",
					"nsfzxys_baoshi": "暴食",
					"nsfzxys_baoshi_info": "锁定技，游戏开始时，你获得一个“脂”标记；你受到伤害时，取消之并获得等量的“脂”标记。你的结束阶段，你移除X-1个“脂”标记，失去等量的体力并获得等量的【杀】。出牌阶段你可以额外使用X张杀。（X为你的“脂”标记数）",
					"nsfzxys_zaizhong": "载重",
					"nsfzxys_zaizhong_info": "若你有“脂”标记，你可以令你的【杀】根据花色得到下列效果：·红桃：伤害+X ·方片：使用时你摸X张牌 ·草花：攻击范围+X且需额外使用X张【闪】才能抵消 ·黑桃：造成伤害后去掉一个“脂”标记。（X为你的“脂”标记数）",
					"nsfzxys_zaizhong_after": "载重",
					"nsfzxys_xiaoyan": "笑颜",
					"nsfzxys_xiaoyan_info": "每轮限一次，其他角色的出牌阶段开始时，你可以失去一点体力令该角色摸一张牌，则该角色在此阶段中每造成一次伤害后，你回复一点体力（若你未受伤则改为摸一张牌）。",
					"nsfzxys_xiaoyan_af": "笑颜",
					"nsfzxys_jiangyou": "酱油",
					"nsfzxys_jiangyou_info": "出牌阶段，你可以弃置一张与本回合以此法弃置的牌种类均不同的牌，然后摸一张牌。若如此做，你在接下来一轮中【笑颜】的使用次数+1。",
					"nsfzxys_qiaozheng": "巧证",
					"nsfzxys_qiaozheng_info": "出牌阶段开始时，你可以与一名其他角色拼点。若你赢，视为你使用了任意一张非延时类锦囊牌（无距离限制）；若你没赢，你不能使用锦囊牌直至回合结束。你的锦囊牌不计入手牌上限。",
					"nsfzxys_qiaozheng_db": "巧证",
					"nsfzxys_jiexi": "解析",
					"nsfzxys_jiexi_info": "当你成为其他角色的基本牌或非延时类的锦囊牌的目标后，你可以失去一点体力，令该牌对你无效。当你失去一点体力后，可以将一张牌置于弃牌堆，然后从弃牌堆中获得一张点数为该牌倍数或因数的牌。",
					"nsfzxys_jiexi_2": "解析",
					"nsfzxys_duanxiao": "短小",
					"nsfzxys_duanxiao_info": "锁定技，你的攻击范围-1，至少为1。杀死你的角色获得【短小】。",
					"nsfzxys_zhuangda": "壮大",
					"nsfzxys_zhuangda_info": "游戏开始时，你可以随机使用一张武器牌。其他角色的武器牌进入弃牌堆后，你可以获得之。",
					"nsfzxys_gaoxiao": "搞笑",
					"nsfzxys_gaoxiao_info": "出牌阶段每项各限一次，你弃置一张武器牌并选择一名角色：1.该角色回复一点体力；2.该角色受到一点伤害；3.该角色使用你弃置的牌。",
					"nsfzxys_gaoda": "高大",
					"nsfzxys_gaoda_info": "锁定技，你摸牌阶段额外摸一张牌，你的手牌上限和攻击范围+1。",
					"nsfzxys_nuhuo": "怒火",
					"nsfzxys_nuhuo_info": "限定技，你可以失去一点体力，然后获得三张【杀】。直至当前阶段结束，你使用【杀】无次数限制，需要额外使用一张【闪】来抵消，无视目标角色的防具。",
					"nsfzxys_nuhuo_af": "怒火",
					"nsfzxys_zaojia": "造假",
					"nsfzxys_zaojia_info": "当你需要使用或打出一张【杀】，【闪】或者【无懈可击】时，可以将一张牌当作之使用。若如此作，你获得一个“假”标记。有“假”标记的人视为拥有技能“笑柄”。",
					"nsfzxys_jiahuo": "嫁祸",
					"nsfzxys_jiahuo_info": "当你受到伤害后，可以将等同于伤害数值的“假”标记移给伤害来源。",
					"nsfzxys_xiaobing": "笑柄",
					"nsfzxys_xiaobing_info": "锁定技，你的结束阶段，若你有X个或更多的“假”标记，你移除所有“假”标记，然后失去一点体力。（若你拥有技能【造假】，X为4，否则X为2）",
					"nsfzxys_manpao": "慢跑",
					"nsfzxys_manpao_info": "你的结束阶段，你可以选择至多三名其他角色，你令这些角色分别选择是否弃置一张牌；没有弃牌/弃置了基本牌的角色会给增加你2/1点收益值。所有角色选择完毕以后你分配你的收益值，回复一点体力/摸一张牌消耗2/1点收益值。若收益值不小于3，你翻面。",
					"nsfzxys_dunjia": "盾甲",
					"nsfzxys_dunjia_info": "当你成为【杀】的目标时，若来源的装备区内的牌不少于你，且你的装备区内没有防具，你可以随机使用一张防具牌。",
					"nsfzxys_gudong": "鼓动",
					"nsfzxys_gudong_info": "主公技。与你势力相同角色可以替你承担伤害，然后摸一张牌。若此时你的武将牌为背面朝上，则将其翻面。",
					"nsfzxys_zhijian": "志坚",
					"nsfzxys_zhijian_info": "出牌阶段，你可以选择一名已受伤的角色并弃置X张牌，令该角色回复一点体力。然后你进行一次判定。若不为红桃，该角色的X+1；若为黑色，你本回合不能再使用此技能。（X基础值为1，在该角色濒死时重置）",
					"nsfzxys_zhijian_used": "志坚",
					"nsfzxys_gongdi": "功底",
					"nsfzxys_gongdi_info": "当你进行判定后，摸一张牌；若结果为黑桃，额外摸一张牌。",
					"nsfzxys_qiangying": "强硬",
					"nsfzxys_qiangying_info": "出牌阶段，你可以弃置一张黑色手牌，然后选择一名角色；直到该角色的下一个回合结束为止，其失去所有技能。",
					"nsfzxys_qiangyuan": "强援",
					"nsfzxys_qiangyuan_info": "出牌阶段限一次，你交给一名角色一张手牌。该角色选择是否对除你和其以外的角色使用此牌。若其使用之，你摸一张牌，否则其不能使用或打出牌直至回合结束，并失去一点体力。",
					"nsfzxys_jingji": "净极",
					"nsfzxys_jingji_info": "当你受到伤害时，你可以失去一点体力，然后取消之；当你失去体力后，若此时不是你的回合，你观看当前回合角色的所有手牌且可以弃置其至多三张点数的最大公约数不为1的手牌；若此时是你的回合，或该角色在弃置后手牌数仍不少于你，你摸一张牌。",
					"nsfzxys_tangong": "贪功",
					"nsfzxys_tangong_info": "出牌阶段，你可以额外使用一张【杀】。每回合限三次，你使用【杀】指定目标后，可以摸两张牌；则此“杀”被闪避后，你失去一点体力。",
					"nsfzxys_tangong_db": "贪功",
					"nsfzxys_zhengbian": "政变",
					"nsfzxys_zhengbian_info": "限定技，你的回合结束时，你可以将一名其他角色翻面，然后你进行一个额外的回合。",
					"nsfzxys_zhengqi": "正气",
					"nsfzxys_zhengqi_info": "当一名角色脱离濒死时，你可以摸一张牌。",
					"nsfzxys_gengzhi": "耿直",
					"nsfzxys_gengzhi_info": "出牌阶段开始，你可以弃置一张黑色牌。若如此做，直至回合结束，除你以外的所有角色均不能使用或打出任何牌，非锁定技失效，不能以任何方式获得牌。",
					"nsfzxys_gengzhi_db": "耿直",
					"nsfzxys_kuangben": "狂奔",
					"nsfzxys_kuangben_info": "当你受到或造成一点伤害后，可以选择一项：1.摸一张牌；2.于本回合的结束阶段摸一张牌。你每选择一次选项2，直至回合结束你与其他角色的距离-1，可以额外使用一张【杀】。",
					"nsfzxys_huiguang": "回光",
					"nsfzxys_huiguang_info": "锁定技，当你死亡时，将一张【闪电】置于该角色的判定区内。本局游戏中，该角色的【闪电】判定必中。",
					"nsfzxys_huiguang_db": "回光",
					"nsfzxys_shiguang": "识广",
					"nsfzxys_shiguang_info": "每回合一次，你的准备阶段，当你受到伤害或失去体力后，你可以将牌堆顶一张牌置于你的武将牌上(至多五张)，然后你可以用任意数量的手牌与之交换。当其他角色使用牌时，你可以将一张与该牌花色相同的“识广”牌置于弃牌堆，然后取消此牌。",
					"nsfzxys_shiguang_gain": "识广",
					"nsfzxys_xuewei": "学委",
					"nsfzxys_xuewei_info": "主公技，每名角色的回合限一次，当你一名与你势力相同的角色失去体力后，其可以令你摸一张牌。",
					"nsfzxys_jingjian": "精简",
					"nsfzxys_jingjian_info": "每回合限一次，当一名其他角色在摸牌阶段摸牌以外的方式获得牌时，你可以令其弃置一张牌，然后你本轮不能再对其发动【精简】。",
					"nsfzxys_manfen": "满分",
					"nsfzxys_manfen_info": "当你成为其他角色的基本牌或非延时类的锦囊牌的目标后，你可以失去一点体力，令该牌对你无效。你的准备阶段或当你失去一点体力后，你可以摸三张牌，然后依次将两张牌置于牌堆顶，牌堆底或者弃牌堆。",
					"nsfzxys_wenzhong": "稳重",
					"nsfzxys_wenzhong_info": "当一张【无懈可击】以外的非延时类锦囊牌被【无懈可击】响应后，你可以获得该锦囊牌。你的非延时类锦囊牌不会被【无懈可击】响应。",
					"nsfzxys_jingxuan_bg": "竞选",
					"nsfzxys_jingxuan": "竞选",
					"nsfzxys_jingxuan_info": "限定技，出牌阶段，你可以摸X张牌并获得等量的“竞”标记。当你受到伤害时，可以弃置一个“竞”令此伤害-1；当你需要使用或打出一张【杀】时，你可以选择弃置一个“竞”，视为使用或打出之。（X为为你的已损失体力值且至少为2。）",
					"nsfzxys_jingxuan_sha": "竞选·杀",
					"nsfzxys_jingxuan_damage": "竞选·防",
					"nsfzxys_lapiao": "拉票",
					"nsfzxys_lapiao_info": "主公技，其他与你势力相同的角色使用【杀】造成伤害后，可以令你判定一次。若为红色，你获得一个“竞”标记。",
					"nsfzxys_baimian": "白面",
					"nsfzxys_baimian_info": "当你成为其他角色的伤害牌的目标后，你可以弃置一张装备牌，令此牌对你无效，然后此牌的使用者受到一点无来源伤害。",
					"nsfzxys_qingsao": "清扫",
					"nsfzxys_qingsao_info": "摸牌阶段，你可以放弃摸牌，改为展示牌堆顶的两张牌。你获得这些牌中的红色牌，然后选择X名其他角色（X为黑色牌数量且至少为1），令其选择一项：1.交给你一张装备牌；2.令你弃置其两张牌。",
					"nsfzxys_dade": "大德",
					"nsfzxys_dade_info": "当一名角色闪避了【杀】后，你可以与该角色拼点。若你赢，此【杀】仍然命中。",
					"nsfzxys_manzu": "满足",
					"nsfzxys_manzu_info": "当你进行拼点时，若你的攻击范围大于该角色，你视为赢（点数为14）；每回合一次，当你拼点时，可以摸一张牌。",
					"nsfzxys_huzhu": "互助",
					"nsfzxys_huzhu_info": "出牌阶段限一次，你可以令所有角色依次选择是否将一张手牌交给其他角色然后摸一张牌。",
					"nsfzxys_tuanjie": "团结",
					"nsfzxys_tuanjie_info": "当你受到伤害后，你可以选择至多X名角色，然后令伤害来源摸一张牌，你选择的角色各摸三张牌。（X为该伤害的点数）",
					"nsfzxys_renwang": "人望",
					"nsfzxys_renwang_info": "主公技，你的弃牌阶段开始时，若你需要弃牌，你可以令所有与你势力相同的其他角色依次选择是否弃置一张牌；若有角色弃牌，你的弃牌阶段跳过。",
					"nsfzxys_runiu": "如牛",
					"nsfzxys_runiu_info": "当你使用【杀】或【决斗】造成伤害时，可以选择进行一次判定。若判定结果为黑色，或在判定结果为红色时你选择失去一点体力，则此伤害+1。",
					"nsfzxys_biaobing": "标兵",
					"nsfzxys_biaobing_info": "当你摸牌前，可以声明一个花色。若这次你将要摸到的牌中有此花色，你额外摸一张牌。",
					"nsfzxys_yanwu": "燕舞",
					"nsfzxys_yanwu_info": "出牌阶段每项各限一次：1.将一张手牌交给一名其他角色，然后令其失去一点体力；2.将两张花色不同的手牌交给一名其他角色，然后令其武将牌翻面。",
					"nsfzxys_renqi": "人气",
					"nsfzxys_renqi_info": "一名角色受到伤害后，若该角色受到此伤害前未受伤，你可以摸一张牌。",
					"nsfzxys_banfei": "班费",
					"nsfzxys_banfei_info": "摸牌阶段，你可以放弃摸牌，改为获得所有其他角色各一张手牌，然后弃置X张牌。（X为你已失去的体力值）",
					"nsfzxys_danluan": "耽乱",
					"nsfzxys_danluan_info": "每回合限一次，当你造成伤害后，可以令伤害来源选择一项：1.其摸一张牌，然后你摸三张牌；2.你与其各摸一张牌，然后你获得其区域内的一张牌。",
					"nsfzxys_yuzhong": "语种",
					"nsfzxys_yuzhong_info": "锁定技，你的手牌上限+X，出牌阶段可以额外使用X张【杀】。（X为你当时的装备区内的牌数）",
					"nsfzxys_suanjin": "算尽",
					"nsfzxys_suanjin_info": "锁定技，当你失去手牌或者装备区内的所有牌后，若你已受伤，你回复一点体力，否则你失去一点体力。",
					"nsfzxys_zhanzuo_bkup": "占座",
					"nsfzxys_zhanzuo": "占座",
					"nsfzxys_zhanzuo_info": "每轮限一次，当一名其他角色使用，打出或弃置了牌时，若这些牌中有装备牌或【桃】，你可以弃置一张手牌，然后使用这些牌中的装备牌并获得所有的【桃】。",
					"nsfzxys_huhua": "护花",
					"nsfzxys_huhua_info": "当你成为一张【杀】的目标后，你可以弃置X张手牌并令一名不为且可以成为此【杀】目标且有手牌的角色交给你一张手牌。若此牌不为【闪】，该角色也成为此【杀】的目标。（X为你本轮发动的次数）",
					"nsfzxys_xuezhang": "学长",
					"nsfzxys_xuezhang_info": "你可以将一张非基本牌当作【杀】使用或打出。以此法使用的【杀】无距离限制且不计入次数限制；你以此法使用了牌后，直至回合结束你的攻击范围无限。",
					"nsfzxys_xuezhang_af": "学长",
					"nsfzxys_luanpao": "乱跑",
					"nsfzxys_luanpao_info": "出牌阶段结束时，若你本回合使用过伤害牌但是没造成过伤害，你可以弃置至多X张手牌并对一名其他角色造成等量的雷电伤害。（X为你本回合使用过的伤害牌数且至多为3）",


					"nsfzxys_wangdao": "王道",
					"nsfzxys_wangdao_info": "你可以将所有手牌（至少一张）当作【杀】或者【无懈可击】使用或打出。",
					"nsfzxys_wangdao_sha": "王道",
					"nsfzxys_wangdao_wuxie": "王道",
					"nsfzxys_dingyi": "定义",
					"nsfzxys_dingyi_info": "一名角色的回合结束时，若你该回合使用或打出了转化的牌，你可以摸两张牌。",
					"nsfzxys_chujuan": "出卷",
					"nsfzxys_chujuan_info": "出牌阶段限一次，你可以弃置一张手牌，然后展示牌堆顶3+2X张牌，然后选择一项并获得展示的牌中至多三张点数不大于你弃置的牌的牌或至多三张点数不小于你弃置的牌的牌。（X为你已失去的体力值）",
					"nsfzxys_lizhi": "离职",
					"nsfzxys_lizhi_info": "锁定技，游戏开始时，你获得两个“离”标记；当你脱离濒死时，获得一个“离”标记；当你受到伤害时，若你有“离”标记，你移除一个并防止此伤害，然后伤害来源弃置一张牌。",
					"nsfzxys_tuotang": "拖堂",
					"nsfzxys_tuotang_info": "弃牌阶段开始时，你可以弃置一张牌并视为对一名其他角色使用了一张【杀】。若此【杀】未造成伤害，你跳过弃牌阶段。",
					"nsfzxys_zigai": "自改",
					"nsfzxys_zigai_info": "你使用一张牌对一名角色造成伤害时，可以令此伤害-1，然后摸三张牌。每张牌的结算过程中限一次。",
					"nsfzxys_zigai_ai": "自改",
					"nsfzxys_zhuren": "主任",
					"nsfzxys_zhuren_info": "准备阶段开始时，你可以选择一项：1.这个回合的摸牌阶段你额外摸一张牌，然后所有角色依次摸一张牌；2.这个回合的结束阶段你摸两张牌。",
					"nsfzxys_fengci": "讽刺",
					"nsfzxys_fengci_info": "当你成为其他角色的【杀】或非延时类锦囊牌的目标后，若此牌只有一个目标，你可以与来源拼点，若你赢，该牌对你无效；否则你获得该牌。",
					"nsfzxys_zhihui": "指挥",
					"nsfzxys_zhihui_info": "准备阶段开始时，你可以选择一名角色，令该角色摸至多两张牌。若如此做，直至该角色的回合结束为止，其成为全场的伤害来源，其与所有其他角色计算距离为1。",
					"nsfzxys_zhihui_af": "指挥",
					"nsfzxys_gaoyin": "高音",
					"nsfzxys_gaoyin_info": "出牌阶段，你可以弃置1+X张牌，对你攻击范围内的一名其他角色造成1点伤害。（X为本回合已经的发动过的次数）",
					"nsfzxys_miaohui": "描绘",
					"nsfzxys_miaohui_info": "出牌阶段开始时，你可以展示一张手牌并选择弃牌堆中一张类别相同的牌获得。若如此做，你不能使用或打出以此法获得的牌以外的类型与展示的牌相同的牌，展示的牌不计入手牌上限，直至回合结束。",
					"nsfzxys_sediao": "色调",
					"nsfzxys_sediao_info": "你的回合结束时，你可以根据本回合进入弃牌堆的其他角色的牌的花色数选择一个效果：≥1：摸一张牌；≥2：复原你的武将牌；≥3：回复一点体力；≥4：执行一个额外的回合（一轮限一次）。",
					"nsfzxys_lianjie": "链接",
					"nsfzxys_lianjie_info": "准备阶段开始时，你可以横置或重置一名其他角色，然后横置或重置你自己。当你横置或重置后，可以摸一张牌；若是因为受到属性伤害，改为摸两张牌。",
					"nsfzxys_qiongju": "穷举",
					"nsfzxys_qiongju_info": "当你成为一张其他角色的牌的目标时，你可以失去一点体力，然后取消此目标；当你失去体力后，可以展示牌堆顶的1+X张牌并获得其中任意花色各不相同的牌；若获得的牌的数量不超过展示牌的一半，你可以弃置其他角色等量的牌。（X为你已失去的体力值）",
					"nsfzxys_chaitai": "拆台",
					"nsfzxys_chaitai_info": "出牌阶段限一次，你可以与一名其他角色拼点。若你赢，你直至回合结束你对该角色使用牌无距离限制，且你选择一项效果获得：1.可以将一张手牌当作【过河拆桥】对该角色使用；2.使用牌指定该角色为目标后摸一张牌。若你没赢，该角色下个回合的弃牌阶段跳过。",
					"nsfzxys_chaitai_1": "拆台",
					"nsfzxys_chaitai_2": "拆台",
					"nsfzxys_chaitai_3": "拆台",
					"nsfzxys_diangu": "典故",
					"nsfzxys_diangu_info": "若你装备区内的牌数不小于你的手牌数，你可以将装备区内的牌当作任意基本牌或非延时类锦囊牌使用或打出。",
					"nsfzxys_heishao": "黑哨",
					"nsfzxys_heishao_info": "一名角色的判定牌生效前，你可以打出一张黑色手牌。若如此做，你声明此判定结果的点数和花色。",
					"nsfzxys_liedui": "列队",
					"nsfzxys_liedui_info": "出牌阶段限一次，由你开始，所有角色依次弃置一张点数比上一张牌大的手牌，直至有角色不能如此做；你可以对该角色造成一点伤害。",
					"nsfzxys_liedui_bkup": "列队",
					"nsfzxys_pufa": "普法",
					"nsfzxys_pufa_info": "摸牌阶段开始时，你可以令所有角色依次摸一张牌然后弃一张牌。若如此做，你于本阶段的摸牌数改为此法弃置的牌的花色数。",
					"nszxys_tiaosheng": "跳绳",
					"nszxys_tiaosheng_info": "锁定技，你的回合外，当你使用或打出一张基本牌后，防止你受到所有的伤害直至回合结束。",
					"nszxys_tiaosheng_af": "跳绳",
					"nsfzxys_yitong": "一统",
					"nsfzxys_yitong_info": "锁定技，摸牌阶段你的摸牌数为X，你的手牌上限为X。（X为存活身份数，其他模式下为4）",
					"nsfzxys_dahui": "大会",
					"nsfzxys_dahui_info": "主公技，其他角色出牌阶段一局游戏各只有一次，其可以令你摸两张牌，然后你可以令该角色摸一张牌。",
					"nsfzxys_dahui_2": "大会",

					// schoolmate
					"nsfzxys_saishu": "赛数",
					"nsfzxys_saishu_info": "出牌阶段限一次，你可以令两名有手牌的角色拼点。若如此做，你摸两张牌，然后赢的角色选择一项：1.弃置你的一张牌；2.你失去一点体力。",
					"nsfzxys_zhitong": "志同",
					"nsfzxys_zhitong_info": "当一名其他角色使用【杀】时，若其选择了你或你攻击范围内的角色为目标时，你可以选择一项：1.令你成为此【杀】的唯一目标，然后你将手牌补至体力上限（至少摸一张，至多摸五张)；2.若你不是目标，你额外成为此牌的目标，然后此【杀】的使用者受到一点伤害。",
					"nsfzxys_bingjia": "病假",
					"nsfzxys_bingjia_info": "其他角色的出牌阶段开始时，你可以摸两张牌；若如此做，你需选择一项可以执行的并令该角色执行：1.其弃置你装备区内的一张牌，然后直至回合结束你不能成为伤害锦囊的目标；2.其视为对你使用了一张无视防具的【杀】，然后直至回合结束你不能成为【杀】的目标。",
					"nsfzxys_bingjia_sha": "病假",
					"nsfzxys_bingjia_trick": "病假",
					"nsfzxys_shengyuan": "声援",
					"nsfzxys_shengyuan_info": "每轮对每名角色限一次，当一名体力值为全场最低或之一的角色受到伤害或在其的回合外失去牌后，你可以令其摸两张牌。",
					"nsfzxys_jiaoyan": "娇艳",
					"nsfzxys_jiaoyan_info": "出牌阶段，若你本回合没有造成过伤害，你可以选择一名其他角色，交给其一张伤害牌或将一张装备牌置于其装备区内，其选择一项：1.对另一名你选择的角色使用一张【杀】，然后你可以获得其一张非伤害牌；此法使用的【杀】的伤害来源视为你；2.将手牌补至体力上限（至多摸五张）并翻面。出牌阶段结束时，若你本回合使用【娇艳】的次数大于1，你失去一点体力。",
					"nsfzxys_fengzu": "风阻",
					"nsfzxys_fengzu_info": "锁定技，防止你受到【杀】造成的伤害，然后你失去一点体力；你与其他角色的距离-X，其他角色与你的距离+X，你的手牌上限+X（X基础值为1，每失去一点体力增加1）；你的结束阶段，你清零【风阻】的数值增加，然后摸两倍的牌。",
					"nsfzxys_yiqing": "移情",
					"nsfzxys_yiqing_info": "摸牌阶段，你可以放弃摸牌并令一名角色将其手牌补至体力上限（至多摸五张）；若不超过三张，你摸一张牌。",
					"nsfzxys_fanglang": "放浪",
					"nsfzxys_fanglang_info": "一名其他角色使用【杀】造成伤害时，你可以展示并交给伤害来源一张手牌。若此牌为黑色，此伤害+1；否则你回复一点体力。",
					"nsfzxys_zongdai": "总代",
					"nsfzxys_zongdai_info": "限定技，出牌阶段，你可以获得各不相同的两张基本牌、四张锦囊牌、一张武器和一张防具牌，以此法获得的牌本回合不计入手牌上限。",
					"nsfzxys_zongdai_af": "总代",
					"nsfzxys_chixiang": "吃翔",
					"nsfzxys_chixiang_info": "一名其他角色回复体力后，你可以令其弃置一张牌；你的结束阶段开始时，你可以对一名本回合回复过体力的角色造成一点伤害。",
					"nsfzxys_chixiang_2": "吃翔",
					"nsfzxys_fengzi": "风姿",
					"nsfzxys_fengzi_info": "出牌阶段限一次，你令所有技能发动时手牌比你多的角色依次选择一项：1.弃置一张手牌；2.令你摸一张牌。结算完毕后，若你的手牌为唯一最多，你结束出牌阶段。你的手牌上限为你的体力上限。",
					"nsfzxys_baquan": "罢权",
					"nsfzxys_baquan_info": "出牌阶段限一次，你将一张【杀】交给其他角色，然后你摸两张牌。",
					"nsfzxys_tongguan": "统观",
					"nsfzxys_tongguan_info": "结束阶段，若你本回合没有造成伤害，你可以观看牌堆顶的五张牌并从中选择一张获得，然后将其余的牌以任意顺序置于牌堆顶或牌堆底。",
					"nsfzxys_zhishuai": "直率",
					"nsfzxys_zhishuai_info": "出牌阶段，你可以弃置一张黑色手牌并令一名其他角色选择一项：1.令你弃置其区域内的至多两张牌；2.受到你对其造成的一点伤害。若两个选项本回合均有人选择过，此技能失效直至当前阶段结束。",
					"nsfzxys_guaicai": "怪才",
					"nsfzxys_guaicai_info": "一名其他角色的【杀】被闪避后，你可以对该角色造成一点伤害。",
					"nsfzxys_duzhuan": "杜撰",
					"nsfzxys_duzhuan_info": "出牌阶段，你可以弃置两张花色相同的牌，然后从弃牌堆中选择一张花色相同的牌获得。",
					"nsfzxys_juao": "倨傲",
					"nsfzxys_juao_info": "出牌阶段限一次，你可以对一名攻击范围内的其他角色造成一点伤害。若如此做，直至你的下一个回合开始，你的所有【闪】均视为【杀】。",
					"nsfzxys_juao_db": "倨傲",
					"nsfzxys_bingdu": "病毒",
					"nsfzxys_bingdu_info": "其他角色回合开始时，你可以失去一点体力并选择一个花色，然后该角色于回合内不能使用和打出花色与你选择的不同的牌，且其每使用一张该花色的牌，你摸一张牌。",
					"nsfzxys_bingdu_db": "病毒",
					"nsfzxys_ganran": "感染",
					"nsfzxys_ganran_info": "一名角色的弃牌阶段结束时，若其于此阶段失去的牌不少于三张，你可以对其造成一点伤害。",
					"nsfzxys_biyao": "碧瑶",
					"nsfzxys_biyao_info": "出牌阶段限一次，你可以将一名角色装备区内的一张牌移动至另一名角色的装备区，若获得装备的角色不是你，失去了装备牌的角色视为对获得了牌的角色造成一点伤害。",
					"nsfzxys_yixiang": "臆想",
					"nsfzxys_yixiang_info": "锁定技，转换技，当你受到伤害时，若伤害来源为男性/女性，你摸两张牌并取消此伤害；若不为，你也可以选择切换至另一项。",

					"nsfzxys_baojuan": "爆卷",
					"nsfzxys_baojuan_info": "出牌阶段限一次，你可以对所有其他角色各造成一点伤害，然后这些角色可以分别弃置你一张牌。",
					"nsfzxys_gongshi": "公式",
					"nsfzxys_gongshi_info": "当你成为其他角色的基本牌或非延时类的锦囊牌的目标后，你可以失去一点体力，令该牌对你无效。当你失去体力后，可以令一名手牌数少于体力值的角色摸一张牌（若为你则摸两张牌），或弃置一名手牌数多于体力值的角色的一张手牌。",
					"nsfzxys_gongshi_2": "公式",
					"nsfzxys_chuiniu": "吹牛",
					"nsfzxys_chuiniu_info": "出牌阶段开始前，你可以摸至多三张牌。然后若你的手牌为全场唯一最多，你需失去一点体力或者跳过出牌阶段。",
					"nsfzxys_jianshang": "奸商",
					"nsfzxys_jianshang_info": "弃牌阶段结束时，你可以选择一名其他角色和你于此阶段的一张弃牌，该角色选择一项：1.弃置两张手牌（没有不弃，不足全弃）然后获得你选择的牌；2.失去一点体力，然后获得你本阶段弃置的其他牌。",

					"nsfzxys_moxie": "默写",
					"nsfzxys_moxie_info": "出牌阶段限一次，你展示一名其他角色的一张手牌，然后你可以弃置一张手牌并弃置该角色展示的牌。若你弃置的牌与展示的牌颜色相同，你对其造成一点伤害；且若花色也相同，你改为获得其展示的牌。",
					"nsfzxys_jilei": "积累",
					"nsfzxys_jilei_info": "弃牌阶段开始时，你可以展示所有手牌并选择一项：1.摸X张牌；2.本回合手牌上限+X。（X为你手牌中的花色数）",
					"nsfzxys_zhouzhang": "周章",
					"nsfzxys_zhouzhang_info": "当你使用【杀】指定目标后，你可以令目标选择一名其以外的角色。那名角色选择是否打出一张【闪】。若不打出，目标不能使用【闪】响应此【杀】。",
					"nsfzxys_xiangrui": "祥瑞",
					"nsfzxys_xiangrui_info": "当你使用或打出一张红桃牌，或当你成为其他角色的红桃牌的目标后，可以摸一张牌；你的红桃牌不计入手牌上限。",
					"nsfzxys_old_xiangrui": "祥瑞",
					"nsfzxys_old_xiangrui_info": "当你使用或打出一张红桃牌后，可以摸一张牌；当你成为其他角色的红桃牌的目标后，可以弃置该角色一张牌。",
					"nsfzxys_ninghan": "凝含",
					"nsfzxys_ninghan_info": "准备阶段开始时，你可以观看一名其他角色的手牌，然后你可以选择其一张手牌并展示；若你的体力值不大于该角色，该角色不能使用或打出与此牌同名的牌直至回合结束；若你的手牌数小于该角色，其弃置此牌。",
					"nsfzxys_ninghan_db": "凝含",

					"nsfzxys_chongci": "冲刺",
					"nsfzxys_chongci_info": "锁定技，你与其他角色的距离-1，其他角色与你的距离+1；你使用的【杀】需要额外使用一张【闪】才能闪避。一名其他角色的出牌阶段开始时，你可以交给其一张手牌，令其获得相同的效果直至回合结束。",
					"nsfzxys_chongci_give": "冲刺",
					"nsfzxys_chongci_give_info": "锁定技，你与其他角色的距离-1，其他角色与你的距离+1；你使用的【杀】需要额外使用一张【闪】才能闪避。",
					"nsfzxys_jieli": "借力",
					"nsfzxys_jieli_info": "一名角色使用【杀】命中后，该角色可以令你摸一张牌。",
					"nsfzxys_chuangyi": "创意",
					"nsfzxys_chuangyi_info": "每回合限一次，当你或一名在你攻击范围内的角色使用或打出一张【闪】后，你可以摸一张牌。",
					"nsfzxys_nilin": "逆鳞",
					"nsfzxys_nilin_info": "你的回合外，当你失去一张牌后，你可以选择一名与你距离1或以内的角色。该角色直至回合结束技能全部失效，且你令其打出一张【闪】，否则进行一次判定。若结果为红色，该角色直至回合结束不能使用或打出牌；若为黑色，该角色在下一个出牌阶段结束时受到一点无来源的伤害。你与其他角色计算距离时-X。（X为你已损失的体力值）",

					"nsfzxys_liangzi": "量子",
					"nsfzxys_liangzi_info": "每名角色的回合限一次，你可以将两张手牌当作任意非延时类锦囊牌或基本牌使用或打出。",
					"nsfzxus_yuanshi": "院士",
					"nsfzxus_yuanshi_info": "当你成为一张其他角色锦囊的目标时，你可以失去一点体力并取消之。若如此做，直至回合结束，你不能成为锦囊牌的目标，在一张锦囊牌进入弃牌堆后，你获得之。（至多三张）",
					"nsfzxus_yuanshi_af": "院士",

					"nsfzxys_kaiyang": "开阳",
					"nsfzxys_kaiyang_info": "",
					"nsfzxys_hebao": "核爆",
					"nsfzxys_hebao_info": "",
					"nsfzxys_shulun": "数论",
					"nsfzxys_shulun_info": "出牌阶段，你可以弃置一张手牌并展示牌堆顶两张牌。若这两张牌的点数互质，你选择一名其他角色，对其造成一点伤害，然后将这两张牌分配给你和该角色；否则你令一名角色获得这两张牌。若你弃置的牌的点数不是质数或一名角色以此法获得至少两张牌后，你本回合你不能再发动此技能。",
					"nsfzxys_tianji": "天玑",
					"nsfzxys_tianji_info": "当你成为一张其他角色的牌的目标时，你可以失去一点体力，然后取消此目标。当你失去体力后，可以选择比7大或小。你持续展示牌堆顶的牌，直至出现符合条件的牌，然后你可以选择弃置一张牌并获得所有展示的牌。",
					"nsfzxys_tianji_2": "天玑",
					"nsfzxys_tianxuan": "天璇",
					"nsfzxys_tianxuan_info": "当你进行判定时，你可以摸一张牌，然后将判定结果变得对你有利。",
					"nsfzxys_shenyin": "神音",
					"nsfzxys_shenyin_info": "游戏开始时或你的结束阶段，你可以摸X张牌并选择等量手牌置于武将牌上；若X大于2或存活人数不大于2，你翻面。（X为存活角色的一半，向上取整，至少为2。游戏开始时触发X为2。）你的准备阶段，你获得全部“神音”牌。一名角色受到伤害时，你可以将一张“神音”牌置于弃牌堆，然后若此牌的花色为红色/黑色，受伤角色/伤害来源进行判定，若结果颜色与该牌相同，则伤害-1/+1，否则伤害来源弃/摸两张牌。",
					"nsfzxys_shenyin_2": "神音",
					"nsfzxys_jianmo": "建模",
					"nsfzxys_jianmo_info": "分发起始手牌后，或你的回合开始和结束时，你可以选择一名其他角色并选择该角色的一个非觉醒技，非主公技的技能获得（同时最多拥有一个）。只要你以此法获得了技能，原本拥有者的那个技能便无效。原本拥有者死亡时，你需重新进行选择。",
					"nsfzxys_jianmo_af": "建模",
					"nsfzxys_tianshu": "天枢",
					"nsfzxys_tianshu_info": "锁定技，牌堆顶三张牌对你可见；你不会被翻面或受到无实体牌的伤害；你的技能不会被无效。",
					"nsfzxys_sanlian": "三联",
					"nsfzxys_sanlian_info": "锁定技，准备阶段，若你的体力值不为全场最少，你摸三张牌然后失去一点体力。直至回合结束，你使用牌无距离限制，跳过判定和弃牌阶段。",
					"nsfzxys_sanlian_af": "三联",
					"nsfzxys_yaoguang": "摇光",
					"nsfzxys_yaoguang_info": "当你使用或打出一张【杀】后，可以摸一张牌。",
					"nsfzxys_chehuo": "车祸",
					"nsfzxys_chehuo_info": "当你死亡时，杀死你的角色在接下来的每个自己的结束阶段会受到雷电伤害，每回合比上一回合多一点。",
					"nsfzxys_chehuo_db": "车祸",
					"nsfzxys_fuqi": "复起",
					"nsfzxys_fuqi_info": "当你受到伤害时，若此伤害没有来源或伤害来源体力值大于你，你可以弃置X张牌防止之。（X为你的体力值）",
					"nsfzxys_yuheng": "玉衡",
					"nsfzxys_yuheng_info": "锁定技，你的手牌上限与场上体力值最高的角色的体力值相同。摸牌阶段，若你的手牌比手牌上限少至少摸牌数，你改为将手牌补至手牌上限。",
					"nsfzxys_guwu": "鼓舞",
					"nsfzxys_guwu_info": "每名角色在一名角色的回合内第二次成为其他角色的伤害牌的目标时，你可以摸一张牌然后交给其一张牌。",
					"nsfzxys_zeyou": "择优",
					"nsfzxys_zeyou_info": "摸牌阶段，你可以放弃摸牌，改为从牌堆顶展示三张牌并获得。直至回合结束，若这些牌的点数和：不大于18，你获得技能【强援】；不小于27：你获得技能【巧证】。",
					"nsfzxys_fuxing": "辅星",
					"nsfzxys_fuxing_info": "你的弃牌阶段结束时，你可以令一名其他角色摸等同于你弃牌数的牌（至多三张）。其他角色的弃牌阶段结束时，若其本阶段有弃牌，你可以摸一张牌。",
					"nsfzxys_keyan": "科研",
					"nsfzxys_keyan_info": "觉醒技，当你因锦囊的伤害进入濒死时，你失去技能【辅星】，扣减一点体力上限，回复体力至两点，修改【择优】并得到技能【院士】。",
					"nsfzxys_xuanwu": "玄武",
					"nsfzxys_xuanwu_info": "一名角色成为【杀】的目标时，若此【杀】仅指定了该角色为目标，你可以将一张手牌置于牌堆顶，然后令该角色使用牌堆中的一张装备牌；若该角色因此替换了装备牌，此【杀】对该角色无效；根据此装备的类型，得到以下效果：武器：你对【杀】的来源造成一点伤害；防具：目标回复一点体力；坐骑：目标角色补至体力上限（至少摸两张，至多摸四张）；宝物：防止目标角色受到伤害直至其下一个回合开始。",
					"nsfzxys_tianquan": "天权",
					"nsfzxys_tianquan_info": "摸牌阶段，你可以改为摸取等同于场上武器牌数量的牌；场上每有一个防具牌，你的手牌上限+1。",
					"nsfzxys_jixing": "极星",
					"nsfzxys_jixing_info": "每回合限一次，你可以将一张手牌当作一张未以此法选择过的任意基本牌或者非延时类锦囊牌使用或打出。",
					"nsfzxys_jixing_wuxie": "极星",
					"nsfzxys_shuke": "数科",
					"nsfzxys_shuke_info": "锁定技，游戏开始时或你的结束阶段，你随机观看一个未以此法获得过的【失去体力】的防御性技能，然后你可以选择获得该技能直至你的下一个回合开始，或回复一点体力。",
					"nsfzxys_chaoxian": "超限",
					"nsfzxys_chaoxian_info": "觉醒技，你的回合开始前，若以下两项满足任意一项：1.【极星】没有可以使用的牌；2.【数科】没有可以获得的技能，你获得本局游戏胜利。",
					"nsfzxys_chaoxian_ready": "超限",
				},
			},
			intro: "本包为作者初中/高中时期的班杀，为了保护个人隐私，绝大部分人物均以称号而非人物名使用，并且不附有照片",
			author: "水天一色",
			diskURL: "",
			forumURL: "",
			version: "6.0",
		},
		files: {
			"character": ["一枝红杏.jpg", "nsfzxys_m1828_yq.jpg", "nsfzxys_m1818_tss.jpg", "nsfzxys_t03_ljf.jpg", "nsfzxys_t08_zjp.jpg", "女高音.jpg"],
			"card": [],
			"skill": []
		}
	}
})