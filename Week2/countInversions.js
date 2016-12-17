/**
 * Created by davidbridges on 11/27/16.
 */

// Brute force method //
function countInv(arr) {
    var totalInversions = 0;

    for (var i=0; i < arr.length; i++) {
        for (var j=i+1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                totalInversions = totalInversions + 1;
            }
        }
    }

    return totalInversions;
}

function merge(left, right) {
    var result = [],
        inversions = left[0] + right[0],
        leftArr = left[1],
        rightArr = right[1];

    while(leftArr.length || rightArr.length) {
        if(leftArr.length && rightArr.length) {

            // count inversions when moving from right array to result array
            if(leftArr[0] <= rightArr[0]) {
                result.push(leftArr.shift());
            } else {
                result.push(rightArr.shift());
                inversions = inversions + leftArr.length;
            }
        } else if (leftArr.length) {
            result.push(leftArr.shift());
        } else {
            result.push(rightArr.shift());
        }
    }

    return [inversions,result];
}

function mergeSort(array) {
    if(array.length === 1) {
        return [0,array];
    }

    var length = array.length,
        mid    = Math.floor(length * 0.5),
        left   = array.slice(0, mid),
        right  = array.slice(mid, length);

    var leftResult = mergeSort(left);
    var rightResult = mergeSort(right);

    return merge(leftResult,rightResult);

}

function countInversions() {
    var LineByLineReader = require('./line-by-line.js'),
        lr = new LineByLineReader('1000_IntegerArray.txt', {skipEmptyLines: true }),
        row = 0,
        numVals=0,
        arr=[];

    lr.on('error', function (err) {
        throw err;
    });

    lr.on('line', function (line) {
        arr.push(line);
        numVals++
    });

    lr.on('end', function () {
        console.log("Rows imported: " +  numVals);
        console.log(Date.now());
        console.log('Merge Sort Inversions: ' + mergeSort(arr)[0]);
        console.log(Date.now());
        console.log('Brute Force Inversions: ' + countInv(arr));
        console.log(Date.now());
    });
}

var thisArr = [769, 721, 114, 908, 208, 17, 636, 445, 110, 192, 6, 261, 520, 716, 472, 532, 476, 157, 118, 253, 448, 629, 362, 159, 454, 660, 105, 895, 288, 502, 46, 573, 1000, 948, 171, 185, 354, 943, 512, 495, 675, 777, 233, 957, 514, 389, 439, 366, 390, 308, 231, 62, 277, 776, 557, 600, 715, 667, 666, 609, 912, 554, 782, 796, 432, 361, 379, 128, 739, 347, 850, 763, 945, 566, 693, 321, 534, 953, 227, 95, 293, 139, 146, 682, 673, 606, 377, 50, 68, 224, 500, 870, 376, 518, 203, 767, 221, 468, 800, 165, 246, 92, 789, 729, 883, 931, 326, 748, 563, 177, 874, 294, 829, 310, 814, 112, 627, 944, 523, 34, 892, 841, 599, 38, 871, 508, 375, 592, 723, 477, 699, 287, 284, 53, 416, 199, 272, 437, 656, 595, 845, 714, 788, 546, 142, 89, 478, 738, 940, 426, 589, 237, 762, 982, 441, 958, 728, 168, 364, 239, 258, 878, 759, 303, 815, 24, 458, 704, 330, 758, 865, 98, 195, 651, 827, 473, 754, 355, 640, 801, 774, 887, 578, 598, 184, 285, 923, 230, 921, 768, 517, 161, 493, 186, 30, 398, 604, 807, 641, 610, 794, 490, 222, 268, 885, 300, 219, 198, 881, 553, 942, 696, 66, 122, 150, 984, 897, 106, 450, 620, 357, 896, 372, 96, 4, 939, 527, 381, 386, 858, 117, 622, 976, 504, 740, 541, 234, 531, 149, 562, 621, 572, 124, 596, 625, 61, 977, 941, 631, 601, 462, 81, 820, 174, 327, 440, 144, 713, 126, 586, 229, 27, 798, 664, 322, 332, 63, 247, 57, 380, 5, 694, 402, 647, 938, 574, 317, 851, 860, 749, 913, 678, 45, 637, 395, 200, 570, 172, 59, 492, 324, 677, 658, 497, 407, 190, 346, 453, 936, 718, 926, 593, 588, 712, 257, 784, 183, 136, 792, 189, 856, 304, 663, 786, 590, 687, 549, 413, 91, 487, 956, 423, 442, 206, 507, 455, 191, 679, 929, 970, 701, 511, 37, 341, 132, 99, 397, 986, 972, 683, 536, 857, 162, 732, 924, 545, 438, 995, 817, 356, 86, 242, 383, 872, 69, 243, 551, 809, 808, 778, 780, 163, 43, 752, 1, 481, 731, 158, 741, 603, 39, 602, 877, 244, 35, 180, 167, 329, 342, 18, 873, 555, 131, 33, 494, 2, 115, 238, 535, 107, 530, 446, 540, 436, 909, 559, 630, 421, 213, 700, 435, 58, 928, 264, 686, 457, 204, 286, 29, 138, 839, 840, 365, 412, 915, 802, 803, 182, 624, 615, 611, 251, 787, 369, 822, 644, 40, 703, 25, 88, 151, 950, 466, 282, 283, 12, 951, 558, 134, 898, 911, 648, 722, 812, 819, 842, 121, 583, 77, 717, 394, 56, 41, 404, 11, 742, 100, 724, 954, 836, 60, 259, 934, 484, 576, 634, 935, 447, 374, 32, 847, 84, 526, 725, 47, 210, 869, 235, 510, 864, 900, 21, 101, 799, 868, 240, 521, 584, 80, 737, 419, 685, 585, 266, 498, 765, 36, 22, 400, 85, 973, 422, 503, 488, 109, 581, 79, 175, 657, 3, 708, 207, 761, 914, 922, 795, 846, 702, 271, 19, 463, 255, 338, 54, 989, 408, 918, 960, 661, 904, 331, 486, 279, 643, 459, 391, 835, 594, 582, 388, 862, 832, 966, 711, 963, 879, 298, 859, 392, 886, 513, 680, 318, 373, 409, 916, 764, 176, 833, 524, 133, 343, 249, 519, 67, 154, 645, 844, 930, 525, 461, 13, 902, 772, 876, 705, 120, 959, 706, 323, 26, 430, 316, 988, 564, 974, 363, 659, 123, 632, 290, 612, 401, 328, 367, 990, 903, 78, 289, 821, 248, 434, 843, 983, 113, 947, 334, 826, 360, 747, 319, 633, 429, 639, 975, 971, 314, 491, 597, 387, 108, 483, 456, 278, 733, 968, 669, 688, 672, 465, 707, 211, 152, 605, 281, 969, 427, 755, 403, 415, 254, 791, 538, 358, 267, 475, 797, 901, 225, 52, 263, 552, 580, 964, 650, 516, 145, 985, 270, 368, 849, 228, 135, 226, 320, 556, 561, 496, 499, 339, 187, 919, 719, 48, 670, 550, 23, 97, 471, 333, 75, 730, 906, 635, 336, 980, 292, 280, 232, 130, 166, 952, 125, 301, 751, 894, 852, 460, 420, 215, 652, 781, 181, 771, 734, 273, 783, 560, 350, 501, 153, 569, 689, 773, 617, 212, 998, 349, 920, 325, 528, 311, 753, 978, 74, 164, 351, 296, 102, 756, 236, 770, 987, 178, 854, 889, 265, 90, 55, 141, 655, 710, 28, 818, 691, 544, 140, 129, 127, 15, 250, 743, 307, 169, 505, 529, 766, 993, 750, 83, 218, 193, 642, 515, 890, 345, 810, 547, 312, 614, 42, 880, 216, 608, 867, 668, 425, 410, 205, 855, 823, 882, 709, 607, 779, 775, 470, 241, 674, 137, 173, 893, 698, 256, 384, 469, 433, 727, 619, 690, 745, 82, 449, 485, 309, 313, 961, 116, 695, 676, 891, 359, 424, 587, 340, 188, 805, 155, 220, 276, 417, 837, 452, 937, 760, 147, 506, 451, 428, 949, 370, 697, 967, 736, 156, 816, 785, 10, 905, 996, 726, 539, 393, 991, 480, 946, 917, 382, 9, 999, 567, 414, 245, 907, 684, 16, 720, 406, 962, 209, 411, 925, 143, 464, 418, 31, 853, 119, 344, 692, 305, 806, 888, 828, 997, 681, 72, 509, 571, 875, 170, 831, 252, 160, 910, 104, 337, 223, 274, 405, 565, 474, 623, 76, 646, 482, 933, 51, 87, 479, 618, 8, 804, 202, 44, 353, 979, 148, 260, 348, 194, 981, 371, 994, 378, 543, 533, 654, 824, 431, 861, 297, 70, 793, 830, 315, 103, 735, 757, 295, 665, 217, 65, 575, 790, 662, 262, 834, 542, 616, 744, 14, 467, 269, 653, 399, 591, 825, 179, 306, 111, 73, 568, 965, 899, 927, 671, 71, 628, 863, 613, 649, 838, 201, 884, 275, 385, 214, 299, 537, 7, 489, 813, 196, 548, 992, 443, 746, 848, 20, 49, 522, 932, 291, 93, 638, 866, 396, 444, 94, 579, 811, 352, 64, 302, 197, 626, 335, 955, 577];


//console.log('Original Array: ' + thisArr);
//console.log('Sorted Array: ' + mergeSort(thisArr)[1]);
//console.log(Date.now());
//console.log('Merge Sort Inversions: ' + mergeSort(thisArr)[0]);
//console.log(Date.now());
//console.log('Brute Force Inversions: ' + countInv(thisArr));
//console.log(Date.now());

countInversions();

